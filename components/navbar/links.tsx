import React from 'react';
import type { NextPage } from 'next';
import { Atag, AtagExtended } from '../../styles/navbar.style';
import { linksData } from './linksData';

interface navBarProps {
    extendNavbar: boolean;
    setExtendedNavbar: Function;
}

const Links: NextPage<navBarProps> = ({extendNavbar, setExtendedNavbar}) => {

  const handleClick = (e: any) => {
      extendNavbar ? setExtendedNavbar() : null;
       e.preventDefault();
       const target = e.target.getAttribute('href');
       const location = document.querySelector(target).offsetTop;
       window.scrollTo({
           left: 0,
           top: location - 20,
       })
       window.history.replaceState(null, '', `${target}`)
  }

  return (
    <>
        {!extendNavbar ? 
        (
            <>
                {
                    linksData.map((link) => {
                        return (
                            <Atag 
                                href={link.url} 
                                key={link.id}
                                onClick={handleClick}
                                >
                                {link.title}
                            </Atag>
                        )
                    })
                }
            </>
        )
        :
        (
            <>
                 {
                    linksData.map((link) => {
                        return (
                            <AtagExtended 
                                href={link.url} 
                                key={link.id}
                                onClick={handleClick}
                                >
                                {link.title}
                            </AtagExtended>
                        )
                    })
                }
            </>
        )
    }
    </>
  )
}

export default Links
