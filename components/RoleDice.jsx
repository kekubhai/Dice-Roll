/* import {  useState } from "react";
import styled from "styled-components";

const RollDice = () => {
    
    
    
    
    const generaterandomNumber=(min,max)=>{ 
        return Math.floor(Math.random()*(max-min)*min);
    };
     const rollDice =()=> { 
        const randomNumber =generaterandomNumber(1,7);

        setcurrentNumber((prev)=> randomNumber )
     }




    {
  return (
    <DiceContainer>

    <div className="dice" onClick={()=> generaterandomNumber(1,7)}>
   <img src={`/public/imagesin/Dice_${currentDice}.jpg`} alt="dice 1"/>
    </div>
    <p>Click on the Dice to roll</p>

    </DiceContainer>
  );
};

export default RollDice;


const DiceContainer =styled.div`
display: grid;
justify-items: center;
height: 449px;
width: 250px;
padding-top: 2vh;
margin-top: 2ch;
img{ 
    width: 200px;
    height: 200px;
}
p{ 
    font-size: 24px;
    text-decoration: dotted;
    text-shadow: none;
}
`;
}
*/

import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/public/imagesin/Dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  border: 2px solid black;
  background:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbivmjyc305v123uQ25rIuTGOeubkSi8WiA&s);
  flex-direction: column;
  align-items: center;
  color: white;
  font-weight: bold;

  .dice {
    cursor: pointer;
  background-color: red;
  filter: grayscale(100%);
  background-color: #2638a0;
  }

  p {
    font-size: 24px;
    font-size:7;
  }
`;