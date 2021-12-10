import React, { useEffect, useState, useRef } from "react";
// import Teacher from "../components/sbil/teachers";
import { useParams, useHistory } from "react-router-dom";
import Interweave from "interweave";
import "./QuizScreen.css";
import { FaUserCircle } from "react-icons/all";
import CodePic from "../../images/codesnap.PNG";
import CodePic2 from "../../images/codeSnap2.PNG";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/all";
import JawanPakistanLogo from "../../images/landscape_logo.png";
import BackGroundImg from "../../images/quizScreenImg.jpg";
import SkipModalCmp from "../../component/mainAdminComponents/SkipModalCmp";
import { Button, Modal } from "react-bootstrap";

const QuizScreen = (props) => {

  // console.log("props data" , props.location.state);
  const history = useHistory();
  
    if(!props.location.state.data){
        history.replace("/stdquiz")
    }

  // console.log(props.location.state.data);
    const params = useParams();
  
  // const language = localStorage.getItem("language");
  // let [currentQuestion, setCurrentQuestion] = useState(0);
  // const [optionChosen, setOptionChosen] = useState("");
  // const [email, setEmail] = useState("");
  // const [Username, setUsername] = useState("");
  // const [UserId, setUserId] = useState("");
  // const [Course, setCourse] = useState("");
  // const [Insitute, setInsitute] = useState("");
  // const [wrongAnswer, setWrongAnswer] = useState([]);
  // const [answerCheck, setAnswerCheck] = useState(false);
  // const history = useHistory();
  // const [timers, setTimers] = useState();
  // let [score, setScore] = useState(0);
  // const [timer, setTimer] = useState({
  //   min: 29,
  //   sec: 59,
  // });

  const [data1, setdata1] = useState([
    {
      Answer: "abc",
      Question: "what is Js",
      Options: ["Library", "Programming"],
    },
  ]);
  const [loading, setloading] = useState(true);

  const language = localStorage.getItem("language");
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [UserId, setUserId] = useState("");
  const [Course, setCourse] = useState("");
  const [Insitute, setInsitute] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [answerCheck, setAnswerCheck] = useState(false);
  const [timers, setTimers] = useState();
  let [score, setScore] = useState(0);
  const [timer, setTimer] = useState({
    min: 29,
    sec: 59,
  });
  const [customClassName, setCustomClassName] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [indState, setIndState] = useState(null);

  ////GET NAME IN LOCAL STORAGE///
  const [userFullName, setUserFullName] = useState(
    props.location.state.userData.user.fullName
  );
  // const [testName , setTestName] = useState(props.loca)
  const [quizInformation, setQuizInformation] = useState(
    props.location.state.data
  );
  const [quizQuestion, setQuizQuestion] = useState(quizInformation.questions);
  // console.log(data1,"quiz data arha hai..."  );
  const [btnValue, setBtnValue] = useState("Check");
  const [optionSelectedClass, setOptionSelectedClass] = useState("");
  let [resultScore, setResultScore] = useState(0);
  const [yesCheck, setYesCheck] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [btnDisable, setBtnDisable] = useState(false);
  const [selectOption, setSelectOption] = useState(null);
  const [disableInputRadio, setDisableInputRadio] = useState(false);
  const [labelTag, setLabelTag] = useState(null);
  const [skipQuesArr, setSkipQuesArr] = useState([]);
  const [skipQuesModal, setSkipQuesModal] = useState(false);
  const [show, setShow] = useState(false);
  let [skipQueslen, setSkipQueslen] = useState(0);
  const skipBtn = useRef();

  if (timer.min === 0 && timer.sec === 0) {
    // console.log("time end");
    clearInterval(timers);
    history.push("/result", {
      // QuizData: props.location.state.data,
      // score: score,
      // wrongAnswer: wrongAnswer,
      quizData: props.location.state.data,
      resultScore: resultScore,
    });
    // localStorage.setItem("results", JSON.stringify(Result));
    // // history.replace("/Results", Result);
    // history.replace("/user/quiz/result");
  }

  const checkOption = () => {
    // console.log(labelTag); 

    const li = document.getElementsByTagName("li");
    const inputs = document.getElementsByTagName("label");
    ///GET SELECT LI VALUE///
    let liCheckAnswer;
    let liCheckAnswerIndex;

    // console.log(inputs[0].innerText);

    if (yesCheck) {
      if (selectOption.value === data1[currentQuestion].Answer) {
        setResultScore(++resultScore);
        console.log("true ans bhai waah" , resultScore);
      
      }
       else {
           console.log("WRONG ANS" , resultScore  );

        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].innerText === data1[currentQuestion].Answer) {
            inputs[i].style.backgroundColor = "#348F50";
            inputs[i].style.color = "white";

            // console.log("yeh chal rth ahaia");
          }
        }

        // selectOption.style.backgroundColor = "red";
      }

      setBtnValue("NEXT QUES");
      // setCurrentQuestion(++currentQuestion)
      setYesCheck(false);
      setDisableInputRadio(true);
      setBtnDisable(true);
    } else {
      console.log("check nahi hai");
      alert("CHECK NAHI HAI");
    }
  };

  useEffect(() => {
    if (skipQuesModal) {
      setShow(true);
      // alert("hello reverse modal")
    }
  }, [skipQuesModal]);

  const changeQuestion = () => {
    const li = document.getElementsByTagName("li");
    const inputs = document.getElementsByTagName("label");
    setCurrentQuestion(++currentQuestion);

    if (currentQuestion < data1.length - 1 - skipQueslen) {
      setBtnDisable(false);
    } else {
      skipBtn.current.style.display = "none";
      setBtnDisable(false);
    }

    if (!(currentQuestion < data1.length - skipQueslen)) {
      if (!skipQuesModal) {
        setSkipQuesModal(true);
      }
    }

    setDisableInputRadio((state) => false);
    selectOption.checked = false;
    setBtnValue("Check");
    setIndState(null);

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style.backgroundColor = "transparent";
      inputs[i].style.color = "black";
    }
  };

  const finishResult = () => {
    history.replace("/result", {
      quizData: props.location.state.data,
      resultScore : resultScore,
      userData : props.location.state.userData
    });
  };

  ////////MY WORD END////////

  const openModal = () => {
    setCustomClassName(true);
  };

  const closeModal = () => {
    setCustomClassName(false);
  };

  const click = () => {
    setTimers(
      setInterval(() => {
        setTimer((state) => {
          return {
            min: state.sec == 0 ? state.min - 1 : state.min,
            sec: state.sec == 0 ? 59 : state.sec - 1,
          };
        });
      }, 1000)
    );
  };

  // window.onbeforeunload = function() { alert('asdshakh') };
  window.addEventListener("popstate", (e) => {
    // Nope, go back to your page
    // history.go('');
    setAnswerCheck(false);
    clearInterval(timers);
    history.replace("/result", {
      QuizData: props.location.state.data,
      score: score,
      wrongAnswer: wrongAnswer,
    });

    // setModalData();
    // openModal();
  });

  // window.onbeforeunload = function() { return false };

  function shuffle(quesArr) {
    return quesArr.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    //  console.log(props.location.state.data.questions)

    // uncomment krna hai isko
    // const quesArr = props.location.state.data.questions;

    // dummy Quiz Options
    const quesArr = [
      {
        multiCheck: false,
        Answer: "getFullYear",
        Options: ["getDateYear", "getFullYear", "getYear"],
        Question: "What is the keyword for extracting the year?",
      },
      {

        Answer: "undefined",
        multiCheck: false,
        Options: ["false", "undefined", "null", "NaN"],
        Question:
          "What value would JavaScript assign to an uninitialized variable?",
      },
      {
        Question: "Choose the right Javascript event",
        Options: ["anmouseout", "onmouseout", "inmouseout", "onclick"],
        Answer: ["onmouseout", "onclick"],
        multiCheck: true,
      },
      {
        Question: "prime minister of pakistan",
        Options: ["nawaz", "imran", "zardari", "no idea"],
        Answer: ["imran", "zardari"],
        multiCheck: true,
      },
    ];

    // console.log("day=>>>", quesArr);
    setdata1(shuffle(quesArr));
    setTimer({ ...timer, min: Number(props.location.state.data.duration - 1) });
    click();
  }, []);
  const chooseOption = (option) => {
    setOptionChosen(option);
    setAnswerCheck(true);

    // setSelectAnswer(option.innerHTML);
    // console.log(option);
    setSelectOption(option);
    setYesCheck(true);
    // option.classList.add("optionSelected")

    // const optionLists = document.getElementsByTagName("li")

    // for (let i = 0; i < optionLists.length; i++) {
    //   optionLists[i].classList.remove("optionSelected")

    // }
  };

  //  console.log(data1,'data1111')
  // console.log(props,'propsss')

  const nextQuestion = () => {
    if (optionChosen !== "") {
      if (data1[currentQuestion].Answer == optionChosen) {
        // console.log(data1[currentQuestion].Question);
        // console.log(data1[currentQuestion].Answer);
        // console.log(optionChosen);
        setScore(++score);

        // console.log("right");

        setCurrentQuestion(currentQuestion + 1);
        setOptionChosen("");

        setAnswerCheck(false);
      } else if (data1[currentQuestion].Answer !== optionChosen) {
        let data = {
          Question: data1[currentQuestion].Question,
          CrAnswer: data1[currentQuestion].Answer,
          AnsChoosen: optionChosen,
        };
        var arr = [];
        if (wrongAnswer.length == 0) {
          // console.log(arr, "111");
          arr.push(data);
          // console.log(arr, "333");
          setWrongAnswer(arr);
        } else {
          var copyArr = wrongAnswer;
          var lenArr = copyArr.length;
          copyArr[lenArr] = data;
          // arr.push(data);
          setWrongAnswer(copyArr);

          // console.log("length is more than 1");
          // console.log(wrongAnswer, "wsfdf");
        }
        setCurrentQuestion(currentQuestion + 1);
        setOptionChosen("");
        setAnswerCheck(false);
        // arr.push(wrongAnswer)
        // console.log(arr,'22')
        // console.log("wrong");

        // console.log(data);

        // firebase.database().ref(`UserData1/UserId/${language}`).child("Wrong Answer").push(data)

        // firebase
        //   .database()
        //   .ref(
        //     `/AllUsers/User/${UserId}/AllData/${Insitute}/${Course}/${language}/Wrong Answer`
        //   )
        //   .push(data);
      }
    } else {
      alert("choose the option");
    }

    setAnswerCheck(false);
    // console.log(wrongAnswer);
  };
  // console.log(JSON.stringify(data1))
  const finishQuiz = () => {
    // console.log("asd");
    if (optionChosen !== "") {
      if (data1[currentQuestion].Answer == optionChosen) {
        setScore(++score);
        // firebase
        //   .database()
        //   .ref(
        //     `/AllUsers/User/${UserId}/AllData/${Insitute}/${Course}/${language}/Score`
        //   )
        //   .set({ score });
        // localStorage.setItem("results", JSON.stringify(Result));
        // history.replace("/user/quiz/result");
        setAnswerCheck(false);
        clearInterval(timers);
        history.replace("/result", {
          QuizData: props.location.state.data,
          score: score,
          wrongAnswer: wrongAnswer,
        });
      } else if (data1[currentQuestion].Answer !== optionChosen) {
        setScore(score);

        let data = {
          Question: data1[currentQuestion].Question,
          CrAnswer: data1[currentQuestion].Answer,
          AnsChoosen: optionChosen,
        };
        var copyArr = wrongAnswer;
        var lenArr = copyArr.length;
        copyArr[lenArr] = data;
        // arr.push(data);
        setWrongAnswer(copyArr);
        setAnswerCheck(false);
        clearInterval(timers);
        history.replace("/result", {
          QuizData: props.location.state.data,
          score: score,
          wrongAnswer: wrongAnswer,
        });
        // console.log("length is more than finish");
        // console.log(wrongAnswer, "wsfdf");

        // firebase
        //   .database()
        //   .ref(
        //     `/AllUsers/User/${UserId}/AllData/${Insitute}/${Course}/${language}/Score`
        //   )
        //   .set({ score });
        // firebase
        //   .database()
        //   .ref(
        //     `/AllUsers/User/${UserId}/AllData/${Insitute}/${Course}/${language}/Wrong Answer`
        //   )
        //   .push(data);

        // localStorage.setItem("results", JSON.stringify(Result));
        // // console.log("chl rhaa")
        // history.replace("/user/quiz/result");
      }
    } else {
      alert("choose the option");
    }
  };

  // console.log(data1);
  useEffect(() => {
    skipQuesArr.map((val, ind, element) => setdata1([...data1, val]));
    console.log(data1);
  }, [skipQuesArr]);

  const skipQuesBtn = (e) => {
    if (currentQuestion < data1.length - 1 - skipQueslen) {
      setSkipQueslen(++skipQueslen);
      setSkipQuesArr([data1[currentQuestion]]);

      setCurrentQuestion(++currentQuestion);
      setResultScore((state) => {
        return state - 0.5;
      });

      console.log("if chal rha hai....");
    } else {
      e.target.style.display = "none";
      e.target.disabled = true;
    }

    if (data1[currentQuestion].multiCheck) {
      console.log(divhaiOptionKA.current.children);
      const checkBox = Array.from(divhaiOptionKA.current.children);
      checkBox.map((val) => {
        val.firstElementChild.checked = false;
        val.style.backgroundColor = "transparent";
      });
    } else {
      if (selectOption) {
        selectOption.checked = false;
        setIndState(null);
      }
    }
  };

  /////MULTPLY ANSWER FUNCTIONS/////
  const [indexNum, setIndexNum] = useState(null);
  const [asCheck, setAsCheck] = useState(false);
  const [multiAnswer, setMultiAnswer] = useState([]);
  const [checkBoxDisable, setCheckBoxDisable] = useState(false);
  const [checkAnswers, setCheckAnswers] = useState(false);
  const divhaiOptionKA = useRef();

  const checkAnswer = (e) => {
    if (e.checked) {
      console.log("check hai");
      setMultiAnswer([...multiAnswer, e.value]);
      e.parentNode.style.backgroundColor = "lightgrey ";
    } else {
      console.log("check nahii haiii");
      e.parentNode.style.backgroundColor = "transparent";
      multiAnswer.filter((val, ind) => {
        if (val === e.value) {
          multiAnswer.splice(ind, 1);
          setMultiAnswer([...multiAnswer]);
        }
      });
    }
  };

  const checkMyAns = () => {
    
    
    if (asCheck) {
    
      setCheckBoxDisable(true);
      setCheckAnswers(true);

      const input = document.getElementsByName("multiOptions");
      // const labelArr = Array.from(input)
      multiAnswer.sort();
      console.log(multiAnswer)
      let isMatch;

      
      data1[currentQuestion].Answer.sort().every((val, ind) => {
        isMatch = val === multiAnswer[ind];
      });


      //   console.log(data1[1].answer.sort())

      if (isMatch) {
        setResultScore((state)=> ++state);
        console.log("answer match" , resultScore);
      } else {
        console.log("no match");
        console.log("sorry 1" , resultScore);
      }

      for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < data1[currentQuestion].Answer.length; j++) {
          if (input[i].value === data1[currentQuestion].Answer[j]) {
            input[i].parentNode.style.backgroundColor = "#348F50";
            break;
          } else {
            input[i].parentNode.style.backgroundColor = "#ff726f";
          }
        }
      }
      setBtnValue("NEXT QUES");
      setBtnDisable(true);
      setMultiAnswer([])
    } else {
      alert("not check");
    }
  };
  const nextQues = () => {
    setCurrentQuestion(++currentQuestion);
    const checkBox = Array.from(divhaiOptionKA.current.children);
    checkBox.map((val) => {
      val.firstElementChild.checked = false;
      val.style.backgroundColor = "transparent";
    });

    if (currentQuestion < data1.length - 1 - skipQueslen) {
      setBtnDisable(false);
    } else {
      skipBtn.current.style.display = "none";
      setBtnDisable(false);
    }

    if (!(currentQuestion < data1.length - skipQueslen)) {
      if (!skipQuesModal) {
        setSkipQuesModal(true);
      }
    }
    setCheckBoxDisable(false);
    setBtnValue("Check");
  };

  return (
    <>
     
      {/* /////NEW QUIZ APP/// */}

      <section className="quizScreenMainBox">
        <section style={{ width: "250px" }} className="jawanLogo">
          <img src={JawanPakistanLogo} style={{ maxWidth: "200px" }} alt="" />
        </section>

        <section className="quizScreenUnderBox">
          <header>
            <div>
              <h3>
                <FaUserCircle className="userNameShowQuiz" /> {userFullName.slice(0,9)}
              </h3>
            </div>
            <div>
              <h3>{quizInformation.topicName}</h3>
            </div>
            <div>
              <h5>
                {timer.min < 10 ? "0" + timer.min : timer.min}:
                {timer.sec < 10 ? "0" + timer.sec : timer.sec}
              </h5>
            </div>
          </header>

          <div className="quizScreenMainBody">
            <section className="quizQuestion">
              <h6>
                Q{currentQuestion + 1 - skipQueslen}:{" "}
                {data1[currentQuestion].Question}{" "}
              </h6>

              {/* <img  src={CodePic2}  width="80%" /> */}
            </section>

            <section className="quizOption" ref={divhaiOptionKA}>
              {data1[currentQuestion].Options.map((Option, index) => {
                return data1[currentQuestion].multiCheck ? (
                  <label htmlFor={index} className="optionContainer">
                    <input
                      disabled={checkBoxDisable}
                      type="checkbox"
                      onClick={(e) => {
                        checkAnswer(e.target);
                        setIndexNum(index);
                        setAsCheck(true);
                      }}
                      value={Option}
                      name="multiOptions"
                      id={index}
                    />
                    {Option}
                    <br />
                  </label>
                ) : (
                  <>
                    <label
                      htmlFor={index}
                      onClick={(e) => setLabelTag(e.target)}
                      className="optionContainer"
                      style={{
                        backgroundColor:
                          index === indState
                            ? btnDisable
                              ? selectOption.value ===
                                data1[currentQuestion].Answer
                                ? "#348F50"
                                : "#ff726f"
                              : "lightgray"
                            : "transparent",
                        color:
                          index === indState
                            ? btnDisable
                              ? selectOption.value ===
                                data1[currentQuestion].Answer
                                ? "white"
                                : "white"
                              : "black"
                            : "black",
                      }}
                    >
                      <input
                        type="radio"
                        id={index}
                        disabled={disableInputRadio}
                        onClick={(e) => {
                          chooseOption(e.target);
                          setIndState(index);
                        }}
                        name="quizOptions"
                        value={Option}
                      />
                      {Option}
                    </label>
                  </>
                );
              })}
            </section>
          </div>

          <footer>
            <div className="quizSkipBtn">
              <button
                style={{ opacity: btnDisable ? "0.2" : "1" }}
                ref={skipBtn}
                onClick={(e) => skipQuesBtn(e)}
                disabled={btnDisable}
              >
                SKIP QUES
              </button>
            </div>

            <div className="quizSkipBtn">
              <h5>
                {currentQuestion + 1 - skipQueslen} /{" "}
                {data1.length - skipQueslen}
              </h5>
            </div>

            <div>
              {btnValue === "Check" ? (
                <button
                  onClick={() =>
                    data1[currentQuestion].multiCheck
                      ? checkMyAns()
                      : checkOption()
                  }
                >
                  Check
                </button>
              ) : currentQuestion + 1 !== data1.length ? (
                <button
                  onClick={() =>
                    data1[currentQuestion].multiCheck
                      ? nextQues()
                      : changeQuestion()
                  }
                >
                  Next Ques
                </button>
              ) : (
                <button onClick={() => finishResult()}>FINISH</button>
              )}
            </div>
          </footer>
        </section>
      </section>
      <SkipModalCmp handleModal={show} />
    </>
  );
};

export default QuizScreen;
