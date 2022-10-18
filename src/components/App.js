import React, {Component, useState} from "react";
import "./../styles/App.css";

var txt="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
function App() {
  const [str,setStr]=useState("");

   function show(){
     setStr(txt);
   }
  return (
    <div id="main">
     <p id="para">{str}</p>
      <button type="button" id="click" onClick={show}></button>
    </div>
  );
}


export default App;
