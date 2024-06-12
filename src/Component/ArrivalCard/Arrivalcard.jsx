/* eslint-disable react/prop-types */
import "./ArrivalCard.css";

// eslint-disable-next-line react/prop-types
export default function Arrivalcard({
  Bg,
  Color,
  ScColor,
  Img,
  price,
  SubTitle,
  Title,
}) {
  return (
    <div
      className="arrival-card  p-4 row justify-content-between align-items-center"
      style={{ backgroundColor: Bg, Color: Color }}
    >
      <div className="col-7">
        <h4 style={{ color: ScColor }}>{SubTitle}</h4>
        <h3 className="fs-3 my-3" style={{ backgroundColor: Bg, color: Color }}>
          {Title}
        </h3>

        {price ? (
          <button className="price fs-5 btn mb-5 mt-3">
            Start From <span className="fs-4">$320 </span>
          </button>
        ) : (
          ""
        )}

        <button
          className="btn d-block"
          style={{ borderBottom: `2px solid ${Color}`, color: Color }}
        >
          SHOP NOW
        </button>
      </div>
      <div className="col-4 p-0  ">
        <div className="image p-0">
          <img src={Img} alt="" />
        </div>
      </div>
    </div>
  );
}
