import { Link } from "react-router-dom";
import { Button } from "../UI/Button";

export function HomePage() {
  return (
    <div className="content">
      <h1>Главная</h1>
      <Link to={'/products'} >
        <Button title={'Товары'} />
      </Link>
    </div>
  )
}