import React from 'react'
import { useEffect } from 'react'


const Home = () => {
    useEffect(() => {
        console.log("CategoryNavbar mounted!");
        document.title = "Categories Loaded";

        return () => {
            console.log("CategoryNavbar unmounted!");
        };
    }, []);

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

    useEffect(() => {
        console.log("HeroSection mounted!");
        document.title = "E-bay";

        return () => {
            console.log("HeroSection unmounted!");
        };
    }, []);




    return (
        <>
            <nav className="navbar3">
                <div className="listitems">
                    <ul className="display">
                        {categories.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </nav>

            <section className="hero">

                <div className="fav1">
                    <div className="fav">
                        <h1>All your favorite collectibles right here</h1>
                        <p>It doesn’t take special powers to find what you want on eBay.</p>
                    </div>
                    <div className="fav2">
                        <div className="btn1">
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
            </section>


            <section className='cardsection'>
                <div className='Card'>
                    <img src="/image/product/p1.jpg" alt="" />
                    <p>TOYS</p>
                </div>
                <div className='Card'>
                    <img src="/image/product/p2.jpg" alt="" />
                    <p>SNEAKERS</p>
                </div>
                <div className='Card'>
                    <img src="/image/product/p3.jpg" alt="" />
                    <p>P&A</p>
                </div>
                <div className='Card'>
                    <img src="/image/product/p4.jpg" alt="" />
                    <p>REFURBISHED</p>
                </div>
                <div className='Card'>
                    <img src="/image/product/p5.jpg" alt="" />
                    <p>TRADING CARDS</p>
                </div>
                <div className='Card'>
                    <img src="/image/product/p6.jpg" alt="" />
                    <p>PRE-LOVED LUXURY</p>
                </div>
            </section>


            <section className='news'>
                <div className='newtext'>
                    <h4>Shopping made easy</h4>
                    <p>Enjoy reliability, secure deliveries and hassle-free returns</p>
                </div>

                <div className='form'>
                    <button className='normal'>start now</button>
                </div>
            </section>


            <section className='Lastbanner'>
                <div className='newtext'>
                    <h4>Love beyond labels</h4>
                    <p>Save 15% on luxury fashion accessories that say more than words.</p>

                    <div className='form'>
                        <button className='normal'>Shop luxury</button>
                    </div>
                </div>
            </section>


            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-links">
                        <ul>
                            <li><a className="heading" href="#">About eBay</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Advertise</a></li>
                            <li><a href="#">Help & Contact</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">About eBay</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Advertise</a></li>
                            <li><a href="#">Help & Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a className="heading" href="#">About eBay</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Advertise</a></li>
                            <li><a href="#">Help & Contact</a></li>
                        </ul>
                        <ul>
                            <li><a className="heading" href="#">About eBay</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Advertise</a></li>
                            <li><a href="#">Help & Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <ul>
                            <li><a className="heading" href="#">About eBay</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Advertise</a></li>
                            <li><a href="#">Help & Contact</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">About eBay</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Advertise</a></li>
                            <li><a href="#">Help & Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <ul>
                            <li><a className="heading" href="#">About eBay</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Advertise</a></li>
                            <li><a href="#">Help & Contact</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">About eBay</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Advertise</a></li>
                            <li><a href="#">Help & Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="footer-social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} eBay Inc. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Home
