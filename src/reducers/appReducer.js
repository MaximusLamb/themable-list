export const characterState = {
  character: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTER':
      return { ...state, character: action.payload };
    default: 
      return state;
  }
}
