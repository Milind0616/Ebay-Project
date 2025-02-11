import React from 'react'


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const dropdownRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
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
                {/* <div className="watch">
                    <p>Watchlist <i className="fa-solid fa-angle-down"></i></p>
                </div> */}
                <div className="watch" ref={dropdownRef}>
                    <p onClick={() => setOpen(!open)}>Watchlist<i className="fa-solid fa-angle-down"></i></p>
                    {open && (
                        <ul className="menu">
                            <li className="links">
                                <button onClick={() => alert("Menu 1 clicked")}>Menu 1</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 2</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 3</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 4</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 5</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 6</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 7</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 8</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 9</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 10</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 11</button>
                            </li>
                            <li className="links">
                                <button onClick={() => alert("Menu 2 clicked")}>Menu 12</button>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="watch1">
                    <p>My ebay <i className="fa-solid fa-angle-down"></i></p>
                </div>
            </div>
        </section>
    );
}

export default Navbar;

