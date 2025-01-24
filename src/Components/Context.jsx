import React, { useReducer } from "react";

const Context = () => {
  const counFun = (state, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };

      case "dec":
        return { count: state.count - 1 };

      case "res":
        return { count: 0 };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(counFun, { count: 1 });

  return <div>
    

    <h1>count :{state.count}</h1>
    <button onClick={()=>(dispatch({type:"inc"}))}  >+</button>
    <button onClick={()=>(dispatch({type:"dec"}))}  >-</button>
  </div>;
};

export default Context;
