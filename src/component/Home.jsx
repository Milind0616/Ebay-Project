import React, { useEffect } from "react";

// Category Item Component
const CategoryItem = ({ name }) => <li>{name}</li>;

// Categories List Component
const CategoryNavbar = () => {
    const categories = [
        "Saved",
        "Electronics",
        "Motors",
        "Fashions",
        "Collectible and Art",
        "Sports",
        "Health & Beauty",
        "Industrial Equipment",
        "Home & Garden",
        "Deals",
        "Sell",
    ];

    return (
        <nav className="navbar3">
            <div className="listitems">
                <ul className="display">
                    {categories.map((item, index) => (
                        <CategoryItem key={index} name={item} />
                    ))}
                </ul>
            </div>
        </nav>
    );
};

// Hero Section Component
const HeroSection = () => (
    <section className="hero">
        <div className="fav1">
            <div className="fav">
                <h1>All your favorite collectibles right here</h1>
                <p>It doesn’t take special powers to find what you want on eBay.</p>
            </div>
            <div className="fav2">
                <div className="btn1">
                    <button aria-label="Shop Now">Shop now</button>
                </div>
            </div>
        </div>
    </section>
);

// Product Card Component
const ProductCard = ({ imgSrc, label }) => (
    <div className="Card">
        <img src={imgSrc} alt={label} />
        <p>{label}</p>
    </div>
);

// Product Section
const ProductSection = () => {
    const imageBaseURL = "/image/product/";

    const products = [
        { img: "p1.jpg", label: "TOYS" },
        { img: "p2.jpg", label: "SNEAKERS" },
        { img: "p3.jpg", label: "P&A" },
        { img: "p4.jpg", label: "REFURBISHED" },
        { img: "p5.jpg", label: "TRADING CARDS" },
        { img: "p6.jpg", label: "PRE-LOVED LUXURY" },
    ];

    return (
        <section className="cardsection">
            {products.map((product, index) => (
                <ProductCard key={index} imgSrc={`${imageBaseURL}${product.img}`} label={product.label} />
            ))}
        </section>
    );
};

// Promotional Section Component
const PromoSection = ({ title, description, buttonText }) => (
    <section className="news">
        <div className="newtext">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div className="form">
            <button className="normal">{buttonText}</button>
        </div>
    </section>
);

// Footer Component
const Footer = () => {
    const footerLinks = ["About eBay", "Careers", "Policies", "Advertise", "Help & Contact"];

    return (
        <footer className="footer">
            <div className="footer-container">
                {[...Array(4)].map((_, i) => (
                    <div className="footer-links" key={i}>
                        <ul>
                            {footerLinks.map((link, index) => (
                                <li key={index}><a href="#">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Social Media Links */}
            <div className="footer-social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} eBay Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// Main Home Component
const Home = () => {
    useEffect(() => {
        document.title = "E-bay | Categories Loaded";
        console.log("Home component mounted!");
        return () => console.log("Home component unmounted!");
    }, []);

    return (
        <>
            <CategoryNavbar />
            <HeroSection />
            <ProductSection />
            <PromoSection title="Shopping made easy" description="Enjoy reliability, secure deliveries, and hassle-free returns" buttonText="Start now" />
            <PromoSection title="Love beyond labels" description="Save 15% on luxury fashion accessories that say more than words." buttonText="Shop luxury" />
            <Footer />
        </>
    );
};

export default Home;
