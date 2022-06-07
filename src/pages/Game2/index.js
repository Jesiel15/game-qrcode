import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button'
import { Player } from '../../components/Player'
import { Menu } from '../../components/Menu'
import { GetWidthContainer } from '../../components/GetWidthContainer'


import { PlayContainer } from '../../components/PlayContainer'
export default class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
      x: 0,
      width: 0,
      height: 0,
    };

    this.loadingGame = this.loadingGame.bind(this);
    this.divRef = React.createRef()
  }

  componentDidMount() {
    this.loadingGame();
  }

  loadingGame = () => {
    let widthDiv = this.divRef.current.offsetWidth - (this.divRef.current.offsetLeft / 2);
    let heightDiv = this.divRef.current.offsetHeight - this.divRef.current.offsetTop;
    
    var min = 10;
    var maxX = widthDiv;
    var maxY = heightDiv;
    var randX = min + (Math.random() * (maxX - min));
    var randY = min + (Math.random() * (maxY - min));
    let randomNumX = randX
    let randomNumY = randY
    
    this.setState({ x: randomNumX, y: randomNumY });
    this.setState({
      width: widthDiv, height: heightDiv
    });
  }

  render() {
    const { x, y, width } = this.state
    return (
      <PlayContainer theme="green">
        <GetWidthContainer ref={this.divRef}>
          <Player  theme="pink" left={x} top={y} width={width} onClick={this.loadingGame} />
        </GetWidthContainer>
        <Menu>
          <Link to='/games'>
            <Button theme="blackpink" >
              Back
            </Button>
          </Link>
        </Menu>
      </PlayContainer>
    );
  }
}
