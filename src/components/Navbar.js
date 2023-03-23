import { useState } from "react";
import "./styles.css";
export default function Navbar(props) {
  const [mode, setMode] = useState("dark-subtle");
  const body = document.querySelector("body");
  const changeMode = () => {
    // #151515
    if (mode === "dark") {
      setMode("dark-subtle");
      body.style.backgroundColor = "white";
      props.send(mode);
    } else {
      setMode("dark");
      body.style.backgroundColor = "#151515";
      props.send(mode);
    }
  };
  return (
    <nav className={`navbar bg-${mode}`} data-bs-theme={mode}>
      <div className="container-fluid">
        <a className="navbar-brand fs-3 me-0 fw-bold" href="/">
          Text Util [&#60;/&#62;]
        </a>
        <span
          className={`material-symbols-outlined text-${
            mode === "dark-subtle" ? "dark" : "light"
          }`}
          style={{ fontSize: "40px" }}
          onClick={changeMode}
        >
          settings_brightness
        </span>
      </div>
    </nav>
  );
}
