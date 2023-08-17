import React from 'react';

function Home() {
    return (
        <div className="center-form">
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <form className="p-4 border rounded bg-light">
                    <h2 className="mb-4">Customer Information</h2>
                    <div className="mb-3">
                        <label htmlFor="customerId" className="form-label">Customer ID</label>
                        <input type="text" className="form-control" id="customerId" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="job" className="form-label">Job</label>
                        <input type="text" className="form-control" id="job" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select className="form-select" id="gender">
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Home;
