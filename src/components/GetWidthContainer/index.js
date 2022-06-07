import styled from 'styled-components'
import colors from '../../assets/Colors'

const GetWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkblue};
  width: 90%;
  margin: 5%;
  border-radius: 20px;
  box-shadow: 10px 10px 20px ${colors.black};
  padding-top: 40%;
  position: relative;  
`

export { GetWidthContainer };
