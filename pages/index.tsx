import { useState, useEffect, useRef } from 'react';
import type { NextPage } from 'next';
import MovingParticles from '../components/particles';
import { Container, Main } from '../styles/main.style';
import Navbar from '../components/navbar';
import Hero from '../components/heroSection/heroSection';
import About from '../components/about';
import RoadMap from '../components/roadMapSection';
import Team from '../components/teamSection';
import Footer from '../components/footerSection/footerSection'
import { Animator, 
        ScrollContainer, 
        ScrollPage, 
        batch, 
      } from "react-scroll-motion";
import { linksData } from '../components/navbar/linksData';

const Home: NextPage = () => {

  const [firstRender, setFirstRender] = useState(0);
  const [sectionsIds, setSectionsIds] = useState([]);
  const [isBrowser, setIsBrowser] = useState(false);
  const contentItems = [<Hero/>, <About/>, <RoadMap/>,  <Team/>];
  
  useEffect(() => {
    setIsBrowser(typeof window !== undefined ? true : false);
    setFirstRender(1);
  }, []);

  useEffect(() => {
    const sectionsList = document.querySelectorAll('section');
    const sectionsData: any = [];
    for (let i = 0; i < sectionsList.length; i++) {
        sectionsData.push(sectionsList[i].id);
    }
    setSectionsIds(sectionsData);
  }, [firstRender]);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setUrl();
    })
    return window.removeEventListener('scroll', () => {})
  }, []);

  const isElementXPercentInViewport = function(el: any, percentVisible: any) {
    let rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  };

  const setUrl = () => { 
    if (isElementXPercentInViewport(document.getElementById('home'), 13)) {
      window.history.replaceState(null, '', '#home');
    } else if (isElementXPercentInViewport(document.getElementById('about'), 13)) {
      window.history.replaceState(null, '', '#about');
    } else if (isElementXPercentInViewport(document.getElementById('roadmap'), 13)) {
      window.history.replaceState(null, '', '#roadmap');
    } else if (isElementXPercentInViewport(document.getElementById('team'), 13)) {
      window.history.replaceState(null, '', '#team');
    }
  }


  const content = linksData.map((item, index) => {
    return (
      <section id={item.text} key={index}>
        <ScrollPage page={item.page}>
          <Animator animation={batch(item.sticky, item.fade, item.move)}>
            {contentItems[index]}
          </Animator>
        </ScrollPage>
      </section>
    )
  })

  return (
    <>
      { 
        isBrowser && 
        (
          <Container>
            <Navbar/>
            <Main>
              <MovingParticles/>
              <ScrollContainer>
                {content}
              </ScrollContainer>
            </Main>
          </Container>
        )
      }
    </>

  )
}

export default Home;
