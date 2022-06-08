import styled from 'styled-components'
import colors from '../../assets/Colors'

const PlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => theme[props.theme].color};
  
  width: 90%;
  margin-left: 5%;
  border-radius: 20px;
  box-shadow: 10px 10px 20px ${colors.black};
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
