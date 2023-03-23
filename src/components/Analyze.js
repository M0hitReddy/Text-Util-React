import React, { useState } from "react";
import "./styles.css";
export default function Analyze(props) {
  let textVar = props.text;
  let words = textVar.length === 0 ? "0" : textVar.split(" ").length;
  const [inputText, setInputText] = useState("");
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onClick = (e) => {
    let input = inputText;
    e.preventDefault();
    console.log(input);
    let para = document.getElementById("preview");
    input = input.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let pattern = new RegExp(`${input}`, "gi");
    para.innerHTML = para.textContent.replace(
      pattern,
      (match) => `<mark>${match}</mark>`
    );
  };
  return (
    <>
      <div className="analyze container text-light p-2 ">
        <div className="summary text-primary mb-4 pt-2">
          <span className="fs-5">
            Words : {words} & Characters : {textVar.length}
          </span>
          <span className="read-time float-start fs-5">
            Read Time : {(0.008 * words).toFixed(2)} mins
          </span>
        </div>
        <div className="container border border-3 border-secondary rounded-4">
          <form className="d-flex my-3 " role="search">
            <input
              className={`form-control ms-2 bg-${props.mode} text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              type="search"
              placeholder="Search in text..."
              onChange={onChange}
              id="input"
              aria-label="Search"
            />
            <button
              type="submit"
              className="btn btn-primary"
              id="search"
              onClick={onClick}
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
          <hr className={`text-${props.mode === "dark" ? "light" : "dark"}`} />
          <h5 className="text-secondary mt-3 ">Text preview </h5>
          <p
            className={`preview text-${
              props.mode === "dark" ? "light" : "dark"
            } mb-5`}
            id="preview"
          >
            {props.text}
          </p>
        </div>
      </div>
    </>
  );
}
