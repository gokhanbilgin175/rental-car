import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './protected_routes'
import NotFoundPage from '../pages/common/not_found_page'
import AuthPage from '../pages/common/auth_page'
import DashboardPage from '../pages/user/dashboard_page'
import CategoryEditPage from '../pages/user/category_edit_page'
import CategoryNewPage from '../pages/user/category_new_page'
import CategoryPage from '../pages/user/category_page'
import ProductPage from '../pages/user/product_page'
import ProductEditPage from '../pages/user/product_edit_page'
import ProductNewPage from '../pages/user/product_new_page'
import { useSelector } from 'react-redux'
const CustomRoutes = () => {
    const {isUserLogin} = useSelector((state) => state.auth);
    console.log(isUserLogin);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<AuthPage />} />
                    {isUserLogin === true && <><Route path="dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} /> 
                    
                    <Route path="product">
                    <Route index element={<ProtectedRoutes><ProductPage /></ProtectedRoutes>} />
                    <Route path=":productId" element={<ProtectedRoutes><ProductEditPage /></ProtectedRoutes>} />
                    <Route path="new" element={<ProtectedRoutes><ProductNewPage /></ProtectedRoutes>} />
                </Route>
                       
                       <Route path="category">
                       <Route index element={<ProtectedRoutes><CategoryPage /></ProtectedRoutes>} />
                       <Route path=":categoryId" element={<ProtectedRoutes><CategoryEditPage /></ProtectedRoutes>} />
                       <Route path="new" element={<ProtectedRoutes><CategoryNewPage /></ProtectedRoutes>} />
                   </Route>
                   </> 
                    
                    }
                   
               
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default CustomRoutes