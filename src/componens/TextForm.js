import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase " , "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase " , "success")
  };

  const handleToClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared " , "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#080226'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#0f0832':'white',color: props.mode === 'dark'?'white':'#080226'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToClear}>Clear Text </button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#080226'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes To Read</p>
      <h2>Preview</h2>
      <p>
        {text.length>0?text:"Nothing To Preview "}
      </p>
    </div>
          </>
  );
}
