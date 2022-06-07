import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Menu } from '../../components/Menu';

export default class Pege404 extends React.Component {

  render() {
    return (
      <Container theme="green">
        <Menu>
          <h1>Página 404</h1>
          <Link to='/'>
            <Button theme="blackpink" >
              Página inicial
            </Button>
          </Link>
        </Menu>
      </Container>
    );
  }
}
