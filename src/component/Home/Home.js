import React from "react";
import { CgMouse } from "react-icons/cg";
import "./home.css";
import Product from "./Product.js";

const Home = () => {
  const product = {
    name: "Blue Tshirt",
    price: "$300",
    _id: "er",
    images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
  };
  return (
    <>
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
};

export default Home;
