import './App.css';
import { useForm } from 'react-hook-form';

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data)
  }

  // console.log(errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Имя
          <input {...register('firstName', {
            required: 'Имя обязательно к заполнению!'
          })} />
        </label>
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label>
          Фамилия
          <input {...register('lastName', {
            required: 'Фамилия обязательна к заполнению!'
          })} />
        </label>
        {errors.firstName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  )
}