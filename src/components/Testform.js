
import React, { useState } from 'react';
export default function Testform(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Lowercase", "success");
    }
    const handleClearClick = () => {
        // console.log("lowercase was clicked " + text);
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#001e3c' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary my-2' disabled={text.length === 0} onClick={handleUpClick}>Convert to upppercase</button>
                <button className='btn btn-primary mx-2 my-2' disabled={text.length === 0} onClick={handleLoClick}>Convert to lowercase</button>
                <button className='btn btn-primary mx-2 my-2' disabled={text.length === 0} onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.length} characters and {text.split(" ").filter((element) => { return element.length !== 0 }).length} words</p>
                {/* <p>{text.length} characters and {text.split(" ").length - 1} words</p> */}
                {/* <p>{text.length} characters and {text.length === 0 ? 0 : text.split(" ").length} words</p> */}
                {/* <p>Minutes required to read : {0.008 * text.split(" ").length}</p> */}
                <p>Minutes required to read : {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</p>
                {/* <p>Minutes required to read : {text.length === 0 ? 0 : 0.008 * text.split(" ").length}</p> */}
                <h3>Preview of Text</h3>
                <p>{text.length > 0 ? text : "Write something to Preview it here"}</p>
            </div>
        </>
    )
}
