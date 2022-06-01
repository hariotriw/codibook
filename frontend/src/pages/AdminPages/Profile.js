import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../../actions/AuthenticationAction";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Button } from "react-bootstrap";

const Profile = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { getDataUserResult } = useSelector((state) => state.AuthReducer)
	const { adminGetAllProductLoading, adminGetAllProductResult, adminGetAllProductError } = useSelector((state) => state.AdminReducer)

	useEffect(() => {
		dispatch(loginStatus())
		dispatch(getDataUser())
		// dispatch(adminGetAllProduct())
	}, [dispatch])

	useEffect(() => {
		if(getDataUserResult){
			if(getDataUserResult.role === "admin") {
				
			} else if(getDataUserResult.role === "user") {
				// nanti ubah ke navigate katalog
				// navigate('/katalog')
				navigate('/')
			} else {
				navigate('/login')
			}
		}
	}, [getDataUserResult])

	// if (loginStatusResult.status === false) {
	// 	navigate('/login')
	// }

	return (
		<div className="container">
			<div className="main-body pt-5">
				<div className="row gutters-sm justify-content-center">
					<div className="col-md-3 mb-3">
						<div className="card">
							<div className="card-body">
								<div className="d-flex flex-column align-items-center text-center">
									{/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} /> */}
									<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
									<div className="mt-3">
										<h4>{ getDataUserResult ? `${getDataUserResult.name}` : 'nama...'}</h4>
										<p className="text-secondary mb-1">{ getDataUserResult ? `${getDataUserResult.email}` : 'email...'}</p>
										<p className="text-muted font-size-sm">{ getDataUserResult ? `${getDataUserResult.role}` : 'role...'}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="card mb-3">
							<div className="card-body">
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Nama</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{ getDataUserResult ? `${getDataUserResult.name}` : 'name...'}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Email</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{ getDataUserResult ? `${getDataUserResult.email}` : 'email...'}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Tanggal Lahir</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{/* { getDataUserResult ? `${getDataUserResult.birthdate}` : 'tanggal lahir...'} */}
										{ getDataUserResult ? 
											getDataUserResult.birthdate !== null ? `${getDataUserResult.birthdate}` : 'tanggal lahir masih kosong'
										: 'tanggal lahir...'}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Jenis Kelamin</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{ getDataUserResult ? `${getDataUserResult.gender}` : 'jenis kelamin..'}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Role</h6>
									</div>
									<div className="col-sm-9 text-secondary">
										{ getDataUserResult ? `${getDataUserResult.role}` : 'role...'}
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-12 d-flex">
										<Link className="no-link ms-auto me-0 d-flex" to={ getDataUserResult ? `/editprofile/${getDataUserResult.id}` : '/admin/profile'}>
										{/* <Link className="no-link ms-auto me-0 d-flex" to={`/editproduct`}> */}
											<Button className="btn btn-md btn-info px-5">Edit</Button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile