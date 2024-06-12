// import Hero from "../../assets/hero.png";

import { Arrivalcard } from "../../Component";
import "./Arrivail.css";
import Arr1 from "../../assets/arr1.png";
import Arr2 from "../../assets/arr2.png";
import Arr3 from "../../assets/arr3.png";

export default function Arrivail() {
  return (
    <div className="arrivila ">
      <h2 className="fs-2 mb-5">New Arrivals in this week</h2>

      <div className="row arrivila-inner ">
        <div className="right">
          <Arrivalcard
            Bg={"#ead9cf"}
            Color={"#163135"}
            ScColor={"#0000004d"}
            Img={Arr1}
            Title={"Plant for Interior Decoration"}
            SubTitle={"Big Sale Product"}
            price={true}
          />
        </div>
        <div className="left">
          <Arrivalcard
            Bg={"#e5eae2"}
            Color={"#163135"}
            ScColor={"#0000004d"}
            Img={Arr2}
            Title={"Monsera"}
            SubTitle={"New Category"}
          />
          <Arrivalcard
            Bg={"#163135"}
            Color={"#FFF"}
            ScColor={"#ffffff4d"}
            Img={Arr3}
            Title={"Plant for Garden"}
            SubTitle={"New Product"}
          />
        </div>
      </div>
    </div>
  );
}
