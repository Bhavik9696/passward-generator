import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Passward, setpassward] = useState("");

  const passwardGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }

    setpassward(pass);
  }, [length, numberAllowed, charAllowed, setpassward]);

  return (
    <div className="container">
      <h1>Passward Generator</h1>
      <div className="passgen">
        <input type="text"
        readOnly 
        value={Passward}
        placeholder="passward"
        ></input>
        <button>copy</button>
      </div>
      <div className="dependence">


        <input type="range" min={6} max={99} value={length} onChange={(e)=>{setlength(e.target.value)}}/>


        <label>length:{length}</label>
        <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>{
          setnumberAllowed((prev)=>!prev);
        }}/>
        <label>number wanted?</label>
        <input type="checkbox" defaultChecked={charAllowed} onChange={()=>{
          setnumberAllowed((prev)=>!prev);
        }}/>
        <label>characters wanted?</label>
      </div>
    </div>
  );
}

export default App;
