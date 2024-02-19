import React from 'react';
import Navbar1 from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavbar from './AdminNavbar';

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavbar/>
      <Panel />

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Customers
                  </a>
                </li>
                {/* Add more navigation items as needed */}
              </ul>
            </div>
          </nav>

          {/* Main content */}
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>

            {/* Placeholder content */}
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Section 1</h5>
                    <p className="card-text">Content for Section 1 goes here.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Section 2</h5>
                    <p className="card-text">Content for Section 2 goes here.</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
