const { Basket, BasketItem, Item } = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController {
    async create(req, res, next) {
        try {
            const { basketId, itemId, quantity } = req.body;
            const basketItem = await BasketItem.create({ basketId, itemId, quantity });
            return res.json(basketItem);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async get(req, res, next) {
        try {
            const { basketId } = req.query;
            const basketItems = await BasketItem.findAll({ where: { basketId }, include: Item });
            return res.json(basketItems);
        } catch (err) {
            next(ApiError.internal(err.message));
        }
    }

    async update(req, res, next) {
        try {
            const { id, quantity } = req.body;
            const basketItem = await BasketItem.findByPk(id);
            if (!basketItem) {
                return next(ApiError.notFound('Basket item not found'));
            }
            basketItem.quantity = quantity;
            await basketItem.save();
            return res.json(basketItem);
        } catch (err) {
            next(ApiError.internal(err.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const basketItem = await BasketItem.findByPk(id);
            if (!basketItem) {
                return next(ApiError.notFound('Basket item not found'));
            }
            await basketItem.destroy();
            return res.json({ message: 'Basket item deleted' });
        } catch (err) {
            next(ApiError.internal(err.message));
        }
    }
}

module.exports = new BasketController();
