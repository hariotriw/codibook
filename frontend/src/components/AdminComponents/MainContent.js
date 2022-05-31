import React from 'react'
import { Routes, Route } from 'react-router-dom'

// General
import Login from '../../pages/Login'
import Register from '../../pages/Register'

// Admin
import Dashboard from '../../pages/AdminPages/Dashboard'
import Profile from '../../pages/AdminPages/Profile'
import AddProduct from '../../pages/AdminPages/Products/AddProduct'
import ListProduct from '../../pages/AdminPages/Products/ListProduct'
import EditProduct from '../../pages/AdminPages/Products/EditProduct'
import DeleteProduct from '../../pages/AdminPages/Products/DeleteProduct'
import ListOrder from '../../pages/AdminPages/Orders/ListOrder'

const MainContent = () => {

    return (
        <>
            <div className='container-fluid'>
            <Routes>
                <Route path="/" element={<Dashboard></Dashboard>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route path="/admin/profile" element={<Profile></Profile>}></Route>
                <Route path="/admin/addproduct" element={<AddProduct></AddProduct>}></Route>
                <Route path="/admin/listproduct" element={<ListProduct></ListProduct>}></Route>
                <Route path="/admin/editproduct" element={<EditProduct></EditProduct>}></Route>
                <Route path="/admin/deleteproduct" element={<DeleteProduct></DeleteProduct>}></Route>
                <Route path="/admin/listorder" element={<ListOrder></ListOrder>}></Route>
            </Routes>
            </div>
        </>
    );
}

export default MainContent