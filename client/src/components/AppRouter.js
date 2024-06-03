import {Routes, Route, Navigate} from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { MAIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Context } from "..";
import { useContext } from 'react';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user.email)
    return(
            <Routes>
                    {authRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element= {Component} exact/>
                    )}
                    {publicRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element= {Component} exact/>
                    )}
                        <Route 
                            path='*'
                            element={<Navigate to={MAIN_ROUTE} replace />}
                        />
                </Routes>
    )
} 

export default AppRouter