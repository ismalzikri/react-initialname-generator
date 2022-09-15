import styled from 'styled-components'
import { device } from '../device'

type InputProps = {
  value?: string
  handleChange: (str: string) => void
}

const Input = styled.input `
  margin-top:50px;
  width: 70%;
  border-radius: 8px;
  outline:none;
  border:none;
  padding: 1rem;
    @media ${device.md} {
      width: 200px;
    }  
    &:focus {
      box-shadow: 0 0 0 0.2rem #b9abe0;
    }
    &::placeholder {
      font-weight: 100;
      font-size: 1rem;
    }
`

export const InputComponent = (props: InputProps) => { 

  const { handleChange, value } = props

  return (
    <>
      <Input 
        type="text"
        placeholder='ex: Jhon doe'
        onChange={event => handleChange(event.target.value)}
        value={value}
      />
    </>
  )
}


