import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../../actions/AuthenticationAction";


const Navbar = () => {
    const navigate = useNavigate()
	const dispatch = useDispatch()
    
	const { getDataUserLoading, getDataUserResult, getDataUserError, loginStatusResult } = useSelector((state) => state.AuthReducer)

	useEffect(() => {
		dispatch(loginStatus())
		dispatch(getDataUser())
	}, [dispatch])

	const logoutHandler = () => {
		localStorage.clear()
		// navigate('/login')
	}

    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-fluid'>
                    <Link to="/" className='navbar-brand'>Codibook</Link>
                    <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarCollapse'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarCollapse'>
                        <div className='navbar-nav ms-auto'>
                            {/* ----- General ----- */}
                            {/* <Link to="#" className='nav-item nav-link active'>Katalog</Link> */}
                            {/* ----- end General ----- */}

                            { getDataUserResult ? 
                                getDataUserResult.role === "user" ? 
                                <>
                                    {/* ----- General ----- */}
                                    <Link to="#" className='nav-item nav-link active'>Katalog</Link>
                                    {/* ----- end General ----- */}
                                    {/* ----- User ----- */}
                                    <Link to="#" className='nav-item nav-link active'>My Cart</Link>
                                    <Link to="#" className='nav-item nav-link active'>My Order</Link>
                                    <Link to="#" className='nav-item nav-link active'>My Account</Link>
                                    {/* ----- end User ----- */}
                                </>  : 
                                getDataUserResult.role === "admin" ?
                                <>
                                    {/* ----- General ----- */}
                                    <Link to="#" className='nav-item nav-link active'>Katalog</Link>
                                    {/* ----- end General ----- */}
                                    {/* ----- Admin ----- */}
                                    <Link to="/admin/dashboard" className='nav-item nav-link active'>Dashboard</Link>
                                    <Link to="/admin/profile" className='nav-item nav-link active'>Profile</Link>
                                    <div className='nav-item dropdown'>
                                        <a className='nav-link active dropdown-toggle' data-bs-toggle='dropdown'>Seller Management</a>
                                        <div className='dropdown-menu'>
                                            <Link to='admin/listproduct' className='dropdown-item'>Products</Link>
                                            <Link to='admin/listorder' className='dropdown-item'>Orders</Link>
                                        </div>
                                    </div>
                                    {/* ----- end Admin ----- */}
                                </> : 
                                <Link to="#" className='nav-item nav-link active'>Katalog</Link>
                            // <p className='nav-item nav-link'>silahkan refresh page . . .</p>
                                : 
                                <Link to="#" className='nav-item nav-link active'>Katalog</Link>
                            }
                            

                            
                        </div>
                        <div className='navbar-nav ms-auto'>
                            
                            {/* { console.log(loginStatusResult.status)} */}
                            { loginStatusResult.status ===true ? 
                            /* ----- Login ----- */
                                <button className="btn btn-secondary my-2 my-sm-0 text-white ms-auto me-3" type="button"
                                onClick={() => logoutHandler()}>Logout</button>
                                : 
                                /* ----- Not Login ----- */
                            <Link to="/login" className='nav-item nav-link'>Login</Link>}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar