import { useState } from 'react';

import { initialState } from './initialState';
import s from '../AuthForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...form });

    setForm({ ...initialState });
  };

  const { email, password } = form;

  return (
    <>
      <form action="" className={s.form} onSubmit={handleSubmit}>
        <label className={s.formLabel} htmlFor="">
          Email
        </label>
        <input
          className={s.formInput}
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
          required
        />
        <label className={s.formLabel} htmlFor="">
          Password
        </label>
        <input
          className={s.formInput}
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
          required
        />
        <button type="submit" className={s.formBtn}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
