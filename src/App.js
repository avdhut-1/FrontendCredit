import logo from './logo.svg';
import './App.css';
import First from './First';
import Second from './Second';
import { Route, Routes } from 'react-router-dom';
import GetCustomerDetails from './home/GetCustomerDetails';
import Navbar from './Navbar/Navbar';
import FindCustomer from './Customers/FindCustomer';
import TransactionDetails from './TransactionDetails/TransactionDetails';
import AllTransactionsPage from './AllTransactionsPage';
import FetchCustomer from './FetchCustomer';
import DeleteCustomer from './Customers/DeleteCustomer';
import Home from './Home';
import TransactionPage from './TransactionDetails/TransactionPage';


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Addcustomer' element={<GetCustomerDetails/>}/>
        <Route path='/FindCustomer' element={<FindCustomer />} />
        <Route path='/TransactionDetails' element={<TransactionDetails />} />
        <Route path='/AllTransactionsPage' element={<AllTransactionsPage />} />
        <Route path='/fetch-customer' element={<FetchCustomer />} />
        <Route path='/delete-customer' element={<DeleteCustomer/>} />
        <Route path="/transaction" element={<TransactionPage />} />

      </Routes>
    </div>
  );
}

export default App;
