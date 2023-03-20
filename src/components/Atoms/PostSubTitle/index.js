import React from 'react'
import { Paragraph, Container } from './subTitle.style'
const PostSubTitle = ({subtitle, duration}) => {
  return (
    <Container>
      <Paragraph>{subtitle}</Paragraph> - <Paragraph left={true}>{duration} min read </Paragraph>
    </Container>
  )
}


export default PostSubTitle