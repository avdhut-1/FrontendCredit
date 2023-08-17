import React, { useState } from 'react';

function FindCustomer() {
    const [customerId, setCustomerId] = useState('');

    const handleCustomerIdChange = (event) => {
        setCustomerId(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        // Perform the search logic using the customerId
        // For example: Fetch customer details from an API or database
        console.log('Searching for customer with ID:', customerId);
    };

    return (
        <div className="center-form">
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <form onSubmit={handleSearch} className="p-4 border rounded bg-light">
                    <h2 className="mb-4">Find Customer</h2>
                    <div className="mb-3">
                        <label htmlFor="customerId" className="form-label">Customer ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="customerId"
                            value={customerId}
                            onChange={handleCustomerIdChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    );
}

export default FindCustomer;
