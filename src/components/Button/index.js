import styled from 'styled-components'
import colors from '../../assets/Colors'

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 10%;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
 
  /* &:hover {
    background-color: ${(props) => theme[props.theme].hover};
    margin-left: 20%;
    padding: 15%;
    transition: ease 300ms;
  } */
  
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }

  border-radius: 10px;
  box-shadow: 4px 4px 15px ${colors.black};
  border: 0;
  width: 100%;
`
const DivButton = styled.div`
  &:hover Button {
    background-color: ${(props) => theme[props.theme].hover};
    margin-left: 10%;
    padding: 15%;
    transition: ease 300ms;
  }
`
const theme = {
  blackblue: {
    default: colors.blue,
    hover: colors.darkblue
  },
  blackpink: {
    default: colors.gray,
    hover: colors.pink
  }
}

export { Button, DivButton };
