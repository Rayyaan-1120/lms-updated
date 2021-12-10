import React, { useEffect } from "react";
import logo1 from "../images/logo1.png";
import { emptyMessage } from "../Redux/action/stdRegistration";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const FormSubmitedMsg = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(emptyMessage());
  }, []);

  return (
    <div
      className="bg-white my-5 rounded shadow form-main-sub"
      style={{ margin: "20px auto", width: "70%", padding: 30 }}
    >
      <div className="d-flex justify-content-center p-3" >
        <img src={logo1} width="200px" />
      </div>
      <div>
        <div className="text-left p-0">
          {/* <h3 className="p-3 msgFormsub">
          Form has been submitted Successfully,
Please check your email inbox to get pdf
Stay connected to Jawan Pakistan Page 
            <a
              target="_blank"
              href="https://www.facebook.com/jawanPakistan786/"
            >
              <span> : </span>
              Jawan Pakistan 
            </a>
            <span> </span> <br />for further information 
Note: If you are unable to get pdf on email so you are kind requested to call in mentioned number
0300-JAWANPK
0300-5292675
           
          </h3> */}
          <h3>
          Form has been submitted Successfully.
          <br />
{/* Please check your email inbox to get pdf. */}
We have also send PDF to your email, check your inbox or spam folder for PDF.
<br />
Stay connected to <a
              target="_blank"
              href="https://www.facebook.com/jawanPakistan786/"
            >
              <span> : </span>
              Jawan Pakistan 
            </a> Page for further information.
<br />
Note: If did not get PDF so you can go to BMJ Institute from 5pm to 10pm to get PDF and pay fees .
{/* Note: If you are unable to get pdf on email so you are kind requested to call in mentioned number.
<br />
0300-JAWANPK<br />

0300-5292675 */}
          </h3>
          <div className="color p-3 li-text" style={{ fontSize: "1.5em" }}>
            <Link to="/">Go Back To Admission Form Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSubmitedMsg;
