import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const convertToLCase = ()=>{
        setText(text.toLowerCase());
    }

    const convertToUPCase = ()=>{
        // console.log("UPCase button clicked");
        setText(text.toUpperCase());
    }

    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value);
    }


    const[text, setText] = useState("Enter text here....");

  return (
    <>
        <div className={`conatiner text-${props.mode==='dark'?'light':'dark'}`}>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control"  value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={convertToUPCase}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={convertToLCase}>Convert To Lowercase</button>
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>Preview Text</h2>
                <p>{text}</p>
            </div>
        </div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
