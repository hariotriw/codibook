import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Utama from '../../pages/Utama.js'

import Profile from '../../pages/UserPages/Profile.js'
import Katalog from '../../pages/UserPages/Katalog.js'
import ListCheckout from '../../pages/UserPages/ListCheckout.js'
import ListKeranjang from '../../pages/UserPages/listkeranjang.js'

const MainContent = () => {

    return (
        <>
            <div className='container-fluid'>
                <Routes>
                    <Route path="/" element={<Utama></Utama>}></Route>
                    <Route path="/profile" element={<Profile></Profile>}></Route>
                    <Route path="/katalog" element={<Katalog></Katalog>}></Route>
                    <Route path="/listcheckout" element={<ListCheckout></ListCheckout>}></Route>
                    <Route path="/listkeranjang" element={<ListKeranjang></ListKeranjang>}></Route>
                </Routes>
            </div>
        </>
    );
}

export default MainContent