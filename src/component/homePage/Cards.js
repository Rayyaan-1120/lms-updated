import React from "react";
import cardImg from '../../images/card1.jpeg'
import cardImg1 from '../../images/card2.jpeg'
import cardImg2 from '../../images/card3.jpeg'
import './style.css'
const Cards = () => {
  return (
    <div className = 'card-container-custom' style ={{display : 'flex', justifyContent :'space-evenly' , marginTop:20, flexWrap:'wrap' }}>
      <div className="card  cardCourse" >
        <img src={cardImg}  className="card-img-top" alt="..." style={{width:'95%',alignSelf:'center',marginTop:10}}/>
        <div className="card-body">
          <h5 className="card-title card-title-custom">Fast-Track Training</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card   cardCourse" >
        <img src={cardImg1}  className="card-img-top" alt="..." style={{width:'95%',alignSelf:'center',marginTop:10}}/>
        <div className="card-body">
          <h5 className="card-title card-title-custom">Simplify Reporting</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="card  cardCourse" >
        <img src={cardImg2}  className="card-img-top" alt="..." style={{width:'95%',alignSelf:'center',marginTop:10}}/>
        <div className="card-body">
          <h5 className="card-title card-title-custom ">Reduce Administration</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
