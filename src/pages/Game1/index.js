import React from 'react';
import { Link } from 'react-router-dom';
import { Button, DivButton } from '../../components/Button'
import { Player } from '../../components/Player'
import { Menu } from '../../components/Menu'
import { GetWidthContainer } from '../../components/GetWidthContainer'
import { PlayContainer } from '../../components/PlayContainer'
import { Keyboard, Key, RowWASD, HUD } from '../../components/Keyboard'
export default class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
      x: 0,
      width: 0,
      height: 0,
      offSetRight: 0,
      tamanhoPlayer: 0
    };

    this.loadingGame = this.loadingGame.bind(this);

    this.divRef = React.createRef()
    this.player = React.createRef()
  }


  componentDidMount() {
    this.loadingGame();
    this.playGame();
  }

  loadingGame = () => {
    let widthDiv = this.divRef.current.offsetWidth - (this.divRef.current.offsetLeft / 2);
    let heightDiv = this.divRef.current.offsetHeight - this.divRef.current.offsetTop;
    let tamanho = this.player.current.offsetWidth

    this.setState({
      width: widthDiv,
      height: heightDiv,
      tamanhoPlayer: tamanho,
    });
  }

  playGame() {
    document.addEventListener('keydown', this.detectKeyDown, true)
  }

  detectKeyDown = (e) => {
    let cont = 0
    console.log("key press", e.key)
    if (e.key === "ArrowLeft" || e.key === "a") {
      if (this.state.x !== 0) {
        cont = -20
      }
      this.setState({ x: this.state.x + cont });

    } else if (e.key === "ArrowRight" || e.key === "d") {
      if (this.state.x < this.state.width) {
        if (this.state.x + (this.state.tamanhoPlayer * 2 / 3) >= this.state.width) {
          cont = 0
        } else {
          cont = 20
        }
      }
      this.setState({ x: this.state.x + cont });

    } else if (e.key === "ArrowUp" || e.key === "w") {
      if (this.state.y !== 0) {
        cont = -20
      }
      this.setState({ y: this.state.y + cont });

    } else if (e.key === "ArrowDown" || e.key === "s") {
      if (this.state.y < this.state.height) {
        if (this.state.y + (this.state.tamanhoPlayer / 2) >= this.state.width) {
          cont = 0
        } else {
          cont = 20
        }
      }
      this.setState({ y: this.state.y + cont });
    }
  }

  render() {
    const { x, y, width } = this.state
    return (
      <PlayContainer theme="cian">
        <HUD>
          <Keyboard>
            <Key>W</Key>
            <RowWASD>
              <Key>A</Key>
              <Key>S</Key>
              <Key>D</Key>
            </RowWASD>
          </Keyboard>
          <Keyboard>
            <Key>↾</Key>
            <RowWASD>
              <Key>↼</Key>
              <Key>⇃</Key>
              <Key>⇀</Key>
            </RowWASD>
          </Keyboard>
        </HUD>


        <GetWidthContainer ref={this.divRef}>
          <Player theme="green" ref={this.player} left={x} top={y} width={width} />
        </GetWidthContainer>
        <Menu>
          <Link to='/games'>
            <DivButton theme="blackpink">
              <Button theme="blackpink">
                Back
              </Button>
            </DivButton>
          </Link>
        </Menu>
      </PlayContainer>
    );
  }
}
