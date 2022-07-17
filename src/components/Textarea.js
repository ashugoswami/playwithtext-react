import React, { useState } from "react";
export default function Textarea() {
  const [mystyle, setMystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const darkmode = () => {
    if (mystyle.color === "black") {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
    } else {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  const handelupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handelsmclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const clearclick = () => {
    let newtext = "";
    setText(newtext);
  };

  const handelonchange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={mystyle}>
        <div className="container mx-2 my-2" style={mystyle}>
          <h1>Welcome to Textutiles website For Changing your Text</h1>
        </div>
        <div className="mb-4 my-2">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter your Text
          </label>
          <textarea
            className="form-control"
            style={mystyle}
            value={text}
            onChange={handelonchange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <div className="btn my-2">
          <button
            type="button"
            class="btn btn-primary mx-2"
            onClick={handelupclick}
          >
            convert Capital
          </button>
          <button
            type="button"
            class="btn btn-primary mx-2"
            onClick={handelsmclick}
          >
            convert Small
          </button>
          <button
            type="button"
            class="btn btn-primary mx-2"
            onClick={clearclick}
          >
            Clear Text
          </button>
          <button type="button" class="btn btn-primary mx-2" onClick={darkmode}>
            dark mode
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h1>YOUR TEXT SUMMARY</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
