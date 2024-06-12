import { useState } from "react";
import "./Plantes.css";
import { PlanteCard } from "../../Component";
import products from "./data";
import Avatar from "../../assets/monsera.png";

const categories = ["All", "Cactus", "Rose", "Lily", "Monstera"];

export default function Plantes() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="plant py-5">
      <h2 className="fs-1 mb-5">
        Make your home <br />
        beautiful with plants
      </h2>
      <img src={Avatar} className="avatar-img" alt="" />
      <div className="filter-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <PlanteCard
              key={product.id}
              imgSrc={product.imgSrc}
              title={product.title}
              price={product.price}
            />
          ))
        ) : (
          <span className="no-products-message">No plants available</span>
        )}
      </div>
    </div>
  );
}
