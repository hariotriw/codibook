import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, loginAction } from "../../../actions/AuthenticationAction";
import { Link, useNavigate } from "react-router-dom";

const ListOrder = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loginStatus())

	}, [dispatch])
	const { loginStatusResult } = useSelector((state) => state.AuthReducer)
	if (loginStatusResult.status === false) {
		navigate('/login')
	}

	return (
		<div>
			<div className="page-header">
				<h3 className="page-title"> List Orders </h3>
			</div>
			<div className="row">
				<div className="col-lg-12 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-hover">
									<thead>
										<tr>
											<th>User</th>
											<th>Order Name</th>
											<th>Sub Total</th>
											<th>Discount</th>
											<th>Tax</th>
											<th>Total Due</th>
											<th>Total Quantity</th>
											<th>Payment Transaction</th>
											<th>City</th>
											<th>Address</th>
											<th>Status</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Jacob</td>
											<td>Photoshop</td>
											<td className="text-danger"> 28.76% <i className="mdi mdi-arrow-down"></i></td>
											<td>1</td>
											<td>2</td>
											<td>3</td>
											<td>4</td>
											<td>5</td>
											<td>6</td>
											<td>7</td>
											<td><span className="badge bg-danger">pending</span></td>
										</tr>
										<tr>
											<td>Messsy</td>
											<td>Flash</td>
											<td className="text-danger"> 21.06% <i className="mdi mdi-arrow-down"></i></td>
											<td>1</td>
											<td>2</td>
											<td>3</td>
											<td>4</td>
											<td>5</td>
											<td>6</td>
											<td>7</td>
											<td><span className="badge bg-warning">In progress</span></td>
										</tr>
										<tr>
											<td>John</td>
											<td>Premier</td>
											<td className="text-danger"> 35.00% <i className="mdi mdi-arrow-down"></i></td>
											<td>1</td>
											<td>2</td>
											<td>3</td>
											<td>4</td>
											<td>5</td>
											<td>6</td>
											<td>7</td>
											<td><span className="badge bg-info">Fixed</span></td>
										</tr>
										<tr>
											<td>Peter</td>
											<td>After effects</td>
											<td className="text-success"> 82.00% <i className="mdi mdi-arrow-up"></i></td>
											<td>1</td>
											<td>2</td>
											<td>3</td>
											<td>4</td>
											<td>5</td>
											<td>6</td>
											<td>7</td>
											<td><span className="badge bg-success">Completed</span></td>
										</tr>
										<tr>
											<td>Dave</td>
											<td>53275535</td>
											<td className="text-success"> 98.05% <i className="mdi mdi-arrow-up"></i></td>
											<td>1</td>
											<td>2</td>
											<td>3</td>
											<td>4</td>
											<td>5</td>
											<td>6</td>
											<td>7</td>
											<td><span className="badge bg-warning">In progress</span></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListOrder