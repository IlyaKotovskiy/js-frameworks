const defaultState = [
  { id: 1, name: 'Alex', age: 30 },
  { id: 2, name: 'Neena', age: 40 },
  { id: 3, name: 'Steven', age: 50 },
  { id: 4, name: 'John', age: 60 },
];

const DELETE_FIRST_USER = 'DELETE_FIRST_USER';
const DELETE_LAST_USER = 'DELETE_LAST_USER';
const DELETE_CURRENT_USER = 'DELETE_CURRENT_USER';

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DELETE_FIRST_USER:
      return state.slice(1);
    case DELETE_LAST_USER:
      return state.slice(0, state.length - 1);
    case DELETE_CURRENT_USER:
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
};

export const deleteFirstUserAction = () => ({ type: DELETE_FIRST_USER });
export const deleteLastUserAction = () => ({ type: DELETE_LAST_USER });
export const deleteCurrentUserAction = (payload) => ({ type: DELETE_CURRENT_USER, payload });