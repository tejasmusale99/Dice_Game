import React from "react";


function RoleDice(props) {
  return (
    <div className="dice_container">
      <div className="dice" onClick={props.changeDice}>
        <img src={`/Images/Dice/dice_${props.currentDice}.png `} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
      
    </div>
  );
}

export default RoleDice;
