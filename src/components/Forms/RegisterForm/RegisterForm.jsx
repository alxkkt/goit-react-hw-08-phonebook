import { useState } from 'react';

import s from '../AuthForm.module.css';

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: '',
  });

  return (
    <>
      <form action="" className={s.form}>
        <label className={s.formLabel} htmlFor="">
          Name
        </label>
        <input className={s.formInput} name="name" type="text" required />
        <label className={s.formLabel} htmlFor="">
          Email
        </label>
        <input className={s.formInput} name="email" type="email" required />
        <label className={s.formLabel} htmlFor="">
          Password
        </label>
        <input
          className={s.formInput}
          name="password"
          type="password"
          required
        />

        <button type="submit" className={s.formBtn}>
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
