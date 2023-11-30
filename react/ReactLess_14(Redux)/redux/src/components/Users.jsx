import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delUserByIdAction, deleteFirstUserAction, deleteLastUserAction } from "../store/usersReducer";
import { fetchUserList } from "../asyncActions/users";

export function Users() {
  const users = useSelector(store => store.users);
  const dispacth = useDispatch();

  // Получение данных при загрузке страницы
  // useEffect(() => {
  //   dispacth(fetchUserList())
  // }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user =>
          <li key={user.id} onDoubleClick={() => dispacth(delUserByIdAction(user.id))}>
            <p>{user.name} {user.age}</p>
          </li>
        )}
      </ul>
      <div>
        <button onClick={() => dispacth(deleteFirstUserAction())}>Del first user</button>
        <button onClick={() => dispacth(deleteLastUserAction())}>Del last user</button>
        <button onClick={() => dispacth(fetchUserList())}>Get User List</button>
      </div>
    </div>
  );
}