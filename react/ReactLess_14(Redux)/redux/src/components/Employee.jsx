import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../asyncActions/users";

export function Employee() {
  const employee = useSelector(store => store.employee);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Employee</h2>
      <div>
        <h3>Name: {employee.name}</h3>
        <p>Phone: {employee.phone}</p>
        <p>Email: {employee.email}</p>
        <p>Company: {employee.company?.name}</p>
      </div>
      <div>
        <button onClick={() => dispatch(fetchUser(prompt()))}>async - Подтянуть значение по ID</button>
      </div>
    </div>
  );
}