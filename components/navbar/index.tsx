import React, { useState } from 'react';
import type { NextPage } from 'next';
import Links from './links';
import { NavbarContainer, 
        LeftContainer, 
        MiddleContainer, 
        RightContainer, 
        NavbarInnerContainer,
        NavbarExtendedContainer,
        NavbarLinkContainer,
        NavLink,
        Atag,
        Logo,
        OpenLinksButton
        } from '../../styles/navbar.style';
import Icons from '../icons';


const Navbar: NextPage = () => {

  const [extendNavbar, setExtendNavbar] = useState(false);

  const setButtonState = () => {
      setExtendNavbar((curr) => !curr);
  }

  const buttonText = extendNavbar ? (
      <>&#10005;</>
  ) : (
      <>&#8801;</>
  )

  return (
    <>
     <NavbarContainer extendNavbar={extendNavbar}>
         {""}
         <NavbarInnerContainer>
            <LeftContainer>
                <Logo src='images/logo.jpeg' />
            </LeftContainer>
            <MiddleContainer>
                <NavbarLinkContainer>
                    {!extendNavbar && (<Links extendNavbar={extendNavbar} setExtendedNavbar={setButtonState}/>)}
                    <OpenLinksButton onClick={setButtonState}>{buttonText}</OpenLinksButton>
                </NavbarLinkContainer>
            </MiddleContainer>
            <RightContainer>
                <Icons/>
            </RightContainer>
         </NavbarInnerContainer>
         {extendNavbar && (
            <NavbarExtendedContainer>
                <Links extendNavbar={extendNavbar} setExtendedNavbar={setButtonState}/>
            </NavbarExtendedContainer>
         )}
     </NavbarContainer>
    </>
  )
}

export default Navbar
