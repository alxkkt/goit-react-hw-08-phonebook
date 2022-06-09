import { useState } from 'react';

import s from '../AuthForm.module.css';
import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
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

  const { name, email, password } = form;
  return (
    <>
      <form action="" className={s.form} onSubmit={handleSubmit}>
        <label className={s.formLabel} htmlFor="">
          Name
        </label>
        <input
          onChange={handleChange}
          className={s.formInput}
          name="name"
          type="text"
          value={name}
          required
        />
        <label className={s.formLabel} htmlFor="">
          Email
        </label>
        <input
          onChange={handleChange}
          className={s.formInput}
          name="email"
          type="email"
          value={email}
          required
        />
        <label className={s.formLabel} htmlFor="">
          Password
        </label>
        <input
          onChange={handleChange}
          className={s.formInput}
          name="password"
          type="password"
          value={password}
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
