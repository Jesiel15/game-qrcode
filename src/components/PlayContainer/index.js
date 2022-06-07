import styled from 'styled-components'
import colors from '../../assets/Colors'

//  Sites para tirar CSS ou Styled-Component
//  https://react.school/ui/button
//  https://www.w3schools.com/css/css3_buttons.asp

const PlayContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.light};
  z-index: 1;
  width: 90%;
  height: 80vh;
  margin: 10vh;
  border-radius: 20px;
  box-shadow: 10px 10px 20px ${colors.black}; */


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: ${colors.light}; */
  background-color: ${(props) => theme[props.theme].color};
  
  /* z-index: 1; */
  width: 90%;
  /* height: 80vh; */
  margin: 5%;
  border-radius: 20px;
  box-shadow: 10px 10px 20px ${colors.black};
/* z-index: 1; */
  /* width: 90%; */
    padding-top: 0%;
    

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

export { PlayContainer };
