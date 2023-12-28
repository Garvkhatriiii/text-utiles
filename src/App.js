import "./App.css";
import Alert from "./componens/Alert";
import About from "./componens/About";
import Navbar from "./componens/Navbar";
import TextForm from "./componens/TextForm";
import { useState } from "react";
import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#080226";
      showAlert("dark mode has been enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled ", "success");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}/>
             </Routes>

          <Routes>
            <Route path="/" element={
              <TextForm showAlert={showAlert} heading="Enter Your Text"mode={mode}/>}/>
          
           </Routes> 
          </div>
       </BrowserRouter> 
    </>
  );
}

export default App;
