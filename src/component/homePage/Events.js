import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./style.css";
import bmjImg from "../../images/bmj.jpeg";
import smitImg from "../../images/smit.jpeg";
import saimaImg from "../../images/saims.jpeg";
import cardImg2 from "../../images/graphic.jpeg";

const Events = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [numofCard, setNumofCard] = useState(3);
  let w = window.innerWidth;

  const updateWidth = () => {
    if (window.innerWidth > 200 && window.innerWidth < 600) {
      setNumofCard(1);
    } else if (window.innerWidth > 600 && window.innerWidth < 1200) {
      setNumofCard(2);
    } else if (window.innerWidth > 1200 && window.innerWidth < 1500) {
      setNumofCard(3);
    }
  };

  React.useEffect(() => {
    updateWidth()
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });

  const chevronWidth = 80;
  return (
    <div
      className="cor-container"
      style={{
        padding: `0 ${chevronWidth}px`,
        marginLeft: 30,
      }}
    >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numofCard}
        gutter={20}
        leftChevron={
          <p
            style={{
              backgroundColor: "#ffffff",
              color: "#008636",
              fontSize: 80,
              fontWeight: "bold",
              marginRight: "70%",
              marginBottom: 60,
            }}
            className="custom-btn"
          >
            {"<"}
          </p>
        }
        rightChevron={
          <p
            style={{
              color: "#008636",
              fontSize: 80,
              fontWeight: "bold",
              marginBottom: 60,
            }}
            className="custom-btn"
          >
            {">"}
          </p>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="card-container card-custom">
          <img
            className="img-container"
            src={bmjImg}
            width="300px"
            height="200px"
            alt=""
          />
          <div>
            <p className="text-center text-success inst-heading">BMJ</p>
          </div>
        </div>
        <div className="card-container card-custom">
          <img
            className="img-container"
            src={smitImg}
            width="300px"
            height="200px"
            alt=""
          />
          <div>
            <h3 className="text-center text-success inst-heading">SMIT</h3>
          </div>
        </div>
        <div className="card-container card-custom">
          <img
            className="img-container"
            src={saimaImg}
            width="300px"
            height="200px"
            alt=""
          />
          <div>
            <h3 className="text-center text-success inst-heading">SAIMS</h3>
          </div>
        </div>
        <div className="card-container card-custom">
          <img
            className="img-container"
            src={cardImg2}
            width="300px"
            height="200px"
            alt=""
          />
          <div>
            <h3 className="text-center text-success inst-heading">BMJ</h3>
          </div>
        </div>
        <div className="card-container card-custom">
          <img
            className="img-container"
            src={cardImg2}
            width="300px"
            height="200px"
            alt=""
          />
          <div>
            <h3 className="text-center text-success inst-heading">BMJ</h3>
          </div>
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default Events;
