import React from 'react';
import { Link } from 'react-router-dom';
import { Button, DivButton } from '../../components/Button';
import { Container } from '../../components/Container';
import { Menu } from '../../components/Menu';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Menu>
          <Link to='/play'>
            <DivButton theme="blackpink">
              <Button theme="blackpink" >
                Play
              </Button>
            </DivButton>
          </Link>

          <Link to='/a'>
            <DivButton theme="blackpink">
              <Button theme="blackpink">
                About
              </Button>
            </DivButton>
          </Link>

          <Link to='/a'>
            <DivButton theme="blackpink">
              <Button theme="blackpink">
                Rank
              </Button>
            </DivButton>
          </Link>

          <Link to='/a'>
            <DivButton theme="blackpink">
              <Button theme="blackpink">
                Credits
              </Button>
            </DivButton>
          </Link>
        </Menu>
      </Container>
    );
  }
}
