import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const Dashboard = () => {

    return (
        <>
            <div className='container-fluid'>
                <div className='col-md-4 grid-margin stretch-card'>
                    <div className='card'>
                        <div className='card-body'>Profile Admin Not Detail</div>
                    </div>
                </div>
                <div className='col-md-4 grid-margin stretch-card'>
                    <div className='card'>
                        <div className='card-body'>List Order Not Detail</div>
                    </div>
                </div>
                <div className='col-md-4 grid-margin stretch-card'>
                    <div className='card'>
                        <div className='card-body'>List Product Not Detail</div>
                    </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="d-flex align-items-center pb-2">
                          <div className="dot-indicator bg-danger mr-2"></div>
                          <p className="mb-0">Total Sales</p>
                        </div>
                        <h4 className="font-weight-semibold">$7,590</h4>
                        <ProgressBar variant="danger" now={80}/>
                      </div>
                      <div className="col-md-6 mt-4 mt-md-0">
                        <div className="d-flex align-items-center pb-2">
                          <div className="dot-indicator bg-success mr-2"></div>
                          <p className="mb-0">Active Users</p>
                        </div>
                        <h4 className="font-weight-semibold">$5,460</h4>
                        <ProgressBar variant="success" now={50}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}

export default Dashboard