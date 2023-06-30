// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(to bottom, #3c2940, #0b0c1e);
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Paragraph = styled.p`
color:white;
font-family:"Roboto"
font-weight:400;
font-size:40px;
padding-bottom:50px;`

export const Button = styled.button`
  border-radius: 10px;
  color: white;
  padding: 10px;
  width: 120px;
  height: 60px;
  background-color: #06b6d4;
  text-align: center;
  font-size: 30px;
`
export const Name = styled.span`
  color: white;
  font-size: 40px;
`
export const Image = styled.img`
  width: 96px;
`
