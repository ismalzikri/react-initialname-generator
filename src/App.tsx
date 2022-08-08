import { InputComponent } from "./components"
import styled from "styled-components"
import { device } from "./device"

const Container = styled.main `
  max-width: 1170px;
  margin:0 auto;
  padding-left: 16px;
  padding-right: 16px;
`

const Wrapper = styled.section `
  margin-top: 80px;  
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Title = styled.span `
  font-weight: 600;
  font-size: 22px;
  line-height: 31px;
   @media ${device.md} {
     font-size: 26px;
   }
`

const Subtitle = styled.span `
  font-weight: 500;
  font-size: 16px;
   @media ${device.md} {
    font-size: 22px;
   }
`

const Footer = styled.footer `
   text-align: center;
   font-weight: 500;
   font-size: 14px;
    @media ${device.md} {
      font-size: 17px;
    }
`

function App() {
  return (
    <Container>
      <Wrapper>
        <Title>You can just type  your username</Title>
        <InputComponent />
      </Wrapper>
      <Wrapper>
        <Subtitle>this  your  logo with your intial.</Subtitle>
      </Wrapper>
      
      <Wrapper>
        <img src="" alt="user-initial" />
      </Wrapper>

      <Footer>created by  ismal zikri.</Footer>
    </Container>
  )
}

export default App