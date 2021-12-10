import React, { useEffect, useState } from "react";
import StdAssignment from "../screens/stdScreens/StdAssignment";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import { readAdminAuth } from "../Redux/action/adminAuth";
import Cookies from "js-cookie";
import Home from "../screens/Home";
import About from "../screens/About";
import Registration from "../screens/Registration";
import EntryTest from "../screens/EntryTest";

////ADMIN LINK
import StdLogin from "../screens/stdScreens/StdLogin";
import AdmitCard from "../component/Pdf";
import FormSubmitedMsg from "../component/FormSubmitedMsg";
import AdminLogin from "../screens/AdminLogin";
import CreateStd from "../screens/CreateStd";

import AttemptQuiz from "../screens/stdScreens/attemptQuiz";
import QuizScreen from "../screens/stdScreens/QuizScreen";
import Result from "../screens/stdScreens/result";

// STD FILES
import StdHome from "../screens/stdScreens/home";
import StdProfile from "../screens/stdScreens/StdProfile";
import RegStdData from "../screens/Main Admin/RegStdData";
import AdminPdf from "../component/regStdData/AdminPdf";

// INSTITUTE TEACHER
import InstTeacherDashboard from "../screens/instTeacher/index";
// import TeacherAdminDashboard from "../screens/Teacher Admin/TeacherAdminDashboard";
// import AssignQuiz from "../screens/Teacher Admin/AssignQuiz";

import NotFound from "../screens/NotFound";

// import MainAdminRoute from "./MainAdminRoute";
import MainAdmin from "../screens/Main Admin/MainAdminDashboard";
import AddCourse from "../screens/Main Admin/addCourse";
import AddAttendance from "../component/mainAdmin/addAttendance";
import EditCourse from "../component/mainAdmin/editCourse";
import CreateQuiz from "../screens/Main Admin/CreateQuiz";
// import AssignQuiz from "../screens/Institute Admin/AssignQuiz";
import { useSelector, useDispatch } from "react-redux";
// import InstituteAdminDashboard from "../screens/Institute Admin/InstituteAdminDashboard";
import jwt from "jsonwebtoken";
import CreateAdmin from "../screens/Main Admin/CreateAdmin";

import NewSideBar from "../component/mainAdminComponents/newSideBar";
import NewDashBoard from "../component/mainAdminComponents/newDashboard";
import StdAttendance from "../component/mainAdminComponents/StdAttendance";
import StudentDashboard from "../screens/StudentPanel/StudentDashboard";
import AddAssignment from "../component/mainAdmin/addassignment";
import Allassignments from '../component/mainAdmin/allassignments' 

import { Editattendance } from '../component/mainAdmin/editattendance'

// // ************* Public Route ************

function PublicRoute({ component: Component, auth, ...rest }) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        return !localStorage.getItem("stdDataToken") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={location.state?.from ? location.state.from : "/stdHome"}
          />
        );
      }}
    />
  );
}

// function TeacherRoute({ component: Component, auth, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return localStorage.getItem("adminType") == "teacher" ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/adminlogin",
//               state: {
//                 from: props.location.pathname,
//               },
//             }}
//           />
//         );
//       }}
//     />
//   );
// }

// function TeacherAdminRoute({ component: Component, auth, ...rest }) {
//   const history = useHistory();
//   const token = Cookies.get("token");
//   const id = Cookies.get("id");

//   const dispatch = useDispatch();
//   useEffect(async () => {
//     // console.log("id", id, token);
//     await dispatch(readAdminAuth(id, token));
//   }, []);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         token && id ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/adminlogin",
//               state: {
//                 from: props.location.pathname,
//               },
//             }}
//           />
//         )
//       }
//     />
//   );
// }

function StudentRoute({ component: Component, ...rest }) {
  // const token = Cookies.get("Stdtoken");
  // const [token , setToken] = useState(Cookies.get("Stdtoken"))
  // useEffect( async () => {

  //   await setToken(Cookies.get("Stdtoken"))

  //   }
  //  , [token])

  // console.log("stdToken 10000" , Stdtoken)
  return (
    <Route
      {...rest}
      render={(props) => {
        return Cookies.get("Stdtoken") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/stdlogin",
              state: {
                from: props.location.pathname,
              },
            }}
          />
        );
      }}
    />
  );
}

function MainAdminRoute({ component: Component, auth, ...rest }) {
  // const token = Cookies.get("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        return Cookies.get("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/adminlogin",
              state: {
                from: props.location.pathname,
              },
            }}
          />
        );
      }}
    />
  );
}

