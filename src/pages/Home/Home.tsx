import React, {useState, SyntheticEvent} from 'react';
import { useDispatch } from 'react-redux';

import { Container } from './styles';

import List from 'components/List/List';


const Home: React.FC = () => {


  return (
    <Container>
      <h1>Hello, Welcome back!</h1>

      <List />
    </Container>
  );

}


export default Home;
