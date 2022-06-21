import React from "react";
import { Link } from "react-router-dom";
import { Button, DivButton } from "../../components/Button";
import { Player } from "../../components/Player";
import { Menu } from "../../components/Menu";
import { GetWidthContainer } from "../../components/GetWidthContainer";
import { PlayContainer } from "../../components/PlayContainer";
import { ZeroCounter } from "../../components/ZeroCounter";
export default class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
      x: 0,
      width: 0,
      height: 0,
      clicks: -1,
    };

    this.loadingGame = this.loadingGame.bind(this);
    this.divRef = React.createRef();
  }

  componentDidMount() {
    this.loadingGame(); //Faz com que ao iniciar, comece em posição aleatória
  }

  zeroCounter = () => {
    var cont = 0;
    this.setState({
      clicks: cont,
    });
  };

  loadingGame = () => {
    let widthDiv =
      this.divRef.current.offsetWidth - this.divRef.current.offsetLeft / 2;
    let heightDiv =
      this.divRef.current.offsetHeight - this.divRef.current.offsetTop;

    var min = 10;
    var maxX = widthDiv;
    var maxY = heightDiv;
    var randX = min + Math.random() * (maxX - min);
    var randY = min + Math.random() * (maxY - min);
    let randomNumX = randX;
    let randomNumY = randY;

    var cont = this.state.clicks + 1;

    this.setState({
      width: widthDiv,
      height: heightDiv,
      x: randomNumX,
      y: randomNumY,
      clicks: cont,
    });
  };

  render() {
    const { clicks, x, y, width } = this.state;
    return (
      <PlayContainer theme="green">
        <ZeroCounter onClick={this.zeroCounter}></ZeroCounter>
        <GetWidthContainer ref={this.divRef}>
          <h2>Contador: {clicks}</h2>
          <Player
            theme="pink"
            left={x}
            top={y}
            width={width}
            onClick={this.loadingGame}
          />
        </GetWidthContainer>
        <Menu>
          <Link to="/games">
            <DivButton theme="blackpink">
              <Button theme="blackpink">Back</Button>
            </DivButton>
          </Link>
        </Menu>
      </PlayContainer>
    );
  }
}
