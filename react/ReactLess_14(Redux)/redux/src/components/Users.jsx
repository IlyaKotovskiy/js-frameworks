import { useDispatch, useSelector } from "react-redux";
import { deleteCurrentUserAction, deleteFirstUserAction, deleteLastUserAction } from "../store/usersReducer";

export function Users() {
  const users = useSelector(store => store.users);
  const dispacth = useDispatch();

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user =>
          <li key={user.id} onDoubleClick={() => dispacth(deleteCurrentUserAction(user.id))}>
            <p>{user.name} {user.age}</p>
          </li>
        )}
      </ul>
      <div>
        <button onClick={() => dispacth(deleteFirstUserAction())}>Del first user</button>
        <button onClick={() => dispacth(deleteLastUserAction())}>Del last user</button>
      </div>
    </div>
  );
}