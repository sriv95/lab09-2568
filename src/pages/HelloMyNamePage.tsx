import { useState } from "react";

export default function HelloMyNamePage() {
  const [name,setName] = useState("")
  const [Result, setResult ] = useState("")
  const greetBtnOnclicked = () => {
    if (name=="") {
      setResult(`Please insert your name`)
    }
    else setResult(`Hello : ${name}`)
  }
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={(event) => setName(event.target.value)}
      />
      <button className="btn btn-primary" onClick={greetBtnOnclicked}>Greet Me</button>
      {/* Result Text */}
      <p>{Result}</p>
    </div>
  );
}
