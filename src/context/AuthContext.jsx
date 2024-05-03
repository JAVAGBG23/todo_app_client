import { useEffect, useReducer, createContext } from "react";

// global initial state
const initialState = {
  user: null,
};

// define the reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

// create context
const AuthContext = createContext();

// create provider
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
};

export { AuthContext, AuthProvider };
