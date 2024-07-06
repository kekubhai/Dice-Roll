/*  import styled from "styled-components"

const TotalScore = () => {
  return (
    <ScoreContainer>
<div>
      <h1>0</h1>
      <p>total score</p>
    </div>
    </ScoreContainer>
    
  )
}

export default TotalScore
 const ScoreContainer =styled.div`
 max-width: 200px;
 text-align: center;
 
 h1{ 
    font-size: 100px;
    line-height: 100px;

 }
 p { 
    font-size: 24px;
 }`


 ;

 */
 import styled from "styled-components";

 const TotalScore = ({ score }) => {
   return (
     <ScoreContainer>
       <h1>{score}</h1>
       <p>Total Score</p>
     </ScoreContainer>
   );
 };
 
 export default TotalScore;
 
 const ScoreContainer = styled.div`
   max-width: 200px;
   text-align: center;
   padding-left:9px;
   h1 {
     font-size: 100px;
     line-height: 100px;
     color: black;
   }
   p {
     font-size: 24px;
     font-weight: 500px;
     color: black;
     font-size: larger;
   }
 `;