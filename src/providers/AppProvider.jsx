import React, { useReducer, useEffect } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { characterState } from '../reducers/appReducer';
import { fetchCharacter } from '../services/apiCall';

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, characterState);

  useEffect(() => {
    fetchCharacter(state.page)
      .then(character => dispatch({ type: 'SET_CHARACTER', payload: character }));
  }, [state.page]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

