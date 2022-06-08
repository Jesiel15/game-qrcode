import styled from 'styled-components'
import colors from '../../assets/Colors'

const Keyboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10%;
  margin-top: 1%;
  position: relative;  
`
const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
  width: 30%;
  margin: 2%;
  border-radius: 10px;
  box-shadow: 2px 5px 0px ${colors.darkblue};
  padding-top: 6%;
  padding-bottom: 6%;
  position: relative;  
`

const RowWASD = styled.div`
  display: flex;
  width: 100%;
  margin: 2%;
  position: relative;  
  
`

const HUD = styled.div`
   display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 90%;
  position: relative;  
`

export { Keyboard, Key, RowWASD, HUD };
