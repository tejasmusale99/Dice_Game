import React from 'react'


function StartGame(props) {

  return (
    <div className='container main'>
      <div className='start-game_img'>
        <img src="/images/dices 1.png" alt="startgame_dice" />
      </div>
      <div className='start-game_heading'>
        <h1>DICE GAME</h1>
        <button className='start-game_btn' onClick={props.toggle}>Play Now</button>
      </div>
    </div>
  )
}

export default StartGame
