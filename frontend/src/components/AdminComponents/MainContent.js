import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Dashboard from '../../pages/AdminPages/Dashboard'
import Profile from '../../pages/AdminPages/Profile'

import AddProduct from '../../pages/AdminPages/Products/AddProduct'
import ListProduct from '../../pages/AdminPages/Products/ListProduct'
import EditProduct from '../../pages/AdminPages/Products/EditProduct'
import DeleteProduct from '../../pages/AdminPages/Products/DeleteProduct'
import ListOrder from '../../pages/AdminPages/Orders/ListOrder'

import Utama from '../../pages/Utama'
import Login from '../../pages/Login'

const MainContent = () => {

    return (
        <>
            <div className='container-fluid'>
            <Routes>
                <Route path='/' element={<Utama></Utama>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/profile' element={<Profile></Profile>}></Route>
                <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
                <Route path='/listproduct' element={<ListProduct></ListProduct>}></Route>
                <Route path='/editproduct' element={<EditProduct></EditProduct>}></Route>
                <Route path='/deleteproduct' element={<DeleteProduct></DeleteProduct>}></Route>
                <Route path='/listorder' element={<ListOrder></ListOrder>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
            </Routes>
            </div>
        </>
    );
}

export default MainContent