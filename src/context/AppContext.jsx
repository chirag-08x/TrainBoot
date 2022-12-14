import { useContext, createContext, useReducer } from "react";
import { appReducer } from "../reducers/appreducer";

const AppContext = createContext();

const defaultState = {
  isModalOpen: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);

  const openModal = () => {
    dispatch({ type: "openModal" });
  };

  const closeModal = () => {
    dispatch({ type: "closeModal" });
  };

  return (
    <AppContext.Provider value={{ state, openModal, closeModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
