import React, { useState } from 'react';
import TransactionDetails from './TransactionDetails/TransactionDetails';

function AllTransactionsPage() {
    const [userId, setUserId] = useState(''); // State to store the entered user ID
    const [transactions, setTransactions] = useState(); // State to store fetched transaction data

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();

        // Fetch transaction data for the entered user ID
        try {
            const response = await fetch(`/api/transactions?userId=${userId}`);
            const data = await response.json();
            setTransactions(data.transactions);
        } catch (error) {
            console.error('Error fetching transaction data:', error);
        }
    };

    return (
        <div>
            <h2>All Transactions for User</h2>
            <form onSubmit={handleSearch}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Enter User ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userId"
                        value={userId}
                        onChange={handleUserIdChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            {transactions.map((transaction, index) => (
                <TransactionDetails key={index} transactionData={transaction} />
            ))}
        </div>
    );
}

export default AllTransactionsPage;
