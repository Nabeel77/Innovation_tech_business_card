import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface navBarProps {
    extendNavbar: boolean;
}

export const NavbarContainer = styled.nav<navBarProps>`
    width: 100%;
    height: ${(props) => props.extendNavbar ? '100vh' : '80px'};
    background-color: #63a4ff;
    background-image: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%);
    display: flex;
    opacity: ${(props) => props.extendNavbar ? '0.8' : '1'};
    flex-direction: column;
    z-index: 9999;
    position: fixed;
`

export const LeftContainer = styled.div`
    flex: 20%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    @media (max-width: 700px) {
        flex: 50%;
    }
`

export const MiddleContainer = styled.div`
    flex: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 50px;
    @media (max-width: 700px) {
        flex: 30%;
        padding-right: 0px;
    }
`


export const RightContainer = styled.div`
    flex: 20%;
    display: flex;
    align-items: center;
    padding-left: 5%; 
    @media (max-width: 700px) {
        flex: 30%;
    }
`

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    
`

export const NavbarLinkContainer = styled.div`
    display: flex;
`
export const NavLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: orbitron;
    text-decoration: none;
    margin: 10px;
    @media (max-width: 700px) {
        display: none;
    }
`

export const Atag = styled.a`
    color: white;
    font-size: x-large;
    font-family: orbitron;
    text-decoration: none;
    margin: 10px;
    &:hover{
        border-bottom: 1px solid black;
    }
    &:active{
        border-bottom: 1px solid black;
    }
     @media (max-width: 700px) {
        display: none;
    }
`

export const AtagExtended = styled.a`
    color: black;
    font-size: x-large;
    font-family: orbitron;
    text-decoration: none;
    margin: 10px;
    opacity: 1;
`

export const Logo = styled.img`
    margin: 10px;
    max-width: 80px;
    height: auto;
`

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;
    opacity: 1;
    @media (min-width: 700px) {
        display: none;
    }
`

export const NavbarExtendedContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`


