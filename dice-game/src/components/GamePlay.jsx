import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import Rules from './Rules'

function GamePlay() {
    const [score,setScore]=useState(0)
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice,setCurrentDice]=useState(1)
    const [error,setError]=useState("")
    const [showRule,setShowRule]=useState(false)
    function changeDice(){
        if(!selectedNumber ){
            setError("You have not selected any number")
            return
        }
        const randomNumber=Math.floor((Math.random() * 6) + 1)
        setCurrentDice((prev)=>randomNumber)

        
        if(selectedNumber===randomNumber){
            setScore(prev=>prev + randomNumber )
        }else{
            setScore(prev=>prev - 2 )
        }
        setSelectedNumber("")
    }
    function resetScore(){
        setScore(0)
    }
    function toggle(){
        setShowRule((prev)=>!prev)
    }
  return (
    <main className='main_container'>
        <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector selectNumber={selectedNumber} setSelectNumber={setSelectedNumber} error={error} setError={setError}/>
        </div>
      <RoleDice currentDice={currentDice} changeDice={changeDice} resetScore={resetScore}/>
      <div className="dice_btn">
        <button className="outline_btn" onClick={resetScore}>Reset Score</button>
        <button className="primary_btn" onClick={toggle}>Show Rules</button>
      </div>
      {showRule ? <Rules /> :null}
    </main>
  )
}

export default GamePlay
