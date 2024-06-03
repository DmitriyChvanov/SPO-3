import { Component } from "react"
import AuthPage from "./pages/AuthPage/AuthPage"
import ItemPage from "./pages/ItemPage/ItemPage"
import Shop from "./pages/Shop/Shop"
import Basket from "./pages/basket/Basket"
import { ABOUT_ROUTE, ACCOUNT_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import MainPage from "./pages/main/MainPage"
import AboutUs from "./pages/AboutUs/AboutUs"
import Contacts from "./pages/Contacts/Contacts"
import AccountPage from "./pages/AccountPAge/AccountPage"

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: <Basket/>,
    },
    {
        path: ACCOUNT_ROUTE,
        Component: <AccountPage/>,
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
        path: REGISTRATION_ROUTE,
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
