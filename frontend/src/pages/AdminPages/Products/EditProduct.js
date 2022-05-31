import React from 'react'
import { Form } from 'react-bootstrap'

const EditProduct = () => {

    return (
        <div>
        <div className="page-header">
          <h3 className="page-title"> Form Edit Product </h3>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <form className="forms-sample">
                  <Form.Group>
                    <label htmlFor="inputProductName">Product Name</label>
                    <Form.Control type="text" id="inputProductName" placeholder="Product Name" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputDescription">Description</label>
                    <Form.Control type="text" className="form-control" id="inputDescription" placeholder="Description" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputPrice">Price</label>
                    <Form.Control type="text" className="form-control" id="inputPrice" placeholder="Price" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputStock">Stock</label>
                    <Form.Control type="password" className="form-control" id="inputStock" placeholder="Stock" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputExpire">Expire</label>
                    <Form.Control type="password" className="form-control" id="inputExpire" placeholder="Expire" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputWeight">Weight</label>
                    <Form.Control type="password" className="form-control" id="inputWeight" placeholder="Weight" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputCategory">Category</label>
                    <Form.Control type="password" className="form-control" id="inputCategory" placeholder="Category" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputBrand">Brand</label>
                    <Form.Control type="password" className="form-control" id="inputBrand" placeholder="Brand" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputCondition">Condition</label>
                    <Form.Control type="password" className="form-control" id="inputCondition" placeholder="Condition" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputTotalSold">Total Sold</label>
                    <Form.Control type="password" className="form-control" id="inputTotalSold" placeholder="Total Sold" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputRating">Rating</label>
                    <Form.Control type="password" className="form-control" id="inputRating" placeholder="Rating" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputViews">Views</label>
                    <Form.Control type="password" className="form-control" id="inputViews" placeholder="Views" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputStatus">Status</label>
                    <Form.Control type="password" className="form-control" id="inputStatus" placeholder="Status" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="inputAction">Action</label>
                    <Form.Control type="password" className="form-control" id="inputAction" placeholder="Action" />
                  </Form.Group>
                  <div className="form-check">
                  </div>
                  <button type="submit" className="btn btn-primary mr-2">Edit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default EditProduct