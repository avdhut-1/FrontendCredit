import React, { useState } from 'react';

function FetchCustomer() {
    const [customer, setCustomer] = useState(null);
    const [customerId, setCustomerId] = useState('');

    const fetchCustomerDetails = () => {
        // Here you can make an API call or fetch customer details using the customer ID
        // For demonstration purposes, I'm setting up a sample customer object
        const sampleCustomer = {
            customerId: '123456',
            firstName: 'John',
            lastName: 'Doe',
            job: 'Software Engineer',
            dob: '1990-01-01',
            gender: 'Male',
        };

        setCustomer(sampleCustomer);
    };

    return (
        <div className="center-form">
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="p-4 border rounded bg-light">
                    <h2 className="mb-4">Customer Details</h2>
                    <div className="mb-3">
                        <label htmlFor="customerId" className="form-label">Enter Customer ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="customerId"
                            value={customerId}
                            onChange={(e) => setCustomerId(e.target.value)}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={fetchCustomerDetails}>Fetch Details</button>
                    {customer && (
                        <div className="mt-4">
                            <h4>Customer ID: {customer.customerId}</h4>
                            <p>First Name: {customer.firstName}</p>
                            <p>Last Name: {customer.lastName}</p>
                            <p>Job: {customer.job}</p>
                            <p>Date of Birth: {customer.dob}</p>
                            <p>Gender: {customer.gender}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FetchCustomer;
