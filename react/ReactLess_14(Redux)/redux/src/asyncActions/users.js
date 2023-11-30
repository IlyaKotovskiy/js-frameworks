import { getUserListAction } from "../store/usersReducer"

export function fetchUserList() {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => dispatch(getUserListAction(data)))
  }
}