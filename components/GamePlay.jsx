/* import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice";
import TotalScore from "./TotalScore"
import styled from "styled-components";


const GamePlay = () => {
  const [score,setScore]=
  return (
   
<MainContainer>
<div className="top_section">
<TotalScore/>
<NumberSelector/>

</div>


<RollDice/>
</MainContainer>

  )
}

export default GamePlay;

const MainContainer =styled.main`
.top_section { 
display: flex;
justify-content: space-around;
align-items: end;
padding-top: 70px;


}`;

*/

import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;


const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    background:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeaoVO4d0D7iX9GQVw0iaYiSccwpmo8e0Kw&s );
    align-items: end;
  }
  .btns {
    margin-top: 4px;
    background:url(data:image/jpeg;base64,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);
    gap: 10px;
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .body { 
    background:url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Daesthetic&psig=AOvVaw1bdQehFAHqZ9B9PoxmImRq&ust=1721661569557000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJibzbK3uIcDFQAAAAAdAAAAABAE);
  }
`;