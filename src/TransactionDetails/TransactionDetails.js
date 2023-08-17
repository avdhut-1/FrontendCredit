import React from 'react';
import './CustomStyles.css';



function TransactionDetails() {
    const trans_day_trans_time = 20;
    const amt = 40;
    const trans_num = 2;
    const customer_id = 17;
    const city = 'Pune';
    const state = 'Maharashtra';
    const city_population = 500;
    const merchant = 'Paytm';
    const category = 'entertainment';
    const first = 'Avdhut';
    const last = 'Chavan';
    const gender = 'M';
    const Job = 'Software engineer';
    const dob = '13/09/2001';

    return (
        <div className="transaction-details mt-3" >
            <h4>Transaction Details</h4>
            <div className="row">
                <div className="col-md-4">
                    <p><strong>Date and Time:</strong> {trans_day_trans_time}</p>
                    <p><strong>Amount:</strong> {amt}</p>
                    <p><strong>Transaction Number:</strong> {trans_num}</p>
                </div>
                <div className="col-md-4">
                    <p><strong>Customer ID:</strong> {customer_id}</p>
                    <p><strong>City:</strong> {city}</p>
                    <p><strong>State:</strong> {state}</p>
                </div>
                <div className="col-md-4">
                    <p><strong>City Population:</strong> {city_population}</p>
                    <p><strong>Merchant:</strong> {merchant}</p>
                    <p><strong>Category:</strong> {category}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <p><strong>First Name:</strong> {first}</p>
                    <p><strong>Last Name:</strong> {last}</p>
                    <p><strong>Gender:</strong> {gender}</p>
                </div>
                <div className="col-md-4">
                    <p><strong>Job:</strong> {Job}</p>
                    <p><strong>Date of Birth:</strong> {dob}</p>
                </div>
            </div>
        </div>
    );
}

export default TransactionDetails;