function InstAdminRoute({ component: Component, auth, ...rest }) {
  const history = useHistory();
  const dispatch = useDispatch();
  // useEffect(async () => {
  //   // console.log("id", id, token);
  //   await dispatch(readAdminAuth(id, token));
  // }, []);
  // const token = Cookies.get("token");
  // const id = Cookies.get("id");

  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/adminlogin",
              state: {
                from: props.location.pathname,
              },
            }}
          />
        )
      }
    />
  );
}
// function InstAdminRoute({ component: Component, auth, ...rest }) {
//   const state = useSelector((state) => state.readAdminAuthReducer);
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return state.adminInfo.user.role == "instituteAdmin" ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/adminlogin",
//               state: {
//                 from: props.location.pathname,
//               },
//             }}
//           />
//         );
//       }}
//     />
//   );
// }

// function MainAdminRoute({ component: Component, auth, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return Cookies.get("token") && Cookies.get("id") ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/adminlogin",
//               state: {
//                 from: props.location.pathname,
//               },
//             }}
//           />
//         );
//       }}
//     />
//   );
// }

function MyRoute() {
  return (
    <Router>
      {/* <PublicRoute exact path="*" component={NotFound}/> */}
      {/* <MainAdminRoute exact path="/mainadmindashboard" component={MainAdmin} /> */}

      {/* <Route exact path="/mainadmindashboard" component={MainAdmin} /> */}
      {/* <Route exact path="/instadmindashboard" component={MainAdmin} /> */}

      {/* <InstAdminRoute exact path="/mainadmindashboard" component={RegStdData} />
      <InstAdminRoute exact path="/quizassign" component={RegStdData} /> */}
      {/* <MainAdminRoute exact path="/createquiz" component={RegStdData} /> */}
      <PublicRoute exact path="/home" component={Home} />
      {/* <StudentRoute exact path="/stdHome" component={StdHome} />
      <StudentRoute exact path="/attemptQuiz" component={AttemptQuiz} />
      <StudentRoute exact path="/quizscreen" component={QuizScreen} />
      <StudentRoute exact path="/result" component={Result} /> */}
      <PublicRoute exact path="/" component={Registration} />
      {/* <PublicRoute exact path="/login" component={Login} /> */}
      <PublicRoute exact path="/entrytest" component={EntryTest} />
      <PublicRoute path="/pdf" component={AdmitCard} />
      <PublicRoute path="/thanks" component={FormSubmitedMsg} />
      {/* <Route path="/mainadmindashboard" component={MainAdmin} /> */}
      {/* <Route path="/mainadmindashboard" component={MainAdmin} /> */}
      {/* <InstAdminRoute
        path="/instituteadmindashboard"
        component={InstituteAdminDashboard}
        />
      <InstAdminRoute path="/quizassign" component={AssignQuiz} /> */}

      {/* <Route path="/mainadmindashboard" component={NewDashBoard} /> */}

      <Route path="/adminlogin" component={AdminLogin} />
      <Route path="/mainadmindashboard" component={MainAdmin} />
      <Route path="/createquiz" component={CreateQuiz} />
      <MainAdminRoute path="/regstddata" component={RegStdData} />
      <Route path="/createstd" component={CreateStd} />
      <MainAdminRoute path="/addcourse" component={AddCourse} />
      <MainAdminRoute path="/addattendance" component={AddAttendance} />
      <MainAdminRoute path="/editcourse" component={EditCourse} />
      <MainAdminRoute path="/createAdmin" component={CreateAdmin} />
      <MainAdminRoute path="/addassignment" component={AddAssignment} />
      <MainAdminRoute path="/adminassignments" component={Allassignments} />
      <MainAdminRoute  path="/editattendance" component={Editattendance} />

      {/* <InstAdminRoute path="/mainadmindashboard" component={MainAdmin} /> */}
      {/* <Route component={MainAdmin} path="/mainadmindashboard" /> */}
      {/* <InstAdminRoute path="/quizassign" component={AssignQuiz} /> */}

      {/* <TeacherAdminRoute
        path="/teacheradmindashboard"
        component={TeacherAdminDashboard}
      /> */}
      {/* <InstAdminRoute path="/quizassign" component={AssignQuiz} /> */}
      {/* <TeacherRoute
        path="/instteacherdashboard"
        component={InstTeacherDashboard}
      /> */}
      <MainAdminRoute path="/adminPdf" component={AdminPdf} />
      <Route exact path="/newSideBar" component={NewSideBar} />
      <Route exact path="/newDashBoard" component={NewDashBoard} />
      <Route exact path="/stdlogin" component={StdLogin} />
      <Route exact path="/stddashboard" component={StudentDashboard} />
      <Route exact path="/stdprofile" component={StdProfile} />
      {/* <StudentRoute exact path="/stdprofile" component={StdProfile} /> */}
      <StudentRoute exact path="/stdassignment" component={StdAssignment} />
      <StudentRoute exact path="/stdquiz" component={AttemptQuiz} />
      <StudentRoute exact path="/stdattendance" component={StdAttendance} />
      <StudentRoute exact path="/quizscreen" component={QuizScreen} />
      <StudentRoute exact path="/result" component={Result} />
      {/* <Route exact path="/result" component={Result} /> */}

    </Router>
  );
}

export default MyRoute;
