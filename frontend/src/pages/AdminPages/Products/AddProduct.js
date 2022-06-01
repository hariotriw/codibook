import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../../../actions/AuthenticationAction";
import {  } from "../../../actions/AdminAction";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { Form } from 'react-bootstrap'

const AddProduct = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { getDataUserResult } = useSelector((state) => state.AuthReducer)
	const {  } = useSelector((state) => state.AdminReducer)

	useEffect(() => {
		dispatch(loginStatus())
		dispatch(getDataUser())
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

	// --- Init Product ---
	const [UserId, setUserId] = useState('')
    let [name, setName] = useState('')
    let [desc, setDesc] = useState('')
    let [price, setPrice] = useState('')
    let [stock, setStock] = useState('')
    let [expire, setExpire] = useState('')
    let [weight, setWeight] = useState('')
    let [category, setCategory] = useState('')
    let [brand, setBrand] = useState('')
    let [condition, setCondition] = useState('')
    let [totalSold, setTotalSold] = useState('')
    let [rating, setRating] = useState('')
    let [views, setViews] = useState('')

	// --- Code Here ---
	const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('handle submit');
        let formData = new FormData()
        // formData.append('image', saveImage)
        // dispatch(uploadImage(formData))
        return formData
    }

	const handleUploadChange = ((e) => {
        console.log(e.target.files)
        let uploaded = e.target.files
        // setImage(URL.createObjectURL(uploaded))
        // setSaveImage(uploaded)
    })

	return (
		<div>
			<div className="row pt-5 pb-3">
				<h3 className="page-title text-center"> Form Add Product </h3>
			</div>
			<div className="row justify-content-center pb-5">
				<div className="col-md-6 grid-margin stretch-card">
					<div className="card">
						<div className="card-body">
							<form className="forms-sample">
								{/* <Form.Control type="hidden" id="inputProductName" name="UserId" value="1" placeholder="Product Name" hidden/> */}
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputProductName">Product Name</label>
									<Form.Control type="text" id="inputProductName" name="name" placeholder="Product Name" value={name}  onChange={(event) => setName(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputDescription">Description</label>
									<Form.Control type="text" className="form-control" id="inputDescription" name="desc" placeholder="Description" value={desc}  onChange={(event) => setDesc(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputPrice">Price</label>
									<Form.Control type="number" className="form-control" id="inputPrice" name="price" placeholder="Price" value={price}  onChange={(event) => setPrice(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputStock">Stock</label>
									<Form.Control type="number" className="form-control" id="inputStock" name="stock" placeholder="Stock" value={stock}  onChange={(event) => setStock(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputExpire">Expire</label>
									<Form.Control type="date" className="form-control" id="inputExpire" name="expire" placeholder="Expire" value={expire}  onChange={(event) => setExpire(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputWeight">Weight</label>
									<Form.Control type="number" className="form-control" id="inputWeight" name="weight" placeholder="Weight" value={weight}  onChange={(event) => setWeight(event.target.value)}/>
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputCategory">Category</label>
									<Form.Control type="text" className="form-control" id="inputCategory" name="category" placeholder="Category" value={category}  onChange={(event) => setCategory(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputBrand">Brand</label>
									<Form.Control type="text" className="form-control" id="inputBrand" name="brand" placeholder="Brand" value={brand}  onChange={(event) => setBrand(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputCondition">Condition</label>
									<Form.Control type="text" className="form-control" id="inputCondition" name="condition" placeholder="Condition" value={condition}  onChange={(event) => setCondition(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputTotalSold">Total Sold</label>
									<Form.Control type="number" className="form-control" id="inputTotalSold" name="totalSold" placeholder="Total Sold" value={totalSold}  onChange={(event) => setTotalSold(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputRating">Rating</label>
									<Form.Control type="number" className="form-control" id="inputRating" name="rating" placeholder="Rating" value={rating}  onChange={(event) => setRating(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputViews">Views</label>
									<Form.Control type="number" className="form-control" id="inputViews" name="views" placeholder="Views" value={views}  onChange={(event) => setViews(event.target.value)} />
								</Form.Group>
								<Form.Group className="my-3">
									<label className="mb-1" htmlFor="inputViews">Image Sample</label>
									<Form.Control type="file" accept="image/*" className="form-control" id="images" name="images[]" placeholder="Views"  multiple onChange={(event) => handleUploadChange(event)}/>
								</Form.Group>
								<button type="submit" className="btn btn-primary ms-auto me-2 d-flex">Submit</button>
								{/* <button className="btn btn-light">Cancel</button> */}
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddProduct