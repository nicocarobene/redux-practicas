import React, { useEffect } from "react";
import  NewNote  from "./components/NewNote";
import Notes from "./components/Notes";
import { initNotes } from "./reducers/noteReducer"
import { useDispatch } from "react-redux";

export default function App() {
 const dispatch= useDispatch()
  useEffect(()=>{
      dispatch(initNotes())
  },[dispatch])

const filterSelected= value=>{
    console.log(value)
}

  return (
    <div>
      <NewNote/>
      <div>
        all 
        <input type='radio' name='filter' onChange={()=> {filterSelected('ALL')}}/>
        
        important
        <input type='radio' name='filter' onChange={()=> {filterSelected('IMPORTANT')}}/>
        
        not important
        <input type='radio' name='filter' onChange={()=> {filterSelected('NOT IMPORTANT')}}/>
      </div>
      <Notes/>
    </div>
  );
}
