// import React from "react";
// import { createRoot}  from 'react-dom/client';
// import { createStore } from 'redux'



// const actionIncremented ={
//     type:'@counter/incremented'
// }

// const actionDecremented = {
//     type: '@counter/decremented'
// }
// const actionReseted = {
//   type: '@counter/reseted'
// }

// const counterReducer = (state = 0, action) => {
//    switch (action.type){
//      case '@counter/incremented':
//        return state + 1;
//      case '@counter/decremented':
//        return state -1;
//      case '@counter/reseted':
//         return state= 0;
//      default:
//         return state
//   }
// };

// const store = createStore(
//   counterReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// store.subscribe(()=>{
//     console.log(store.getState())
// })
// // suscribe es para subcribirse o hacer un seguimiento de la store realizando un console.log en cada cambio que se le realice

// const App= ()=>{
//     return (
//       <div>
//         <div>{store.getState()}</div>
//         <button onClick={() => store.dispatch(actionIncremented)}>+</button>
//         <button onClick={() => store.dispatch(actionDecremented)}>-</button>
//         <button onClick={() => store.dispatch(actionReseted)}>Reset</button>
//       </div>
//     );
// }





// const rootElement = document.getElementById("root");

// const root= createRoot(rootElement)

// const renderApp= ()=>{
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
//  );
// }
// renderApp()
// store.subscribe(renderApp)