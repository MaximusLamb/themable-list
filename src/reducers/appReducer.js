export const characterState = {
  characters: [],
  page: 1,
  text: '',
  backgroundColor: '#FFFFFF',
  textColor: '#000000'
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'SET_CHARACTER':
      return { ...state, characters: action.payload };
    case 'NEXT_PAGE':
      return { ...state, page: state.page + 1 };
    case 'LAST_PAGE':
      return { ...state, page: state.page - 1 };
    case 'TEXT_COLOR':
      return { ...state, textColor: action.payload };
    case 'BACKGROUND_COLOR':
      return { ...state, backgroundColor: action.payload };
    default: 
      return state;
  }
}
