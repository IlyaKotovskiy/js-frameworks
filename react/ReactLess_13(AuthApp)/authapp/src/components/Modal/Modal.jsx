import { Routes, Route, Link } from 'react-router-dom';
import s from './Modal.module.css';

export function Modal({ active, setActive }) {
  return (
    <div className={`${s.modal} ${active && s.active}`}>
      <div className={`${s.modal_content} ${active && s.active}`}>
        <button onClick={() => setActive(false)}>X</button>
        <Link to={'/registration'}>
          <p>To REG!</p>
        </Link>
        Modal
        <Routes>
          <Route path='/login' element={<h2>Auth</h2>} />
          <Route path='/registration' element={<h2>Registration</h2>} />
        </Routes>
      </div>
    </div>
  )
}