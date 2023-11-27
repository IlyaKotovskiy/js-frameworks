const defaultState = 'default string';

const UPPER = 'UPPER';
const LOWER = 'LOWER';
const INIT_CAP = 'INIT_CAP';
const MODAL = 'MODAL';

export const stringReducer = (state = defaultState, action) => {
  switch(action.type){
    case UPPER:
      return state.toUpperCase();
    case LOWER:
      return state.toLowerCase();
    case INIT_CAP:
      const to_array = state.split(' ');
      const result = to_array.map(letter => letter[0].toUpperCase() + letter.slice(1).toLowerCase());
      return result.join(' ');
    case MODAL:
      return action.payload;
    default:
      return state;
  }
};

export const upperAction = () => ({ type: UPPER });
export const lowerAction = () => ({ type: LOWER });
export const initCapAction = () => ({ type: INIT_CAP });
export const modalAction = (payload) => ({ type: MODAL, payload });