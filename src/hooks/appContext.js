import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useCharacter = () => {
  const { state } = useContext(AppContext);
  return state.character;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};
