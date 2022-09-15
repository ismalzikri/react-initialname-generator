import { useState } from "react"
import { device } from "./device"
import { InputComponent, ImageComponent } from "./components"
import styled from "styled-components"

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
   margin-top: 40px;
   text-align: center;
   font-weight: 500;
   font-size: 14px;
    @media ${device.md} {
      font-size: 17px;
    }
`

function App() {

  const [name, setName] = useState<string> ('')  

  return (
    <Container>
      <Wrapper>
        <Title>You can just type  your username</Title>
        <InputComponent 
          value={name} 
          handleChange={(str: string) => setName(str)} 
        />
      </Wrapper>
      
      <Wrapper>
        <Subtitle>this  your  logo with your intial.</Subtitle>
      </Wrapper>
      
      <Wrapper>
        <ImageComponent name={name} />
      </Wrapper>

      <Footer>Created by  ismal zikri.</Footer>
    </Container>
  )
}

export default App