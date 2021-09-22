// eslint-disable-next-line
import React, { Component } from 'react';

function Breadcrumb() {
    return (
        <nav aria-label="breadcrumb" className="ms-5 mt-4">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">All Products</li>
            </ol>
        </nav>
    );
}

function List() {
    return (
        <div>
            <h5>Show Results For</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <a href="/#">Books</a>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <a href="/#">V Press India</a>
                        </li>
                    </ul>
                </li>
                <li class="list-group-item">
                    <a href="/#">Merchandise</a>
                </li>
            </ul>
        </div>
    );
}

function Products() {
    const images = ["prodimg/1.jpeg", "prodimg/2.jpeg", "prodimg/3.jpeg", "prodimg/4.jpeg", "prodimg/5.jpeg",
        "prodimg/6.jpeg", "prodimg/7.jpeg", "prodimg/8.jpeg", "prodimg/9.jpeg", "prodimg/10.jpeg", "prodimg/11.jpeg", "prodimg/13.jpeg", "prodimg/12.jpeg", "prodimg/14.jpeg"];
    const names = ["10 Nagarjun quotes | E-book", "10 Firaq Gorakhpuri quotes | E-book", "10 Dharamveer Bharti quotes | E-book",
        "10 Chanakya quotes | E-book", "10 Bharattendu Harishchandra quotes | E-book", "10 Atal Bihari Vajpayee quotes | E-book", "10 Mirza Ghalib quotes | E-book",
        "10 Maithili Sharan Gupta quotes | E-book", "10 Pash quotes | E-book", "10 Harishankar Parsai quotes | E-book", "10 Mahadevi Verma quotes | E-book",
        "10 Amrita Pritam quotes | E-book", "10 Jaishankar Prasad quotes | E-book", "10 Dushyant Kumar Quotes | E-book"];
    const cost = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const available = ["In stock", "In stock", "In stock", "In stock", "In stock", "In stock", "In stock", "In stock", "In stock", "In stock", "In stock", "In stock", "In stock", "In stock"];
    const category = ["book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book", "book"];
    const page = 1;
    const count = (names.length / 20);
    const pagescount = [1];
    for (const i = 1; i <= count; i++) {
        pagescount.push(i);
    }
    const limit = Math.min(20, names.length);
    const styles = { maxWidth: '11rem', flexWrap: 'wrap' };
    const imgstyle = { width: '100%', height: '175px' }
    const hstyle = { maxHeight: '55px', textOverflow: 'ellipsis', overflow: 'hidden' }
    return (
        <div>
            <h3>All Products</h3>
            <hr />
            <span><b>{names.length}</b> results - showing <b>{((page - 1) * limit) + 1}</b> to <b>{((page - 1) * limit) + limit}</b>.</span>
            <div className="d-flex flex-row flex-wrap justify-content-center mt-5">
                {names.map((h, i) => {
                    return <div className="card text-center gx-5 mb-5 mx-3" style={styles} key={i} id={category[i]}>
                        <img src={images[i]} className="card-img-top" alt="..." style={imgstyle} />
                        <div className="card-body" style={hstyle}>
                            <h6 className="card-title"><a href="/#">{h}</a></h6>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">₹ {cost[i]}</li>
                            <li className="list-group-item"><i class="fas fa-check-circle"></i> {available[i]}</li>
                        </ul>
                        <div class="card-body">
                            <a href="/#" className="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                })}
            </div>
            <div className="d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                            <a class="page-link" href="/#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {pagescount.map(p => {
                            return <li class="page-item"><a class="page-link" href="/#">{p}</a></li>
                        })}
                        <li class="page-item">
                            <a class="page-link" href="/#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

function Layout() {
    return (
        <div className="container mx-5 mt-5">
            <div className="row">
                <div className="col-sm-3 pe-4">
                    <List />
                </div>
                <div className="col-sm-9 ps-4">
                    <Products />
                </div>
            </div>
        </div>
    );
}

export { Breadcrumb, Layout };