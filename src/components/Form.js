import React, { useState } from "react";
import "./styles.css";
import Analyze from "./Analyze.js";
import Alert from "./Alert.js";

export default function Form(props) {
  //styles
  // #1db954
  const textArea = {
    backgroundColor: props.mode === "dark" ? "#1db954" : "white",
    boxShadow:
      props.mode === "dark"
        ? "1px 1px 20px #1db954, -1px -1px 20px #1db954"
        : "1px 1px 20px #757575, -1px -1px 20px #757575",
    fontSize: "30px",
    fontFamily: "'Roboto Condensed', sans-serif",
    fontWeight: "700",
    letterSpacing: "3px",
    caretColor: "black",
  };
  const ul = {
    width: "10%",
  };
  const resetBtn = {
    float: "right",
    boxShadow: "-2px -2px 0px red,2px 2px 0px #00ffea",
  };
  const dropdown = {
    width: "91%",
  };
  ///////////////
  const [text, setText] = useState("");
  const [inputF, setInputF] = useState("");
  const [inputR, setInputR] = useState("");
  const [alert, setAlert] = useState(null);
  /////////////////////
  const onChangeTA = (e) => {
    setText(e.target.value);
  };
  /////////////////////
  const copy = () => {
    const text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    setAlert("text copied to clipboard!");
    setTimeout(() => setAlert(null), 1500);
  };
  /////////////////////
  const toUpper = () => {
    const textVar = text.toUpperCase();
    setText(textVar);
  };
  const toLower = () => {
    const textVar = text.toLowerCase();
    setText(textVar);
  };
  const capitalize = () => {
    if (text === "") return;
    let textArr = Array.from(text.toLowerCase().split(" "));
    let totText = "";
    for (let i = 0; i < textArr.length; i++) {
      switch (i) {
        case textArr.length - 1:
          totText += textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1);
          break;
        default:
          totText +=
            textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1) + " ";
          break;
      }
    }
    totText[totText.length - 1].replace(" ", "");
    setText(totText);
    totText = "";
  };
  //remove spaces
  const removeAllSpaces = () => {
    const textVar = text.split(" ").join("");
    setText(textVar);
  };
  const removeExtraSpaces = () => {
    const textVar = text.split(/[ ]+/).join(" ");
    setText(textVar);
  };
  /////////////////////
  const reset = () => {
    const textVar = "";
    setText(textVar);
  };
  //find and replace
  const onChangeF = (e) => {
    setInputF(e.target.value);
  };
  const onChangeR = (e) => {
    setInputR(e.target.value);
  };
  const onClickReplace = () => {
    if (inputF && inputR !== "") setText(text.split(inputF).join(inputR));
    setInputF("");
    setInputR("");
  };
  //////////////////
  let msg = "";
  const hover = (i) => {
    switch (i) {
      case 1:
        msg = "clear the text area and text preview";
        break;
      case 2:
        msg = "converts whole text into upper case";
        break;
      case 3:
        msg = "converts whole text into lower case";
        break;
      case 4:
        msg = "capitalize the 1st letter of each word";
        break;
      case 5:
        msg = "remove all the spaces or remove extra spaces";
        break;
      case 6:
        msg = "find a text and replace it with any other text";
        break;
      case 7:
        msg = "copy the text to clipboard";
        break;
      default:
        msg = "";
        break;
    }
    return msg;
  };
  // setAlert(props.mode==="dark"?"Dark mode enabled !":"Dark mode disabled !");
  return (
    <>
      <Alert msg={alert} />
      <div className="form container-sm align-items-center h-100 mb-3">
        <span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={copy}
            title={hover(7)}
          >
            Copy Text
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "light"
            } mb-3`}
            onClick={reset}
            style={resetBtn}
            data-toggle="tooltip"
            title={hover(1)}
          >
            Reset
          </button>
        </span>
        <textarea
          className={`d-block w-100 rounded-3 px-3 text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          id="textArea"
          // ref={mainRef}
          rows="5"
          style={textArea}
          placeholder="text here..."
          value={text}
          onChange={onChangeTA}
        ></textarea>
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-primary  mt-2 ms-2"
            onClick={toUpper}
            data-toggle="tooltip"
            title={hover(2)}
          >
            To Upper
          </button>
          <button
            type="button"
            className="btn btn-primary  mt-2 ms-2"
            onClick={toLower}
            data-toggle="tooltip"
            title={hover(3)}
          >
            To Lower
          </button>
          <button
            type="button"
            className="btn btn-primary  mt-2 ms-2"
            onClick={capitalize}
            data-toggle="tooltip"
            title={hover(4)}
          >
            Cpitalize
          </button>
          <button
            className="btn btn-primary dropdown-toggle mt-2 ms-2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-toggle="tooltip"
            title={hover(5)}
          >
            Remove Spaces
          </button>
          <ul
            className={`spaces dropdown-menu dropdown-menu-${props.mode} p-2`}
          >
            <li>
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={removeAllSpaces}
              >
                Remove All Spaces
              </button>
            </li>
            <li>
              <button
                type="button"
                className="btn btn-primary mt-2 w-100"
                onClick={removeExtraSpaces}
              >
                Remove Extra Spaces
              </button>
            </li>
          </ul>
          <button
            className="btn btn-warning dropdown-toggle mt-2 ms-2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-toggle="tooltip"
            title={hover(6)}
          >
            Find & Replace
          </button>
          <ul
            className={`dropdown-menu dropdown-menu-${props.mode} p-2`}
            style={ul}
          >
            <li>
              <input
                className="dropdown-item mb-2 border rounded-1 w-100"
                placeholder="find..."
                value={inputF}
                onChange={onChangeF}
                style={dropdown}
              />
            </li>
            <li>
              <input
                className="dropdown-item mb-2 border rounded-1 w-100"
                placeholder="replace..."
                value={inputR}
                onChange={onChangeR}
                style={dropdown}
              />
            </li>
            <li>
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={onClickReplace}
              >
                Replace
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
      <Analyze text={text} mode={props.mode} />
    </>
  );
}
