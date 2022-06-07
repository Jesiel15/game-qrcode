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
      loading: false,
      y: 0,
      x: 0,
      width: 0,
      height: 0,
      offSetRight: 0,
      tamanhoPlayer: 0
    };

    this.loadingGame = this.loadingGame.bind(this);
    this.stopLoading = this.stopLoading.bind(this);

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
      loading: true,
      width: widthDiv,
      height: heightDiv,
      tamanhoPlayer: tamanho,
    });
  }

  stopLoading() {
    this.setState({
      loading: false
    });
  }

  playGame() {
    document.addEventListener('keydown', this.detectKeyDown, true)
  }

  detectKeyDown = (e) => {
    let key = 0
    let cont = 0
    if (e.key === "ArrowLeft") {
      key = 1
      if (this.state.x !== 0) {
        cont = -20
      }
      this.setState({ x: this.state.x + cont });

    } else if (e.key === "ArrowRight") {
      key = 2
      if (this.state.x < this.state.width) {
        if (this.state.x + (this.state.tamanhoPlayer * 2 / 3) >= this.state.width) {
          cont = 0
        } else {
          cont = 20
        }
      }
      this.setState({ x: this.state.x + cont });

    } else if (e.key === "ArrowUp") {
      key = 3
      if (this.state.y !== 0) {
        cont = -20
      }
      this.setState({ y: this.state.y + cont });

    } else if (e.key === "ArrowDown") {
      key = 4
      if (this.state.y < this.state.height) {
        if (this.state.y + (this.state.tamanhoPlayer / 2) >= this.state.width) {
          cont = 0
        } else {
          cont = 20
        }
      }
      this.setState({ y: this.state.y + cont });
    }

    this.setState({
      position: key
    });
  }

  render() {
    const {  position, x, y, width } = this.state
    // console.log("x:", x, " --  y:", y)
    // console.log("width ", width)
    // console.log("height ", height)
    return (
      <>
        {/* <GetWidthContainerDefault ref={this.divRef}></GetWidthContainerDefault> */}
        {/* <Player ref={this.player} left={x} top={y} width={width} />  */}
        <PlayContainer>
          <GetWidthContainer ref={this.divRef}>
            <Player ref={this.player} left={x} top={y} width={width} />
          </GetWidthContainer>
          <Menu>
            <Link to='/'>
              <Button theme="blackpink" onClick={this.stopLoading}>
                Back Menu - Tecla:{position}
              </Button>
            </Link>
          </Menu>
        </PlayContainer>

      </>
    );
  }
}
