import React from 'react';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">
                        Credit Card Challenge {/* Replace CITI with Credit Card Challenge */}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Addcustomer">Add Customer</Link></li>
                                    <li><Link className="dropdown-item" to="/fetch-customer">Get Customer Details</Link></li>
                                    <li><Link className="dropdown-item" to="/delete-customer">Delete Customer</Link></li>
                                    {/* Add more dropdown items if needed */}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to = "/transaction">
                                    Transactions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
