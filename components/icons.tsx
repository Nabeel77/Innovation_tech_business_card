import type { NextPage } from 'next'
import styled from 'styled-components'
import { FaDiscord } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const IconsContainer = styled.div`
    display: flex;
    width: 50%;
    height: 80%;
    justify-content: space-around;
    align-items: center;
    z-index: 9999;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

const Discord = styled.a`
    width: 100%;
    height: 40%;
    text-align: center;
    font-size: 30px;
    color: white;
    cursor: pointer;
    &:hover {
        color: #9680E7;
    }
    @media screen and (min-width: 1024px) {
        font-size: 30px;
    }
`

const Twitter = styled.a`
    width: 100%;
    height: 40%;
    text-align: center;
    font-size: 30px;
    color: white;
    cursor: pointer;
    &:hover {
        color: #26A4F2;
    }
    @media screen and (min-width: 1024px) {
        font-size: 30px;
    }
`

const openLink = (link: string): void => {
    window.open(link, "_blank")
} 

const Icons: NextPage = () => {

    return (
       <IconsContainer>
           <Discord onClick={() => openLink('https://discord.gg/aEnQXhF3')}><FaDiscord/></Discord>
           <Twitter onClick={() => openLink('https://twitter.com/innovattechio')}><FaTwitter/></Twitter>
       </IconsContainer>
    )

}

export default Icons