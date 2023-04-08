import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

export default function NewNote() {
  const dispatch= useDispatch()
  const addNote = (e) => {
    e.preventDefault();
    const { target } = e;
    const content = target.note.value;
    target.note.value = "";
    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button>Add</button>
    </form>
  );
}
 