import styled from 'styled-components'
import colors from '../../assets/Colors'

const Player = styled.div`

width: 10%;
padding-top: 10%;
/* margin-top: -100%; */

/* height: 10vh; */
border-radius: 100%;
background-color:  ${colors.cian};
box-shadow: 5px 5px 10px ${colors.black};
position: absolute;
/* top: 100px; */
/* left: 100px; */
top: ${(props) => `${props.top}px`}; 
left: ${(props) => `${props.left}px`}; 
/* transition: ease top 50ms;
transition: ease left 50ms; */
`
export { Player };


// width: 10vh;
// height: 10vh;
// border-radius: 100%;
// background-color:  ${colors.cian};
// box-shadow: 5px 5px 10px ${colors.black};
// position: absolute;
// /* top: 100px; */
// /* left: 100px; */
// top: ${(props) => `${props.top}px`}; 
// left: ${(props) => `${props.left}px`}; 
// /* transition: ease top 50ms;
// transition: ease left 50ms; */

