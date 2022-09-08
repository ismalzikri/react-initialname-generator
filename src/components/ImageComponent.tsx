import styled from "styled-components"

type ImageProps = {
  name: string
}
export const ImageComponent = (props: ImageProps) => {

    const { name } = props

    // create canvas element
    
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    // split name 

    let intials = name?.at(0) ?? ""
    if (name.split(' ').length > 1) {
      intials += name.split(' ').at(-1)?.at(0)
    }

    // generate random background ( upcoming )



    // settings form size 

    canvas.width = 200
    canvas.height = 200

    // draw background & draw text

    if (context != undefined) {
      context.fillStyle = ""
      context.fillRect(0, 0, canvas.width, canvas.height)

      context.font = "30px system-ui"
      context.fillStyle = "white"
      context.textAlign = "center"
      context.textBaseline = "middle"
      context.fillText(intials, canvas.width / 2, canvas.height / 2)
    }

    return (
      <Wrapimage>
        <img src={canvas.toDataURL()} alt="initial-user" />
      </Wrapimage>
    )
}


const Wrapimage = styled.figure`
  margin-top: 5px;
   img {
     border-radius:50%;
   }
`