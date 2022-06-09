import { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { useCreateUserMutation } from 'redux/auth/auth';
import { initialState } from './initialState';

import RegisterForm from 'components/Forms/RegisterForm';
import GoBackButton from 'shared/components/GoBackButton';

const RegisterPartial = () => {
  const [user, setUser] = useState({ ...initialState });

  const [createUser, { data: response }] = useCreateUserMutation();

  useEffect(() => {}, [user]);

  return (
    <>
      <GoBackButton />
      <p>Fill the form down below to become a proud user</p>
      <RegisterForm onSubmit={setUser} />
    </>
  );
};

export default RegisterPartial;
