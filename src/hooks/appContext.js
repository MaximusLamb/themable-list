import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useCharacter = () => {
  const { state } = useContext(AppContext);
  return state.characters;
};

export const usePage = () => {
  const { state } = useContext(AppContext);
  return state.page;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};
