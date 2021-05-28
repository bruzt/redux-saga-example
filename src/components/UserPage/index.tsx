import React from 'react';
import { useSelector } from 'react-redux';

import { storeState } from '../../redux/types/reducersStates';

import { Container } from './styles';

export default function UserPage() {

  const user = useSelector((state: storeState) => state.user);
  
  return (
    <Container>

      <h1>username: {user.username}</h1>
      <h2>name: {user.githubData.name}</h2>
      <h3>bio: {user.githubData.bio}</h3>
      
    </Container>
  );
}
