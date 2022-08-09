import styled from "styled-components"

const Wrapimage = styled.figure`
  margin-top: 5px;
  width: 250px;
  height: 250px;
  display:flex;
  justify: center;
  align-items:center;
  border-radius: 50%;
  background:red;
`

export const ImageComponent = () => {
    return (
      <Wrapimage>
        <img alt="initial-user" />
      </Wrapimage>
    )
}