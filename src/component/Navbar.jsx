import React from "react";

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
    <nav className="w-full bg-white border-b-2 border-gray-300 py-2">
      <div className="flex items-center justify-between px-8 text-sm text-gray-700">
        {/* Left Side Links */}
        <div className="flex space-x-5">
          <p>
            Hi!{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign in
            </a>{" "}
            or{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
          <p className="hover:text-gray-500 cursor-pointer">Daily Deals</p>
          <p className="hover:text-gray-500 cursor-pointer">Gift Cards</p>
          <p className="hover:text-gray-500 cursor-pointer">Brand Outlet</p>
          <p className="hover:text-gray-500 cursor-pointer">Help & Contact</p>
        </div>

        {/* Sell Button */}
        <div className="ml-40 hover:text-gray-500 cursor-pointer">Sell</div>

        {/* Watchlist Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center space-x-1 hover:text-gray-500 focus:outline-none"
          >
            <span>Watchlist</span>
            <i className="fa-solid fa-angle-down"></i>
          </button>

          {/* Dropdown Menu */}
          {open && (
            <ul className="absolute top-8 left-0 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
              {[...Array(12)].map((_, index) => (
                <li
                  key={index}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer"
                  onClick={() => alert(`Menu ${index + 1} clicked`)}
                >
                  Menu {index + 1}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* My eBay Dropdown */}
        <div className="ml-5 hover:text-gray-500 cursor-pointer">
          My eBay <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
