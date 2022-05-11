import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 30px 30px;
`

export const MainHeading = styled.h1`
    color: white;
    font: x-large orbitron;

    @media (max-width: 700px) {
        font-size: large;
    }
`

export const ComingSoon = styled.p`
    color: white;
    font: 5rem orbitron;
    text-align: center;
    line-height: 600px;
    vertical-align: middle;

    @media (max-width: 700px) {
        font-size: 2rem;
    }
`