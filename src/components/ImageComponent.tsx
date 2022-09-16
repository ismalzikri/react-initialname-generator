import styled from "styled-components"

type ImageProps = {
  name: string
}

export const ImageComponent = (props: ImageProps) => {

    const { name } = props

    // generate random background

    const getRandomNumber = (limit: number) => {
      return Math.floor(Math.random() * limit)
    }

    const getRandomColor  = () => {
      const h = getRandomNumber(360)
      const s = getRandomNumber(100)
      const l = getRandomNumber(100)
    
      return `hsl(${h}deg, ${s}%, ${l}%)`
    }

    // create canvas element
    
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    // split name 

    let intials = name?.at(0) ?? ""
    if (name.split(' ').length > 1) {
      intials += name.split(' ').at(-1)?.at(0) 
    }

    // settings form size 

    canvas.width = 200
    canvas.height = 200

    // draw background & draw text

    if (context != undefined) {
      context.fillStyle = getRandomColor()
      context.fillRect(0, 0, canvas.width, canvas.height)

      context.font = "30px system-ui"
      context.fillStyle = "white"
      context.textAlign = "center"
      context.textBaseline = "middle"
      context.fillText(intials.toUpperCase(), canvas.width / 2, canvas.height / 2)
    }
    
    return (
      <Wrapimage href={canvas.toDataURL()} download>
        <img src={canvas.toDataURL()} alt="initial-user" />
        <button>Download</button>
      </Wrapimage>
    )
}


const Wrapimage = styled.a`
  margin-top: 5px;
  display:flex;
  flex-direction: column;
  align-items:center;
   img {
     border-radius:50%;
   }
   button {
     border:1px solid #4275f5;
     margin:25px 10px;
     font-size: 14px;
   }
`