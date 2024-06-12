/* eslint-disable react/prop-types */
import "./PlantCard.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function PlanteCard({ imgSrc, title, price }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} className="product-image" />
      <div className="product-details row justify-content-between align-items-center">
        <div className="card-inner">
          <h2 className="product-title">{title}</h2>
          <p className="product-price">${price}</p>
        </div>
        <button className="product-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shopping-bag  text-white"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PlanteCard;
