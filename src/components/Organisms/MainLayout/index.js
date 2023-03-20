//this component is meant to wrap all of the pages
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, SubContainer} from './mainLayout.style'
const MainLayout = ({children, logo, home}) => {
  return (
    <Container home={home}>
      <SubContainer>
        {logo && <Image src='https://d1ktvljo0s16y6.cloudfront.net/static/images/logo.f392b2746345.png' />}
        {!logo && 
          <Link to='/'>
            <Image src='https://d1ktvljo0s16y6.cloudfront.net/static/images/logo.f392b2746345.png' />
          </Link>
        }
      </SubContainer>
      {children}
    </Container>
  )
}

export default MainLayout