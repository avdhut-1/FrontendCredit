import React, { useState } from 'react';
import TransactionDetails from './TransactionDetails';

function TransactionPage() {
    const [customerId, setCustomerId] = useState('');
    const [showTransactionDetails, setShowTransactionDetails] = useState(false);

    const handleCustomerIdChange = (event) => {
        setCustomerId(event.target.value);
    };

    const handleShowDetails = () => {
        setShowTransactionDetails(true);
    };

    return (
        <div>
            <div className="center-form mt-5">
                <div className="d-flex align-items-center justify-content-center">
                    {!showTransactionDetails ? (
                        <form>
                            <div className="mb-3">
                                <label htmlFor="customerId" className="form-label">
                                    Enter Customer ID
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="customerId"
                                    value={customerId}
                                    onChange={handleCustomerIdChange}
                                />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={handleShowDetails}>
                                Show Transaction Details
                            </button>
                        </form>
                    ) : (
                        <TransactionDetails customerId={customerId} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default TransactionPage;
