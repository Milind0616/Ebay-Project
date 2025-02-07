import React from 'react'


const Navbar = () => {
    return (
        <section className="navbar">
            <div className="link">
                <div className="link1">
                    <p>Hi!<a href="#">Sign in</a> or <a href="#">register</a></p>
                </div>
                <div className="deals">
                    <p>Daily Deals</p>
                </div>
                <div className="deals">
                    <p>Gift Cards</p>
                </div>
                <div className="deals">
                    <p>Brand Outline</p>
                </div>
                <div className="Help">
                    <p>Help & Contact</p>
                </div>
                <div className="sell">
                    <p>Sell</p>
                </div>
                <div className="watch">
                    <p>Watchlist <i className="fa-solid fa-angle-down"></i></p>
                </div>
                <div className="watch">
                    <p>My ebay <i className="fa-solid fa-angle-down"></i></p>
                </div>
            </div>
        </section>
    );
}

export default Navbar;