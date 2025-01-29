import React, { useState } from "react";

const Cal = () => {
  const [input, setInput] = useState("");


  const display=(val)=>{
    setInput(input+val)
  }

  const Cal=()=>{
    const a=eval(input)
    setInput(a)
  }

  const clear=()=>{
    setInput("")
  }
  return (
    <>
      <form action="">
        <input type="text" value={input} />

        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={()=> display("+") }>+</span>
        <span onClick={()=> display("-") }>-</span>
        <span onClick={()=> display("*") }>*</span>
        <span onClick={()=> display("/") }>/</span>
        <span onClick={()=> clear()}>C</span>
        <span onClick={()=> Cal()}>=</span>
      </form>
    </>
  );
};

export default Cal;
