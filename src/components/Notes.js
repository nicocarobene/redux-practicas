import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportantOf } from "../reducers/noteReducer";

export default function NotesContainer () {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);
  const toggleImportant = (id) => {
    dispatch(toggleImportantOf(id));
  };
  return (
  <Notes notes= {notes} toggleImportant= {toggleImportant}/>
  )
}

function Notes ({ notes = [], toggleImportant }){
  return (
      <ul>
        {
        notes.map((note) =>(
          <Note 
          key= {note.id} 
          toggleImportant={toggleImportant} 
          note= {note} 
        />
        ))
      }
      </ul>
  );
}

function Note ({ note = {} , toggleImportant }) {
  return (
    <li key={note.id} onClick={() => toggleImportant(note.id)}>
      {note.content}
      <br></br>
      <strong>{note.important === true ? "important" : "not important"}</strong>
    </li>
  );
}




