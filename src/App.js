// eslint-disable-next-line
import React, { Component } from 'react';
import './App.css';
import Carousel from './carousel';
import Navbar from './navbar';
import { Breadcrumb, Layout } from './pageLayout';
import Footer from './footer';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-end" id="navbarText">
            <span className="navbar-text">
              <a id="login_link" href="/accounts/login/" className="nav-link text-muted">
                <i className="fas fa-sign-in-alt me-2"></i>
                Login or register
              </a>
            </span>
          </div>
        </div>
      </nav>
      <Carousel />
      <Navbar />
      <Breadcrumb />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
