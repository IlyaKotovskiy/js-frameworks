import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";

export function NotFoundPage() {
  const navigate = useNavigate();
  
  return (
    <div className="content">
      <img src="https://www.akilligundem.com/wp-content/uploads/2022/03/error-404-page-not-found-hatasi-nasil-cozulur-0-1ELWuxVK.jpeg" alt="404" />
      <Button title={'К товарам'} onClick={() => navigate('/products')} />
    </div>
  )
}