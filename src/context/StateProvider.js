import React, { createContext, useContext, useReducer } from "react";  
//  THIS ARE THE PACKAGES WE NEED

export const StateContext = createContext();
// context we are creating

export const StateProvider = ({reducer, initialState, children }) => (
  <StateContext.Provider value ={useReducer(reducer, initialState)}>
  {children}
</StateContext.Provider>
);
// StateProvider is a function and that function is going to take reducer as parameter and children is our component

export const useStateValue = () => useContext(StateContext);