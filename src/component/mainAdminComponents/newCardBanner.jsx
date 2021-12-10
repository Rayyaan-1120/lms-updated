import React from "react"
import Quiz from "../../images/quiz.jpeg"
import "./newCardBan.css"
function NewCardBanner({name , count , imgUrl}){
    return(
            <div className="cardbanBox">

                    <div className="cardBanImg">

                    <img src={imgUrl}  alt="quizImg" />
                
                    </div>

                    <div  className="cardBanDesBOx">
                            <div className="cardBanDes">
                            <span>{name}</span>
                            <small>{count}</small>
                            </div>
                            <div>
                                <button>View Details</button>
                            </div>
                    </div>

            </div>
    )
}
export default NewCardBanner