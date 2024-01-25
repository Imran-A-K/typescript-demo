"use client"
import React, { useReducer } from 'react'
import Button from './Button';
type State = {
  count: number;
}
//using uni operator to combine types
type Action =
| {
  type:"INCREMENT",
  increaseBy : number,
} | {
  type: "DECREMENT",
  decreaseBy: number,
}
function reducer(state : State, action : Action){
  switch(action.type){
    case "INCREMENT":
      return {...state, count: state.count + action.increaseBy}
    case "DECREMENT":
      return { ...state, count: state.count - action.decreaseBy}
    default:
      throw new Error("Error")
  }
}

function Reducer() {
const [ state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div>
      <p>Typescript useReducer</p>
      <Button outline onClick={() => dispatch({ type: "DECREMENT", decreaseBy: 1})}>-</Button>
      {state.count}
      <Button outline onClick={() => dispatch({ type: "INCREMENT", increaseBy:1})}>+</Button>
    </div>
  )
}

export default Reducer