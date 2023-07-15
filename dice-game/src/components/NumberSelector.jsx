import React from "react";

function NumberSelector(props) {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  function numberSelectorHandler(value){
    props.setSelectNumber(value)
    props.setError("")
  }

  return (

    
    <div className="NumberSelector_container">
      <p className="error">{props.error}</p>
        <div className="flex">
      {arrayNumber.map((value, i) => (
        <div
          className="Box"
          key={i}
          onClick={() =>{numberSelectorHandler(value)} }
          style={{ backgroundColor: value === props.selectNumber ? "black" : "white",color:value === props.selectNumber ? "white" : "black" }}
        >
          {value }
         
        </div>
      ))}
      </div>
      <p>Select Number</p>
    </div>
  );
}

export default NumberSelector;
