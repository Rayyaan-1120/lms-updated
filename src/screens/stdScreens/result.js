import { useEffect, useState } from "react";
import {useSelector , useDispatch} from "react-redux"
import { readUserAuth } from "../../Redux/action/userAuth";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
// import firebase from "./../../../config/firebase";
// import Footer from "./../../../layouts/Footer";
import "./modal.css";
import Cookies from "js-cookie";

const Result = (props) => {
  // const {quizData,resultScore} = props.location.state
  // console.log(quizData,resultScore)
  console.log(props.location.state)
  const history = useHistory();
  const dispatch = useDispatch()
  const { userInfo,loadings } = useSelector((state) => state.readUserAuthReducer);
  // const {userInfo}  = useSelector(state=>state.readUserAuthReducer)
  const [quizzes, setQuizzes] = useState([]);
  
  const [customClassName, setCustomClassName] = useState(false);

  const [displayNoneClassName, setDisplayNoneClassName] = useState(false);

  const [data, setdata] = useState([]);
  const [UserId, setUserId] = useState("");
  const [Picture, setPicture] = useState("");
  const [Loading, setloading] = useState(true);
  const [Course, setCourse] = useState("");
  const userData = props.location.state.userData.user


  

    ////JAFFFAR COMMENTS THIS LINES////
    // const [allData, setAllData] = useState(props.location.state.QuizData);
    // const [scoreGot, setScoreGet] = useState(props.location.state.score);
    // const [wrongAnswer, setWrongAnswer] = useState(
    //   props.location.state.wrongAnswer
    //   );
    const [allData, setAllData] = useState(null);
    const [scoreGot, setScoreGet] = useState(null);

    
    // const [wrongAnswer, setWrongAnswer] = useState(
      //   props.location.state.wrongAnswer
      //   );
      
      console.log(allData)
      console.log(scoreGot)
      const returnDashBoard = ()=>{
        history.replace("/stdquiz")
      }
      
      
      ////JAFFFAR COMMENTS THIS LINES////
      const [perc, setPerc] = useState();
      const [grades, setGrades] = useState();
      const token = Cookies.get('Stdtoken')
      useEffect(()=>{
        if(!props.location.state || props.location.state.length == 0){
          history.replace("/stdquiz")
          // props.location.state.quizData
          // props.location.state.resultScore
        }else{
          setAllData(props.location.state.quizData )
          setScoreGet( props.location.state.resultScore)
          if(token){
            dispatch(readUserAuth(token))
          }
        }
  } , [])
      
  console.log(userData.user)



  window.addEventListener("popstate", (e) => {
    history.replace("/stdHome");
  });

  const openModal = () => {
    setCustomClassName(true);
    setDisplayNoneClassName(true);
  };

  const closeModal = () => {
    setCustomClassName(false);
    setDisplayNoneClassName(true);
  };

  const goToHome = () => {
    history.replace(`/stdHome`);
  };

  useEffect(() => {
    const Percentage = Math.floor(( scoreGot && scoreGot / allData.questions.length ) * 100);
    setPerc(Percentage);
    let grade;
    if (Percentage >= 90) {
      grade = "A+";
    } else if (Percentage >= 80) {
      grade = "A";
    } else if (Percentage >= 70) {
      grade = "B";
    } else if (Percentage >= 60) {
      grade = "C";
    } else {
      grade = "Fail";
    }
    setGrades(grade);
    const headers = { "Content-Type": "application/json" };
    axios
      .post(
        "https://jawan-tech-backend.herokuapp.com/result/addresult",
        {
          name: localStorage.getItem("fullName"),
          email: localStorage.getItem("email"),
          grade,
          perc: Percentage,
          stdId: localStorage.getItem("stdGeneratedId"),
          courseName: localStorage.getItem("course"),
          topicName: allData && allData.topicName,
          classTime: localStorage.getItem("time"),
          batchNo: localStorage.getItem("batch"),
        },
        { headers }
      )
      .then((res) => {
        // console.log(res,'resss')
      })
      .catch((err) => {
        // console.log(err,'errr')
      });

      console.log(Percentage)

  }, [scoreGot  ]);

    console.log("result screen" , userInfo)
  // console.log(allData, scoreGot, wrongAnswer);

  // console.log(props.location.state.QuizData)
  return (
    <>
      
      <div className="resultMainBox">

            <div className="resultInnerBox">

              <header>
                <div>
                  <h5>RESULT</h5>
                </div>
                <div>
                  <img src={userData && userData.multiple_image[0]} alt="profilePic"/>
                </div>
              </header>
              <section>

                <table>
                  <tr>
                    <td><strong>Name:</strong></td>
                    <td>{ userData && userData.fullName}</td>
                  </tr>
                  <tr>
                    <td><strong>Topic:</strong></td>
                    <td>{allData &&allData.topicName}</td>
                  </tr>
                  <tr>
                    <td><strong>Correct Ans:</strong></td>
                    <td>{scoreGot && scoreGot} / {allData && allData.questions.length}</td>
                  </tr>
                  <tr>
                    <td><strong>Percentage:</strong></td>
                    <td>{perc && perc}%</td>
                  </tr>
                  <tr>
                    <td><strong>Grade:</strong></td>
                    <td>{grades && grades}</td>
                  </tr>
                </table>

              </section>
              <footer>
                <div>
                  <button onClick={()=>returnDashBoard()}>DASHBOARD</button>
                </div>
              </footer>
            </div>


      </div>

    </>
  );
};

export default Result;