import React, { useState, useRef, useEffect } from "react";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import Select from "react-select";
import { createQuizz } from "../../Redux/action/Quizz/index";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import Cookies from "js-cookie";
import NewSideBar from "../../component/mainAdminComponents/newSideBar";
import Header from "../../component/Header";

const CreateQuizz = ({ history }) => {
  const dispatch = useDispatch();
  const { adminInfo, loadings } = useSelector(
    (state) => state.readAdminAuthReducer
  );
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token || !adminInfo) {
      history.push("/adminlogin");
    }
  }, []);
  //state for errors
  const [courseError, setCourseError] = useState("");
  const [topicError, setTopicError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [questionError, setQuestionError] = useState("");
  const [option1Error, setOPtion1Error] = useState("");
  const [option2Error, setOPtion2Error] = useState("");
  const [option3Error, setOPtion3Error] = useState("");
  const [option4Error, setOPtion4Error] = useState("");
  const [selectBoxError, setSelectBoxError] = useState("");
  // Add Quizz
  const selectRef = useRef();
  const [title, setTitle] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [topicName, setTopicName] = useState("");
  const [quizzTime, setQuizzTime] = useState("");
  const [disable, setDisable] = useState(false);
  const [btnDisable, seBtnDisable] = useState(true);
  const [questDisable, setQuestDisable] = useState(true);
  const [allDisable, setAllDisable] = useState(true);
  const [question, setQuestion] = useState("");
  const [option1, setOPtion1] = useState("");
  const [option2, setOPtion2] = useState("");
  const [option3, setOPtion3] = useState("");
  const [option4, setOPtion4] = useState("");
  // const[options,setOptions] = useState([])
  const [qtype, setQtype] = useState("single");
  const [saveQuestions, setSaveQusetions] = useState([]);
  const [selectedOptionsMultiple, setSelectedOptionsMultiple] = useState([]);
  const [selectedOptionsSingle, setSelectedOptionsSingle] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [allData, setAllData] = useState([]);
  const [image, setImage] = useState("");

  // dispatch(createQuizz(allData));
  // console.log(state)
  //Assign Quizz Quizz
  const options = [
    {
      label: option1 == "" ? null : option1,
      value: option1 == "" ? null : option1,
    },
    {
      label: option2 == "" ? null : option2,
      value: option2 == "" ? null : option2,
    },
    {
      label: option3 == "" ? null : option3,
      value: option3 == "" ? null : option3,
    },
    {
      label: option4 == "" ? null : option4,
      value: option4 == "" ? null : option4,
    },
  ];
  const handleChange = (options) => {
    if (qtype === "multiple") {
      var value = [];
      for (var i = 0; i < options.length; i++) {
        value.push(options[i].value);
      }
      setSelectedOptionsMultiple(value);
      if (value == []) {
        setSelectBoxError("please select the options");
      } else {
        setSelectBoxError("");
      }
    } else if (qtype === "single") {
      setSelectedOptionsSingle(options.value);
      if (options.value == "") {
        setSelectBoxError("please select the option");
      } else {
        setSelectBoxError("");
      }
    }
  };
  // handle Erorrs
  const handleQuestionError = (e) => {
    setQuestion(e.target.value);
    if (e.target.value == "") {
      setQuestionError("please enter the question");
    } else {
      setQuestionError("");
    }
  };
  const handleCourseError = (e) => {
    setCourseName(e.target.value);
    if (e.target.value === "") {
      setCourseError("please enter the course name");
    } else {
      setCourseError("");
    }
  };
  const handleTopicError = (e) => {
    setTopicName(e.target.value);
    if (e.target.value === "") {
      setTopicError("please enter the topic name");
    } else {
      setTopicError("");
    }
  };
  const handleQuizzTimeError = (e) => {
    setQuizzTime(e.target.value);
    if (e.target.value === "") {
      setTimeError("please enter the quizz time");
    } else {
      setTimeError("");
    }
  };
  const handleOption1 = (e) => {
    setOPtion1(e.target.value);
    if (e.target.value === "") {
      setOPtion1Error("please enter the option");
    } else {
      setOPtion1Error("");
    }
  };
  const handleOption2 = (e) => {
    setOPtion2(e.target.value);
    if (e.target.value === "") {
      setOPtion2Error("please enter the option");
    } else {
      setOPtion2Error("");
    }
  };
  const handleOption3 = (e) => {
    setOPtion3(e.target.value);
    if (e.target.value === "") {
      setOPtion3Error("please enter the option");
    } else {
      setOPtion3Error("");
    }
  };
  const handleOption4 = (e) => {
    setOPtion4(e.target.value);
    if (e.target.value === "") {
      setOPtion4Error("please enter the option");
    } else {
      setOPtion4Error("");
    }
  };
  const handleSubmit = () => {
    if (
      courseName !== "" &&
      topicName !== "" &&
      quizzTime !== "" &&
      question !== "" &&
      option1 !== "" &&
      option2 !== "" &&
      option3 !== "" &&
      option4 !== "" &&
      (selectedOptionsSingle !== "" || selectedOptionsMultiple.length > 0)
    ) {
      setAllDisable(false);
      if (qtype === "single") {
        setSaveQusetions([
          ...saveQuestions,
          {
            Question: question,
            Image: image[0],
            Options: [option1, option2, option3, option4],
            CorrectAns: selectedOptionsSingle,
            QuestionType: qtype,
          },
        ]);
        setQuestion("");
        setOPtion1("");
        setOPtion2("");
        setOPtion3("");
        setOPtion4("");
        setSelectedOptionsSingle("");
        setSelectedOptionsMultiple([]);
        // selectRef.current.select.clearValue()
      } else if (qtype === "multiple") {
        setSaveQusetions([
          ...saveQuestions,
          {
            Question: question,
            Options: [option1, option2, option3, option4],
            Image: image[0],
            CorrectAns: selectedOptionsMultiple,
            QuestionType: qtype,
          },
        ]);
        setQuestion("");
        setOPtion1("");
        setOPtion2("");
        setOPtion3("");
        setOPtion4("");
        setSelectedOptionsSingle(null);
        setSelectedOptionsMultiple(null);
        // selectRef.current.select.clearValue()
      }
    } else if (
      courseName == "" ||
      topicName == "" ||
      quizzTime == "" ||
      question == "" ||
      option1 == "" ||
      option2 == "" ||
      option3 == "" ||
      option4 == "" ||
      selectedOptionsSingle == "" ||
      selectedOptionsMultiple.length > 0
    ) {
      setQuestionError("please enter the question");
      setOPtion1Error("please enter the option");
      setOPtion2Error("please enter the option");
      setOPtion3Error("please enter the option");
      setOPtion4Error("please enter the option");
      setSelectBoxError("please select the options");
    }
  };
  const handleQuizzDetails = () => {
    if (courseName == "" || topicName == "" || quizzTime == "") {
      setCourseError("please enter coruse name");
      setTopicError("please enter the topic name");
      setTimeError("please enter the quizz time");
      setQuestDisable(true);
    } else {
      seBtnDisable(true);
      setDisable(true);
      setQuestDisable(false);
    }
  };
  const handleAllSubmit = () => {
    setAllData([
      ...allData,
      {
        CourseName: courseName,
        TopicName: topicName,
        View: title,
        QuizzTime: quizzTime,
        Questions: saveQuestions,
        numOfQuestion: saveQuestions.length,
      },
    ]);

    dispatch(
      createQuizz({
        CourseName: courseName,
        TopicName: topicName,
        View: title,
        QuizzTime: quizzTime,
        Questions: saveQuestions,
        numOfQuestion: saveQuestions.length,
      })
    );

    // if (qtype == "multiple") {
    //   setSelectedOptionsMultiple(selectRef.current.select.clearValue());
    // }
    setDisable(false);
    setQuestDisable(true);
    setAllDisable(true);
    setCourseName("");
    setTopicName("");
    setQuizzTime("");
    setQuestion("");
    setOPtion1("");
    setOPtion2("");
    setOPtion3("");
    setOPtion4("");

    // console.log('this is data', allData)
    // } else {
    //   setAllData([...allData,{
    //     CourseName: courseName,
    //     TopicName: topicName,
    //     View: title,
    //     QuizzTime: quizzTime,
    //     Questions: saveQuestions,
    //     numOfQuestion: saveQuestions.length,
    //   }]);
    //   dispatch(createQuizz(allData))
    //   console.log(allData)
    //   setCourseName("");
    //   setQuizzTime("");
    //   setTopicName("");
    //   setQuestion("");
    //   setOPtion1("");
    //   setOPtion2("");
    //   setOPtion3("");
    //   setOPtion4("");
    //   setSelectedOptionsSingle("");
    //   setSelectedOptionsMultiple([]);
    //   // selectRef.current.select.clearValue()
    //   alert("Data added successfully");
    //   // setTimeout(()=>{
    //     //   window.location.reload();
    //     // },2000)
    //   }
  };
  console.log("this is data", allData);
  // console.log(state);
  const handleClose = () => {
    setDisable(false);
    setQuestDisable(true);
    setAllDisable(true);
    setCourseName("");
    setTopicName("");
    setQuizzTime("");
    setQuestion("");
    setQuestion("");
    setOPtion1("");
    setOPtion2("");
    setOPtion3("");
    setOPtion4("");
    setSelectedOptionsSingle("");
    if (qtype == "multiple") {
      setSelectedOptionsMultiple(selectRef.current.select.clearValue());
    }
    setImage(null);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "#006838",
      backgroundColor: state.isSelected ? "transparent" : "transparent",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        {/* <div className="container-fluid ">
        <div className="quizBtn text-center mt-5">
          <button
            className="btn btn-success shadow btn-lg"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Create Quizz
          </button>
        </div>
      </div> */}
        <div>
          <NewSideBar />
        </div>
        <div className="mt-5 container-fluid" style={{ width: "90%" }}>
          <ul
            className="nav nav-pills mb-3 d-flex justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                style={{
                  background: "transparent",
                  // color: "#006838",
                  borderBottom: "1px solid #006838",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderRadius: 0,
                }}
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Quizz Details
              </button>
            </li>
            <li className="nav-item ml-3" role="presentation">
              <button
                disabled={questDisable}
                className="nav-link"
                style={{
                  background: "transparent",
                  // color: "#006838",
                  borderBottom: "1px solid #006838",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderRadius: 0,
                }}
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Quizz Questions Details
              </button>
            </li>
            <li className="nav-item ml-3" role="presentation">
              <button
                // disabled={questDisable}
                className="nav-link"
                style={{
                  background: "transparent",
                  // color: "#006838",
                  borderBottom: "1px solid #006838",
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderRadius: 0,
                }}
                id="pills-quizz-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-quizz"
                type="button"
                role="tab"
                aria-controls="pills-quizz"
                aria-selected="false"
              >
                Quizzes
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              style={{ background: "transparent" }}
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row">
                <div className="col-lg-6">
                  <label htmlFor="">Course Name</label>
                  <div className="form-group">
                    <input
                      disabled={disable}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Course Name"
                      value={courseName}
                      onChange={handleCourseError}
                    />
                    <span className="text-danger">{courseError}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Topic Name</label>
                  <div className="form-group">
                    <input
                      disabled={disable}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Topic Name"
                      value={topicName}
                      onChange={handleTopicError}
                    />
                    <span className="text-danger">{topicError}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Quizz Time</label>
                  <div className="form-group">
                    <input
                      disabled={disable}
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Quizz time"
                      value={quizzTime}
                      onChange={handleQuizzTimeError}
                    />
                    <span className="text-danger">{timeError}</span>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center justify-content-end">
                  <div className="form-group text-right pt-4">
                    <button
                      disabled={disable}
                      className="btn text-white shadow"
                      style={{ background: "#006838" }}
                      onClick={handleQuizzDetails}
                    >
                      Add Quizz Details
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              style={{ background: "transparent" }}
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {" "}
              <div className="row">
                <div className="col-lg-12">
                  <label htmlFor="">Enter Question</label>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={handleQuestionError}
                      value={question}
                    ></textarea>
                    <span className="text-danger">{questionError}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Question Type</label>
                  <div className="form-group">
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(e) => {
                        setQtype(e.target.value);
                      }}
                    >
                      <option value="single">Single</option>
                      <option value="multiple">Multiple</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Enter Option # 1</label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      onChange={handleOption1}
                      value={option1}
                    />
                    <span className="text-danger">{option1Error}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Enter Option # 2</label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="1"
                      onChange={handleOption2}
                      value={option2}
                    />
                    <span className="text-danger">{option2Error}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Enter Option # 3</label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      onChange={handleOption3}
                      value={option3}
                    />
                    <span className="text-danger">{option3Error}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Enter Option # 4</label>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      onChange={handleOption4}
                      value={option4}
                    />
                    <span className="text-danger">{option4Error}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label htmlFor="">Select Correct Option</label>
                  <div className="form-group">
                    <Select
                      options={options}
                      ref={qtype == "multiple" ? selectRef : null}
                      isDisabled={
                        option1 !== "" ||
                        option2 !== "" ||
                        option3 !== "" ||
                        option4 !== ""
                          ? false
                          : true
                      }
                      styles={customStyles}
                      isMulti={qtype === "single" ? false : true}
                      onChange={handleChange}
                      noOptionsMessage={() => {
                        "No Options here ";
                      }}
                      autoFocus
                      isSearchable
                      placeholder="Select Options"
                    />
                    <span className="text-danger">{selectBoxError}</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className=""
                      type="file"
                      id="formFileMultiple"
                      accept="image/*"
                      onChange={(e) => {
                        setImage(e.target.files);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group text-right">
                    <button
                      className="btn text-white shadow"
                      style={{ background: "#006838" }}
                      onClick={handleSubmit}
                    >
                      Add Question
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="btn text-white btn-lg"
                  style={{ background: "#006838" }}
                  disabled={allDisable}
                  onClick={handleAllSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              style={{ background: "transparent" }}
              id="pills-quizz"
              role="tabpanel"
              aria-labelledby="pills-quizz-tab"
            >
              <h1>hello World</h1>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="row">
            {/* {allData &&
            allData.map((val, ind) => {
              return allData.length > 0 ? (
                <div key={ind} className="col-lg-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">{val.TopicName}</h5>
                      <p className="card-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Veniam laborum obcaecati tenetur dolores quam quo
                        itaque illum mag  ni magnam distinctio.
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="buttons">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#exampleModal2"
                            className="btn btn-primary"
                          >
                            Assign Quizz
                          </a>
                          <a href="#" className="btn btn-danger ml-2">
                            Delete
                          </a>
                          {val.QuizzTime ? (
                            <a href="#" className="btn btn-secondary ml-2">
                              {val.QuizzTime}
                            </a>
                          ) : null}
                        </div>
                        <div className="switch">
                          <FormGroup>
                            <FormControlLabel
                              control={<Switch size="large" />}
                              label={title ? "On" : "Off"}
                              onClick={() => setTitle(!title)}
                            />
                          </FormGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null;
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuizz;
