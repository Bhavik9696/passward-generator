import { useCallback, useState, useEffect,useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");


  const passwordRef=useRef(null)

  const copypasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setpassword]);

  return (
    <div className="container">
      <h1>password Generator</h1>
      <div className="passgen">
        <input
          type="text"
          readOnly
          value={password}
          placeholder="password"
          ref={passwordRef}
        ></input>
        <button onClick={copypasswordtoClipboard}>copy</button>
      </div>
      <div className="dependence">
        <input
          type="range"
          min={6}
          max={99}
          value={length}
          onChange={(e) => {
            setlength(e.target.value);
          }}
        />

        <label>length:{length}</label>
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setnumberAllowed((prev) => !prev);
          }}
        />
        <label>number wanted?</label>
        <input
          type="checkbox"
          defaultChecked={charAllowed}
          onChange={() => {
            setcharAllowed((prev) => !prev);
          }}
        />
        <label>characters wanted?</label>
      </div>
    </div>
  );
}

export default App;
