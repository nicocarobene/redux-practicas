import { creatNew, getAll } from "../services/Notes";

export default function noteReducer(state = [], action) {
  console.log("ACTION", action);
  if (action.type === "@note/init") {
    return action.payload;
  }

  if (action.type === "@note/created") {
    return [...state, action.payload];
  }

  if (action.type === "@note/toggle_important") {
    const { id } = action.payload;
    return state.map( note => {
      if (note.id === id) {
        return {
          ...note,
          important: !note.important,
        };
      }
      return note;
    });
  }

  return state;
}

export const createNote = content=> {
  return async dispatch => {
    const newNote = await creatNew(content)
    dispatch({
      type: "@note/created",
      payload: newNote,
    });
  }
};

export const toggleImportantOf = (id) => {
  return {
    type: "@note/toggle_important",
    payload: { id }
  };
};

export const initNotes = () => {
  return async (dispatch) => {
    const notes = await getAll();
    dispatch({
      type: "@note/init",
      payload: notes,
    });
  };
};

//esta funcion de initNote que devuelve un dispatch asyncrona funciona gracias a thunk, osea una funcion que al llamarla recurepa las notas de un servidor y realiza un dispatch note/init