import Navbar from "./components/Navbar.js";
import Form from "./components/Form.js";
import Footer from "./components/Footer.js";
import "./components/styles.css";
import { useState } from "react";
function App() {
  const [mode,setMode]=useState("dark-subtle");
  return (
    <>
      <Navbar send={(mode)=>setMode(mode==="dark"?"dark-subtle":"dark")}/>
      <Form mode={mode}/>
      <Footer mode={mode}/>
    </>
  );
}
export default App;
