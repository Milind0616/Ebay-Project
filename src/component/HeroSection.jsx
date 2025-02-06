import React, { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    console.log("HeroSection mounted!");
    document.title = "Hero Section Loaded";

    return () => {
      console.log("HeroSection unmounted!");
    };
  }, []);

  return (
    <>
      <div className="hero">

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
      </div>
    </>
  );
};

export default HeroSection;
