import styled from 'styled-components'
import colors from '../../assets/Colors'

const Player = styled.div`
width: 8%;
padding-top: 8%;
border-radius: 100%;
background-color: ${(props) => theme[props.theme].color};
box-shadow: 5px 5px 10px ${colors.black};
position: absolute;
top: ${(props) => `${props.top}px`}; 
left: ${(props) => `${props.left}px`}; 
`

const theme = {
  cian: {
    color: colors.cian,
  },
  green: {
    color: colors.green, 
  },
  blue: {
    color: colors.blue, 
  },
  pink: {
    color: colors.pink, 
  },
  gray: {
    color: colors.gray
  }
}

export { Player };
