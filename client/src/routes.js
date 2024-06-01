import { Component } from "react"
import AuthPage from "./pages/AuthPage/AuthPage"
import ItemPage from "./pages/ItemPage/ItemPage"
import Shop from "./pages/Shop/Shop"
import Basket from "./pages/basket/Basket"
import { ABOUT_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTARTION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import MainPage from "./pages/main/MainPage"
import AboutUs from "./pages/AboutUs/AboutUs"
import Contacts from "./pages/Contacts/Contacts"

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: <Basket/>,
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    }, 
    {
        path: LOGIN_ROUTE,
        Component: <AuthPage/>
    }, 
    {
        path: REGISTARTION_ROUTE,
        Component: <AuthPage/>
    }, 
    {
        path: ITEM_ROUTE + '/:id' ,
        Component: <ItemPage/>
    }, 
    {
        path: MAIN_ROUTE ,
        Component: <MainPage/>
    }, 
    {
        path: ABOUT_ROUTE ,
        Component: <AboutUs/>
    }, 
    {
        path: CONTACTS_ROUTE ,
        Component: <Contacts/>
    }, 

    
]
