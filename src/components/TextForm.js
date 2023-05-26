import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');

  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} word and {text.length} characters</p>
            <p>{.008 * text.split(" ").length} minute time to read</p>

            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter text above to preview here"}</p>
        </div>
    </>
  )
}
