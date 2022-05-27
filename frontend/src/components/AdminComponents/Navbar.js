import React from 'react'


const Navbar = () => {

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <a href='#' className='navbar-brand'>Codibook</a>
                    <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <div className='navbar-nav ms-auto'>
                            <a href='/dashboard' className='nav-item nav-link active'>Dashboard</a>
                            <a href='#' className='nav-item nav-link'>Profile</a>
                            <div className='nav-item dropdown'>
                                <a href='#' className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>Seller Center</a>
                                <div className='dropdown-menu'>
                                    <a href='#' className='dropdown-item'>Products</a>
                                    <a href='#' className='dropdown-item'>Orders</a>
                                    <a href='#' className='dropdown-item'>Drafts</a>
                                </div>
                            </div>
                        </div>
                        <div className='navbar-nav ms-auto'>
                            <a href='#' className='nav-item nav-link'>Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar