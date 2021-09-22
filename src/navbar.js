// eslint-disable-next-line
import React, { components } from 'react';
function Navbar() {
    const cartCost = 0.00;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid mx-5">
                <a className="navbar-brand" href="/#">Kavishala Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Menu
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/#">All Products</a></li>
                                <li><a className="dropdown-item" href="/#">Books</a></li>
                                <li><a className="dropdown-item" href="/#">Merchendise</a></li>
                                <li><a className="dropdown-item" href="/#">Others</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex me-3">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </form>
                    <div className="navbar-text">
                        <span className="text-muted me-2">Cart Total : ₹ {cartCost}</span>
                        <a href="/#" className="text-muted"><i className="fas fa-shopping-cart"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;