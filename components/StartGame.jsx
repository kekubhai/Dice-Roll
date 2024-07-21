  /* import styled from "styled-components";

const StartGame=({toggle})=> {
  return (
<Container>
<div>
<img src="/dice.png"/>
</div>

<div className="content">
  <h1>Dice Game</h1>
   <Button
   onClick={toggle}>Play Now</Button>
</div>
</Container>
  );
};

export default StartGame;


 const Container=styled.div`
 max-width:1180px;
 height: 100vh;
 display: flex;
 margin: 0 auto;
 align-items: center;

 .content {
    h1 {
      font-size: 66px;
      white-space: nowrap;
    }
  }

 `
 ;
const Button =styled.button`
color:wheat;
padding: 10px 18px ;
background-color:black;
border-radius: 5px;

&:hover { 
  background-color: white;
  border-radius: 50px;
  transition: 0.9s ;
  ;
  color: black;
}
`;
*/

import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/dice.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1000px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  background: url(https://c4.wallpaperflare.com/wallpaper/181/559/747/aesthetic-neon-wallpaper-preview.jpg);

  .content {
  
    h1 {
      white-space: nowrap;
      color: #d6da1b;
      font-size: 106px;
    
    }
  }
`;