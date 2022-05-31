import React from 'react'


const Navbar = () => {

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <a href='/dashboard' className='navbar-brand'>Codibook</a>
                    <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <div className='navbar-nav ms-auto'>
                            <a href='/dashboard' className='nav-item nav-link active'>Dashboard</a>
                            <a href='/profile' className='nav-item nav-link'>Profile</a>
                            <div className='nav-item dropdown'>
                                <a className='nav-link dropdown-toggle' data-bs-toggle='dropdown'>Seller Management</a>
                                <div className='dropdown-menu'>
                                    <a href='/listproduct' className='dropdown-item'>Products</a>
                                    <a href='/listorder' className='dropdown-item'>Orders</a>
                                </div>
                            </div>
                        </div>
                        <div className='navbar-nav ms-auto'>
                            <a href='/login' className='nav-item nav-link'>Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar