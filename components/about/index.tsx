
import type { NextPage } from 'next'
import { Container, MainHeading, ComingSoon } from '../../styles/about.style';

const About: NextPage = () => {
    return (
      <Container id="about">
        <MainHeading>About</MainHeading>
        <ComingSoon>Coming Soon</ComingSoon>
      </Container>
    )
}

export default About;

