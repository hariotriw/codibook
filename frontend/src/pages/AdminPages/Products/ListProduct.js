import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ListProduct = () => {

    return (
    <div>
        <div className="page-header">
          <h3 className="page-title"> Book List </h3>
          <nav aria-label="button">
            <div className="button">
            <Button variant="outline-primary" href="/addproduct">+ Tambah Buku</Button>
            </div>
          </nav>
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
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Expire</th>
                        <th>Weight</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Condition</th>
                        <th>Total Sold</th>
                        <th>Rating</th>
                        <th>Views</th>
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
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td><span className="badge bg-danger">Pending</span></td>
                        <td>
                          <Link className="no-link" to={`/editproduct`}>
                            <img src={require('../../../assets/images/pencil-938.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                          | 
                          <Link className="no-link" to={`/deleteproduct`}>
                            <img src={require('../../../assets/images/garbage-bin-10420.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                        </td>
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
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td><span className="badge bg-warning">In progress</span></td>
                        <td>
                          <Link className="no-link" to={`/editproduct`}>
                            <img src={require('../../../assets/images/pencil-938.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                          | 
                          <Link className="no-link" to={`/deleteproduct`}>
                            <img src={require('../../../assets/images/garbage-bin-10420.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                        </td>
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
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td><span className="badge bg-info">Fixed</span></td>
                        <td>
                          <Link className="no-link" to={`/editproduct`}>
                            <img src={require('../../../assets/images/pencil-938.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                          | 
                          <Link className="no-link" to={`/deleteproduct`}>
                            <img src={require('../../../assets/images/garbage-bin-10420.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                        </td>
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
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td><span className="badge bg-success">Completed</span></td>
                        <td>
                          <Link className="no-link" to={`/editproduct`}>
                            <img src={require('../../../assets/images/pencil-938.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                          | 
                          <Link className="no-link" to={`/deleteproduct`}>
                            <img src={require('../../../assets/images/garbage-bin-10420.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                        </td>
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
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td><span className="badge bg-warning">In progress</span></td>
                        <td>
                          <Link className="no-link" to={`/editproduct`}>
                            <img src={require('../../../assets/images/pencil-938.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                           | 
                          <Link className="no-link" to={`/deleteproduct`}>
                            <img src={require('../../../assets/images/garbage-bin-10420.png')} alt='Responsive image' width= '5%' className="img-responsive" />
                          </Link>
                        </td>
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

export default ListProduct