// Write your code here
import {useState} from 'react'
import {Container, Paragraph, Button, Image} from './styledComponents'

const Unlock = () => {
  const [current, setFun] = useState(false)
  const imageUrl = current
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png '
  const altText = current ? 'unlock' : 'lock'
  const text = current ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = current ? 'Lock' : 'Unlock'
  const onclickbutton = () => setFun(prevState => !prevState)
  return (
    <Container>
      <Image src={imageUrl} alt={altText} />
      <Paragraph>{text}</Paragraph>

      <Button type="button" onClick={onclickbutton}>
        {buttonText}
      </Button>
    </Container>
  )
}

export default Unlock
