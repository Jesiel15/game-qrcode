import styled from 'styled-components'
import colors from '../../assets/Colors'

//  Sites para tirar CSS ou Styled-Component
//  https://react.school/ui/button
//  https://www.w3schools.com/css/css3_buttons.asp

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: ${colors.cian}; */
  background-color: ${(props) => theme[props.theme].color};
  width: 90%;
  height: 80vh;
  margin: 10vh;
  border-radius: 20px;
  box-shadow: 10px 10px 20px ${colors.black};
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
  }
}
export { Container };
