import React, { useEffect } from "react";

const CategoryNavbar = () => {
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

  return (
    <nav className="navbar3">
      <div className="listitems">
        <ul className="display">
          {categories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
