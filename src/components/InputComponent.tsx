import React from 'react'

import styled from 'styled-components'
import { device } from '../device'

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

export const InputComponent = () => {
  return (
    <>
     <Input type="text" placeholder='Jhon doe' />
    </>
  )
}
