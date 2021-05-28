import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUsername as setUsernameAction } from '../../redux/actions/userActions';

import { Container } from './styles';

export default function HomePage() {

  const [userState, setUserState] = useState('');

  const dispatch = useDispatch();

  function onSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();

    dispatch(setUsernameAction(userState));
  }

  return (
    <Container>

      <form onSubmit={onSubmit}>
        <h2>Login:</h2>
        <input 
          type='text' 
          placeholder='Digite seu usuário do Github'
          value={userState}
          onChange={(event) => setUserState(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      
    </Container>
  );
}
