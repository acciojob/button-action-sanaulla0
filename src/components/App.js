import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [data , setData] = useState(false);
  const show =()=>{
          setData(true); 
  }

  return (
    <div className="App" id="main">
      
      {data ? <p id="para" className="hide">"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p> : " " }
      
      <button id="main" onClick={show}>show data</button>
    </div>
  );
}

export default App
