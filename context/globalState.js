import React, { useContext, useReducer } from "react";

import Context from "./context";
import { reducer } from "./reducer";

const GlobalState = ({ children }) => {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalState;
