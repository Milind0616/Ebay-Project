import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        console.log("CategoryNavbar mounted!");
        document.title = "Categories Loaded";

        return () => {
            console.log("CategoryNavbar unmounted!");
        };
    }, []);

    const categories = [
        "Saved", "Electronics", "Motors", "Fashions", "Collectible and Art", "Sports",
        "Health & Beauty", "Industrial Equipment", "Home & Garden", "Deals", "Sell"
    ];
    const products = [
        { src: "/image/product/p1.jpg", name: "TOYS" },
        { src: "/image/product/p2.jpg", name: "SNEAKERS" },
        { src: "/image/product/p3.jpg", name: "P&A" },
        { src: "/image/product/p4.jpg", name: "REFURBISHED" },
        { src: "/image/product/p5.jpg", name: "TRADING CARDS" },
        { src: "/image/product/p6.jpg", name: "PRE-LOVED LUXURY" }
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
            {/* Category Navbar */}
            <nav className="bg-gray-100 py-3">
                <ul className="flex justify-center space-x-6 text-gray-700 text-lg font-medium">
                    {categories.map((item, index) => (
                        <li key={index} className="hover:text-blue-600 cursor-pointer">{item}</li>
                    ))}
                </ul>
            </nav>

          {/* Hero Section */}
          <section className="hero">
                <div className="fav1">
                    <div className="fav">
                        <h1>All your favorite collectibles right here</h1>
                        <p>It doesn’t take special powers to find what you want on eBay.</p>
                    </div>
                    <div className="fav2">
                        <button className="btn1">Shop now</button>
                    </div>
                </div>
            </section>

            {/* Card Section */}
           {/* Product Cards */}
           <section className='cardsection'>
                {products.map((product, index) => (
                    <div className='Card' key={index}>
                        <img src={product.src} alt={product.name} />
                        <p>{product.name}</p>
                    </div>
                ))}
            </section>

           {/* News Section */}
           <section className='news'>
                <div className='newtext'>
                    <h4>Shopping made easy</h4>
                    <p>Enjoy reliability, secure deliveries and hassle-free returns</p>
                </div>
                <button className='normal'>Start now</button>
            </section>

            {/* Banner Section */}
            <section className='Lastbanner'>
                <div className='newtext'>
                    <h4>Love beyond labels</h4>
                    <p>Save 15% on luxury fashion accessories that say more than words.</p>
                    <button className='normal'>Shop luxury</button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
                    {Array(4).fill(0).map((_, i) => (
                        <ul key={i}>
                            <li className="font-bold">About eBay</li>
                            <li className="mt-2"><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Policies</a></li>
                            <li><a href="#" className="hover:underline">Advertise</a></li>
                            <li><a href="#" className="hover:underline">Help & Contact</a></li>
                        </ul>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <p>&copy; {new Date().getFullYear()} eBay Inc. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Home;
