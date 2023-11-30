import { Counter } from "./components/Counter";
import { Employee } from "./components/Employee";
import { String } from "./components/String";
import { Users } from "./components/Users";

export function App() {
  return(
    <div>
      <Counter />
      <String />
      <Users />
      <Employee />
    </div>
  )
}