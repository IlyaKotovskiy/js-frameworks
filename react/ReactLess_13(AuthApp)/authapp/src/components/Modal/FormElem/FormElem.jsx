import s from './FormElem.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../../../UI/Button/Button';
import { Input } from '../../../UI/Input/Input';
import { useForm } from 'react-hook-form';

export function FormElem({ title, button, link, type, input, infoText }) {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>{title}</h2>
        
        {/* Инпут почты */}
        <p>{input.email}</p>
        <Input {...register('email', {
          required: 'Почта должна быть заполнена'
        })} />
        {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}

        <p className={s.info_text}>{infoText}</p>

        {type === 'login' && (
          <Link to={'/reset'}>
            <p>Сбросить пароль</p>
          </Link>
        )}
        
        <Link to={link}>
          <Button title={button.redirect} color={'white'} />
        </Link>
        <Button title={button.submit} color={'yellow'} />
      </form>
    </div>
  )
}