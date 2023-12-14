import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  }
  const handleblank = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = ' ';
    setText(newText);
    props.showAlert("Cleared","success")
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);

  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Cleared","success")
  } 
  const  [text, setText] = useState('enter text here');
  return (
   <>
   <div className="conatainer" style={{color: props.mode==='dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
    
        <textarea className="form-control"  value={text} onChange ={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowerase</button>
        <button className="btn btn-primary mx-1" onClick={handleblank}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Clear Extra space</button>
    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length}words and {text.length} characters</p>
      <p>{0.008  * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text above to preview here"}</p>


    </div>
   </>
   
      )
}
