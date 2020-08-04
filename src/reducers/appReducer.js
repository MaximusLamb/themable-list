export const characterState = {
  characters: [],
  page: 1
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTER':
      return { ...state, characters: action.payload };
    case 'NEXT_PAGE':
      return { ...state, page: state.page + 1 };
    case 'LAST_PAGE':
      return { ...state, page: state.page - 1 };
    default: 
      return state;
  }
}
