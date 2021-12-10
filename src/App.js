import React from "react";
import "./App.css";
import MyRoute from "./config/route";
import { Provider } from "react-redux";
import store from "./Redux/store";

// document.onkeydown = function (e) {
//   if (e.keyCode == 123) {
//     return false;
//   }

//   if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//     return false;
//   }
// };

// document.addEventListener(
//   "keydown",
//   function (event) {
//     if (event.keyCode == 123) {
//       // alert(
//       //   "This function has been disabled to prevent you from stealing my code!"
//       // );
//       return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//       // alert(
//       //   "This function has been disabled to prevent you from stealing my code!"
//       // );
//       return false;
//     } else if (event.ctrlKey && event.keyCode == 85) {
//       // alert(
//       //   "This function has been disabled to prevent you from stealing my code!"
//       // );
//       return false;
//     }
//   },
//   false
// );

// if (document.addEventListener) {
//   document.addEventListener(
//     "contextmenu",
//     function (e) {
//       // alert(
//       //   "This function has been disabled to prevent you from stealing my code!"
//       // );
//       e.preventDefault();
//     },
//     false
//   );
// } else {
//   document.attachEvent("oncontextmenu", function () {
//     // alert(
//     //   "This function has been disabled to prevent you from stealing my code!"
//     // );
//     window.event.returnValue = false;
//   });
// }

function App() {
  return (
    <Provider store={store}>
      <MyRoute />
    </Provider>
  );
}

export default App;
