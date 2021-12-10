import React from "react";

import logo1 from "../../images/logo1.png";
import bmj from "../../images/bmj.png";
import wow from '../../images/wow_logo.png'
import Pdf from "react-to-pdf";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, useLocation, useHistory } from "react-router-dom";
// import { emptyMessage } from "../Redux/action/stdRegistration";
import "./pdf.css";
import QRCode from "qrcode.react";
const ref = React.createRef();

const AdminPdf = (props) => {
  const location = useLocation();
  const history = useHistory();
  console.log(location.state.datas,'datasssszz');
  //   const { stdRegData, message } = useSelector(
  //     (state) => state.stdregistrationReducer
  //   );
  //   const dispatch = useDispatch();
  //   const [chgToReg, setchgToReg] = useState(true);
  // const history = useHistory();

  // console.log(stdRegData);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!location.state) {
      history.push("/regstddata");
    }
  }, []);

  const createPdf = (e) => {
    e();

    // setTimeout(() => {
    //   props.history.replace("/thanks");
    // }, 5000);
  };
  return (
    <div
      className="d-flex justify-content-center"
      style={{ width: 810, height: "100%", minHeight: "100vh", margin: "auto" }}
    >
      <div
        className="pdf-res-msg"
        style={{
          width: "200%",
          height: "200%",

          position: "fixed",
          backgroundColor: "#fff",
          zIndex: 9,
          display: "flex",
          justifyContent: "center",

          // marginLeft: "auto",
        }}
      >
        <div>
          <div className="p-1 text-center ">
            <img src={logo1} style={{ width: 300 }} />
            <h1 className="" style={{ color: "grey" }}>
              Jawan Pakistan Official Program
            </h1>
            {/* <p>Registration Form</p> */}
            <p style={{ margin: 0 }}>Print/Download Admit Card</p>
            <p style={{ margin: 0 }}>
              Your form has been successfully submited
            </p>
            <p style={{ color: "darkgreen" }}>
              Plz download and print your Admit Card
            </p>
          </div>
          <Pdf targetRef={ref} filename="admit_card.pdf">
            {({ toPdf }) => (
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-success btn-lg"
                  onClick={() => createPdf(toPdf)}
                >
                  Download pdf
                </button>
              </div>
            )}
          </Pdf>
        </div>
      </div>

      {/* <Pdf targetRef={ref} filename="admit_card.pdf">
        {({ toPdf }) => (
          <div className="my-1 d-flex justify-content-center">
            <button
              className="btn btn-success btn-lg"
              onClick={() => createPdf(toPdf)}
            >
              Generate pdf
            </button>
          </div>
        )}
      </Pdf> */}
      <div className="" ref={ref} style={{ width: 810, margin: "auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <img src="landscape_logo.png" style={{ width: 200 }} alt="logo1" />
          <div style={{ margin: "0 35px" }}></div>
          {/* <img src={wow} style={{ width: 200 }} alt="logo3" /> */}
          {
location.state.datas? location.state.datas.instituteName == "SAIMS ( WOW )"?
<img src={wow} style={{ width: 200 }} alt="logo3" />:
location.state.datas.instituteName == "BMJ Digital Education"?<img src={bmj} style={{ width: 100 }} alt="logo3" />:<img src={bmj} style={{ width: 100 }} alt="logo3" />
:""
          }
        </div>

        <div
          style={{
            border: "1px solid black",
            width: 700,
            margin: "10px auto",
          }}
        >
          <div
            style={{
              backgroundColor: "#006838",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
              REGISTRATION FORM
            </h4>
          </div>

          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5
                style={{
                  color: "#006838",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Name
              </h5>

              <p
                style={{
                  color: "black",
                  fontSize: 14,
                  textTransform: "uppercase",
                }}
              >
                {location.state ? location.state.state.fullName : ""}
              </p>
            </div>
            <div style={{ borderLeft: "1px solid black" }}></div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5
                style={{
                  color: "#006838",
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                Date of Birth
              </h5>
              {/* <div> : </div> */}
              <p style={{ color: "black", fontSize: 14 }}>
                {location.state
                  ? location.state.state.dob
                    ? location.state.state.dob.slice(8) +
                      "-" +
                      location.state.state.dob.slice(5, 8) +
                      location.state.state.dob.slice(0, 4)
                    : ""
                  : ""}
              </p>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid black" }}></div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5
                style={{
                  color: "#006838",
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                Father's Name
              </h5>
              {/* <div>:</div> */}
              <p
                style={{
                  color: "black",
                  fontSize: 14,
                  textTransform: "uppercase",
                }}
              >
                {" "}
                {location.state ? location.state.state.fatherName : ""}
              </p>
            </div>
            <div style={{ borderLeft: "1px solid black" }}></div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5
                style={{
                  color: "#006838",
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                Parent/Guardian Number
              </h5>
              {/* <div>:</div> */}
              <p style={{ color: "black", fontSize: 14 }}>
                {location.state ? location.state.state.guardianNumber : ""}
              </p>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid black" }}></div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5 style={{ color: "#006838", fontSize: 14, fontWeight: "600" }}>
                Gender
              </h5>
              {/* <div>:</div> */}
              <p style={{ color: "black", fontSize: 14 }}>
                {" "}
                {location.state ? location.state.state.gender : ""}
              </p>
            </div>
            <div style={{ borderLeft: "1px solid black" }}></div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5 style={{ color: "#006838", fontSize: 14, fontWeight: "600" }}>
                CNIC
              </h5>
              {/* <div>:</div> */}
              <p style={{ color: "black", fontSize: 14 }}>
                {location.state ? location.state.state.cnic : ""}
              </p>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid black" }}></div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5 style={{ color: "#006838", fontSize: 14, fontWeight: "600" }}>
                Email Address
              </h5>
              {/* <div>:</div> */}
              <p style={{ color: "black", fontSize: 14 }}>
                {location.state ? location.state.state.email : ""}
              </p>
            </div>
            <div style={{ borderLeft: "1px solid black" }}></div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5 style={{ color: "#006838", fontSize: 14, fontWeight: "600" }}>
                Address
              </h5>
              <div>
                <p
                  style={{
                    color: "black",
                    fontSize: 14,
                    width: "100%",
                    margin: 0,
                    marginLeft: 20,
                  }}
                >
                  {location.state
                    ? location.state.state.address
                      ? location.state.state.address.slice(0, 30)
                      : ""
                    : ""}
                </p>
                <p
                  style={{
                    color: "black",
                    fontSize: 14,
                    width: "100%",
                    margin: 0,
                    marginLeft: 20,
                  }}
                >
                  {location.state
                    ? location.state.state.address
                      ? location.state.state.address.slice(30)
                      : ""
                    : ""}
                </p>
              </div>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid black" }}></div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5 style={{ color: "#006838", fontSize: 14, fontWeight: "600" }}>
                Course Name
              </h5>
              {/* <div>:</div> */}
              <p style={{ color: "black", fontSize: 14 }}>
                {location.state ? location.state.state.course : ""}
              </p>
            </div>
            <div style={{ borderLeft: "1px solid black" }}></div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5 style={{ color: "#006838", fontSize: 14, fontWeight: "600" }}>
                Batch
              </h5>
              {/* <div>:</div> */}
              <p style={{ color: "black", fontSize: 14 }}>
                {location.state ? location.state.state.batch : ""}
              </p>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid black" }}></div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5 style={{ color: "#006838", fontSize: 14, fontWeight: "600" }}>
                Class Time
              </h5>
              {/* <div>:</div> */}
              <p style={{ color: "black", fontSize: 14 }}>
                {location.state ? location.state.state.time : ""}
              </p>
            </div>
            <div style={{ borderLeft: "1px solid black" }}></div>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
                marginTop: 10,
              }}
            >
              <h5 style={{ color: "#006838", fontSize: 14, fontWeight: "600" }}>
                Last Qualification
              </h5>
              {/* <div>:</div> */}
              <p style={{ color: "black", fontSize: 14 }}>
                {location.state ? location.state.state.qualification : ""}
              </p>
            </div>
          </div>
          <div style={{ borderBottom: "1px solid black" }}></div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                marginLeft: 30,
                marginTop: 10,
              }}
            >
              <h5 style={{ color: "#006838", fontSize: 15, fontWeight: "600" }}>
                INSTRUCTIONS
              </h5>

              <p
                style={{
                  color: "black",
                  fontSize: 12,
                  width: "95%",
                  margin: 0,
                }}
              >
                1. Colour print your downloaded pdf file and bring it to
                institute.
              </p>

              <p
                style={{
                  color: "black",
                  fontSize: 12,
                  width: "95%",
                  margin: 0,
                }}
              >
                2. Come along with fees i.e. Rs. {location.state.datas? location.state.datas.price:""}/- and CNIC copy for seat
                alotment.
              </p>
            </div>

            <div
              style={{
                width: "50%",
                marginLeft: 30,
                marginTop: 10,
              }}
            >
              <p
                style={{
                  color: "black",
                  fontSize: 12,
                  margin: 5,
                  marginTop: 23,
                  width: "95%",
                }}
              >
                3. {location.state.datas? location.state.datas.admissionLastDate:""} is the last day to confirm your admission.
              </p>

              <p
                style={{
                  color: "black",
                  fontSize: 12,
                  width: "95%",
                  margin: 5,
                }}
              >
                4. As we have very limited seats available so we will give
                admissions on first come first serve basis.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px dashed black",
            // marginTop: 20,
            // width: 700,

            width: 700,
            margin: "10px auto",
          }}
        ></div>
        {/* <div
          style={{
            borderLeft: "1px dashed black",
            height: 540,
            position: "absolute",
            left: 950,
          }}
        ></div> */}
        <div
          style={{
            display: "flex",

            justifyContent: "space-evenly",
            width: 700,
            margin: "10px auto",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              width: 280,
              height: 400,
              // width: "40%",
              backgroundColor: "#006838",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                flexDirection: "column",
                borderBottomLeftRadius: 150,
                borderBottomRightRadius: 150,
              }}
            >
              <img src={logo1} alt="logo" style={{ width: 100 }} />
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  width: 100,
                  height: 100,
                  border: "3px solid #006838",
                  position: "relative",
                  top: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: -20,
                }}
              >
                <img
                  src={
                    location.state ? location.state.state.multiple_image[0] : ""
                  }
                  alt="profile"
                  style={{
                    width: 100,
                    borderRadius: "100%",
                  }}
                />
              </div>
            </div>
            {/* <div
              style={{
                borderRadius: "50%",
                backgroundColor: "white",
                width: 100,
                border: "1px solid blue",
              }}
            >
              <img src={logo1} alt="profile" style={{ width: "100%" }} />
            </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 43,
                alignContent: "center",
              }}
            >
              <h4
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: 18,
                }}
              >
                {location.state ? location.state.state.fullName : ""}
              </h4>
            </div>
            <div
              style={{
                // width: "85%",
                width: 250,
                height: 125,
                margin: "auto",
                borderRadius: 5,
                backgroundColor: "white",
                padding: "0 10px",
              }}
            >
              <div
                style={{
                  // border: "1px solid black",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: -6,
                  marginTop: 5,
                }}
              >
                <p
                  style={{
                    color: "#006838",
                    fontWeight: "bold",
                    fontSize: 10,
                    marginTop: 10,
                  }}
                >
                  Roll No
                </p>
                <p style={{ color: "black", fontSize: 12, marginTop: 10 }}>
                  {location.state ? location.state.state.generatedId : ""}
                </p>
              </div>
              {/* <div style={{ borderBottom: "1px solid black" }}></div>
              <div
                style={{
                  // border: "1px solid black",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: -6,
                }}
              >
                <p style={{ color: "black", fontSize: 13 }}>Course Name</p>
                <p style={{ color: "black", fontSize: 12 }}>
                  {location.state.state ? location.state.state.course : ""}
                </p>
              </div>
              <div style={{ borderBottom: "1px solid black" }}></div>
              <div
                style={{
                  // border: "1px solid black",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: -6,
                }}
              >
                <p style={{ color: "black", fontSize: 13 }}>Batch</p>
                <p style={{ color: "black", fontSize: 12 }}>
                  {location.state.state ? location.state.state.batch : ""}
                </p>
              </div> */}
              {/* <div style={{ borderBottom: "1px solid black" }}></div> */}
              <div
                style={{
                  // border: "1px solid black",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: -10,
                }}
              >
                <p
                  style={{ color: "#006838", fontWeight: "bold", fontSize: 10 }}
                >
                  Class time
                </p>
                <p style={{ color: "black", fontSize: 10 }}>
                  {location.state ? location.state.state.time : ""}
                </p>
              </div>
              {/* <div style={{ borderBottom: "1px solid black" ,marginTop:30}}></div> */}
              <div
                style={{
                  // border: "1px solid black",

                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    color: "black",
                    fontSize: 13,
                    marginLeft: 100,
                    marginTop: 30,
                    borderTop: "1px solid black",
                  }}
                >
                  Authorized Signature
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              borderLeft: "1px dashed black",
            }}
          ></div>
          <div
            style={{
              border: "1px solid black",
              // width: "40%",
              width: 280,
              height: 400,
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#006838",
                flexDirection: "column",
                borderBottomLeftRadius: 150,
                borderBottomRightRadius: 150,
              }}
            >
              {/* <img src={qr} alt="logo" style={{ width: 100, paddingTop: 20 }} /> */}
              <QRCode
                // className="rounded shadow"
                value={
                  location.state ? `${location.state.state.generatedId}` : ""
                }
                // value="1282676"
                bgColor="#f5f8ff"
                fgColor="#000"
                includeMargin={true}
                style={{ marginTop: 20, width: "100px", height: "100px" }}
              />
              <div
                style={{
                  // borderRadius: "50%",
                  // backgroundColor: "white",

                  margin: 31,
                  // border: "3px solid #006838",
                }}
              ></div>
            </div>
            {/* <div
              style={{
                borderRadius: "50%",
                backgroundColor: "white",
                width: 100,
                border: "1px solid blue",
              }}
            >
              <img src={logo1} alt="profile" style={{ width: "100%" }} />
            </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px auto",
              }}
            >
              {/* <h5 style={{ color: "black", fontWeight: "600", fontSize: 19 }}> */}
              {/* <img
                src={wow}
                style={{ width: 200, marginTop: 0 }}
                alt="logo3"
              /> */}
                  {
location.state.datas? location.state.datas.instituteName == "SAIMS ( WOW )"?
<img src={wow} style={{ width: 200 }} alt="logo3" />:
location.state.datas.instituteName == "BMJ Digital Education"?<img src={bmj} style={{ width: 100 }} alt="logo3" />:<img src={bmj} style={{ width: 100 }} alt="logo3" />
:""
          }
              {/* </h5> */}
            </div>
            <div
              style={{
                // width: "85%",
                width: 250,

                height: 125,

                margin: "auto",
                borderRadius: 5,
                backgroundColor: "white",
                padding: "0 10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: -10,
                }}
              >
                <p
                  style={{ color: "#006838", fontWeight: "bold", fontSize: 10 }}
                >
                  Course Name
                </p>

                <p style={{ color: "black", fontSize: 10 }}>
                  {location.state ? location.state.state.course : ""}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <p
                  style={{ color: "#006838", fontWeight: "bold", fontSize: 10 }}
                >
                  Batch
                </p>

                <p style={{ color: "black", fontSize: 10 }}>
                  {location.state ? location.state.state.batch : ""}
                </p>
              </div>
              <div
                style={{
                  marginTop: -10,

                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{ color: "#006838", fontWeight: "bold", fontSize: 10 }}
                >
                  Email
                </p>

                <p style={{ color: "black", fontSize: 10 }}>
                  {location.state ? location.state.state.email : ""}
                </p>
              </div>

              {/* <div
                style={{
                  // border: "1px solid black",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: -10,
                }}
              >
                <p style={{ color: "#006838",fontWeight:'bold', fontSize: 12 }}>Father Name</p>
                <div>:</div>
                <p style={{ color: "black", fontSize: 12 }}>
                  {location.state.state ? location.state.state.fatherName : ""}
                </p>
              </div> */}

              <div
                style={{
                  // border: "1px solid black",
                  marginTop: -10,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{ color: "#006838", fontWeight: "bold", fontSize: 10 }}
                >
                  CNIC
                </p>
                {/* <div>:</div> */}
                <p style={{ color: "black", fontSize: 10 }}>
                  {location.state ? location.state.state.cnic : ""}
                </p>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#006838",
                fontSize: 9.5,
                color: "white",
                fontWeight: "bold",
                lineHeight: 1.2,
                textAlign: "center",
                marginTop: -25,
              }}
            >
              This card is only valid if it is attested by institute. <br />
              Card Valid till : {location.state.datas? location.state.datas.cardExpiry:""}
            </div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px dashed black",
            // marginBottom: 20,
            // width: 850,
            width: 700,
            margin: "10px auto",
          }}
        ></div>
        <div
          style={{
            border: "1px solid black",
            // width: "60%",
            width: 700,
            margin: "10px auto",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              backgroundColor: "#006838",
              // width: "100%",
              // width: 850,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              paddingTop: 3,
            }}
          >
            <h4
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              RECEIPT SLIP
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              // width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",

                width: "50%",
              }}
            >
              <p style={{ paddingTop: 5, fontWeight: "600", color: "black" }}>
                Name
              </p>
              <div
                style={{
                  borderBottom: "2px solid black",
                  color: "black",
                  width: "70%",
                  textAlign: "center",
                }}
              >
                {location.state ? location.state.state.fullName : ""}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "50%",
              }}
            >
              <p style={{ paddingTop: 5, fontWeight: "600", color: "black" }}>
                Course Name
              </p>
              <div
                style={{
                  borderBottom: "2px solid black",
                  color: "black",
                  width: "70%",
                  textAlign: "center",
                }}
              >
                {location.state ? location.state.state.course : ""}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: -10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",

                width: "50%",
              }}
            >
              <p style={{ paddingTop: 5, fontWeight: "600", color: "black" }}>
                Roll No.
              </p>
              <div
                style={{
                  borderBottom: "2px solid black",
                  color: "black",
                  width: " 70%",
                  textAlign: "center",
                }}
              >
                {location.state ? location.state.state.generatedId : ""}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "50%",
              }}
            >
              <p style={{ paddingTop: 5, fontWeight: "600", color: "black" }}>
                Date
              </p>
              <div
                style={{
                  borderBottom: "2px solid black",
                  color: "black",
                  width: "70%",
                  textAlign: "center",
                  marginTop: 20,
                }}
              ></div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: -10,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "50%",
              }}
            >
              <p style={{ paddingTop: 5, fontWeight: "600", color: "black" }}>
                Amount
              </p>
              <div
                style={{
                  borderBottom: "2px solid black",
                  color: "black",
                  width: " 70%",
                  textAlign: "center",
                }}
              >
                Rs. {location.state.datas? location.state.datas.price:""}/-
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "50%",
              }}
            >
              <p style={{ paddingTop: 0, fontWeight: "600", color: "black" }}>
                Authorized Signature
              </p>
              <div
                style={{
                  borderBottom: "2px solid black",
                  color: "black",
                  width: "40%",
                  textAlign: "center",
                  marginTop: 20,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminPdf);
