import s from '../RegisterForm/AuthForm.module.css';

const LoginForm = () => {
  return (
    <form action="" className={s.form}>
      <label className={s.formLabel} htmlFor="">
        Email
      </label>
      <input className={s.formInput} type="email" required />
      <label className={s.formLabel} htmlFor="">
        Password
      </label>
      <input className={s.formInput} type="password" required />
      <button type="submit" className={s.formBtn}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
