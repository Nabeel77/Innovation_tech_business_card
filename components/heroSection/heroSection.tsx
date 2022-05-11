import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import type { NextPage } from 'next'
import { Container, MainHeading, ComingSoon } from '../../styles/hero.style';
import Icons from '../icons'

const Hero: NextPage = () => {

    return (
      <Container id="home">
        <MainHeading>Home</MainHeading>
        <ComingSoon>Coming Soon</ComingSoon>
      </Container>
    )
}

export default Hero;

