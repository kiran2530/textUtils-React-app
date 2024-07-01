// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";


function App() {
  const [modeText, setModeText] = useState("Dark");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    console.log("on click dark");
    if(mode === "light") {
      setMode("dark");
      setModeText("Light");
      document.body.style.backgroundColor = "black"

      showAlert("Dark Mode enable","success");
    }
    else {
      setMode("light");
      setModeText("Dark");
      document.body.style.backgroundColor = "white"

      showAlert("Light Mode enable","success");
    }
  }

  const showAlert = (msg, type) => {
    setAlert({
      massage : `${msg}`,
      type : `${type}`
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode = {mode} toggleMode = {toggleMode} modeText = {modeText} showAlert = {showAlert} />

      <div className={`bg-${mode==="dark"?"black":"light"} text-${mode==="light"?"black":"light"}`}>

      <Alert alert = {alert}/>

      <TextForm heading="Enter the text to analyze below" mode = {mode} modeText = {modeText} showAlert = {showAlert}/>


        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
