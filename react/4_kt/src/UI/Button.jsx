import s from './Button.module.scss';

export function Button({ title, ...otherProps }) {
  return (
    <button
      className={s.button}
      {...otherProps}
    >
      {title}
    </button>
  )
}