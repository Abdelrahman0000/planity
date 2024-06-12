import Img from "../../assets/about.png";
import "./Featurs.css";

export default function Featurs() {
  return (
    <div className="feature ">
      <div className="row justify-content-between align-items-center featurs-inner">
        <div className="left">
          <div className="image">
            <img src={Img} alt="Monsera Plant" />
          </div>
        </div>

        <div className="right">
          <h3 className="fs-1">
            We have made the beauty of plants one of the most beautiful features
            in your home.
          </h3>
          <p className="fs-6">
            A cozy home is a home that is decorated with the freshness of green
            and fresh plants.
          </p>
        </div>
      </div>
    </div>
  );
}
