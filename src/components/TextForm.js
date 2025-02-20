import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnchange = (event) => {
    // console.log("on change");
    setText(event.target.value)
  }

  const handleUpClick = () => {
    // console.log("uppercase was click");
    if(text !== "") {
      let newText = text.toUpperCase();
      setText(newText);

      props.showAlert("Text Converted to Uppercase","success");
    }
    else {
      props.showAlert("Please enter something to Convert Uppercase","danger");
    }
  }

  const handleLoClick = () => {
    // console.log("Lowercase was click");
    if(text !== "") {
      let newText = text.toLowerCase();
      setText(newText);

      props.showAlert("Text Converted to Lowercase","success");
    }
    else {
      props.showAlert("Please enter something to Convert Lowercase","danger");
    }
  }
  
  const clearAll = () => {
    // console.log("Lowercase was click");
    let newText = "";
    setText(newText);

    props.showAlert("Clear all text","success");
  }

  return (
    <>
      <div className={`container bg-${props.mode==="dark"?"black":"light"}`}>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearAll}>Clear All</button>
      </div>
      <div className="container my-4" style={{backgroundColor:`${props.mode ==="light"?"white":"black"}`, color:`${props.mode ==="dark"?"white":"black"}`}}>
        <h2>Your Text summary</h2>
        <p>{text.split(/\s+/).filter((element)=> {return element.length !== 0}).length} Words and {text.length} Characters.</p>
        {/* Regular expression : /\s+/  : white space including new line. */}
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
