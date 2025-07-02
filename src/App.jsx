import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [Passward,setpassward]=useState("")

  const passwardGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str+="0123456789"
    if(charAllowed) str+="!#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~";

    for(let i=1;i<length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass=str.charAt(char)
    }

  },[length,numberAllowed,charAllowed,setpassward])



  return (
    <div className="container">
      <h1>Passward Generator</h1>
      <div className="passgen">
        <input type='text' readOnly ></input>
        <button>copy</button>

      </div>

      
    </div>
  )
}

export default App
