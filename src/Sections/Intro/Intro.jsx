import "./Intro.css";
import Hero from "../../assets/hero.png";
export default function Intro() {
  return (
    <div className="intro my-5">
      <div className="flex-sm-row d-flex flex-column-reverse justify-content-between align-items-start">
        <div className="col-sm-4 col-12  ">
          {" "}
          <h2 className="fs-1">
            Make your home <span>beautiful</span> with plants
          </h2>{" "}
          <p className="fs-6 m-0 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            cupiditate nostrum iure nam dolores repudiandae deserunt eligendi
            earum animi nisi.
          </p>
          <button className="learn-more m-0 mt-4 btn">learn more</button>
        </div>
        <div className="col-sm-8 col-12 m-sm-0 mb-5  ">
          <div className="big-card">
            <img src={Hero} className="hero" alt="" />

            <div className="my-card w-lg-60 h-25">
              <div className="card py-3 row justify-content-between align-items-center">
                <div className="col-7">
                  <h3 className="fs-5">Pisum Sativum</h3>
                  <h4 className="fs-6">Monsera</h4>
                  <button className="btn">LEARN MORE</button>
                </div>
                <div className="col-4 p-0 ">
                  <div className="image p-0">
                    <img src={Hero} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
