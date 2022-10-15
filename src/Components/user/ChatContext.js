import React, { createContext, useContext, useReducer } from "react";
import { AuthContext } from "./userContext";

export const ChatContext = createContext();
const INITIAL_STATE={
    chatId:'null',
    user:{}
}
export const ChatContextProvider = ({ children }) => {
  const currentUser=useContext(AuthContext);
  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };
        case "RESET":
            return INITIAL_STATE;
      default:
        return state;
    }
  };
  const [state,dispatch] = useReducer(chatReducer,INITIAL_STATE);
  return <ChatContext.Provider value={{data:state,dispatch}}>{children}</ChatContext.Provider>;
};
