
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
import './App.css'



function App() {
  const [ IsGameStarted, setIsGameStarted] = useState(false);
 
const toggleGamePlay =()=> { 
  setIsGameStarted((prev)=>!prev)
};
  return (
    <>
    {
      IsGameStarted ? <GamePlay/>  : <StartGame
        toggle={toggleGamePlay}
        
      />

    }
    
         </>
  )
}

export default App
