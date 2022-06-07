import React from 'react';
import { Link } from 'react-router-dom';
import { Button, DivButton } from '../../components/Button';
import { Container } from '../../components/Container';
import { Menu } from '../../components/Menu';

export default class Games extends React.Component {
  render() {
    return (
      <Container theme="green">
        <Menu>
          <Link to='/game1'>
            <DivButton theme="blackpink">
              <Button theme="blackpink" >
                Game one
              </Button>
            </DivButton>
          </Link>
          <Link to='/game2'>
            <DivButton theme="blackpink">
              <Button theme="blackpink" >
                Game two
              </Button>
            </DivButton>
          </Link>
          <Link to='/'>
            <DivButton theme="blackpink">
              <Button theme="blackpink" >
                Back
              </Button>
            </DivButton>
          </Link>
        </Menu>
      </Container>
    );
  }
}
