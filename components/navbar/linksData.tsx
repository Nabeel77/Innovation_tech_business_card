import { Animator, 
    ScrollContainer, 
    ScrollPage, 
    batch, 
    Fade, 
    FadeIn, 
    Move, 
    MoveIn, 
    MoveOut, 
    Sticky, 
    StickyIn, 
    StickyOut,
    ZoomIn, 
    FadeOut,
    
  } from "react-scroll-motion";

export const linksData = [
    {
        page: 0,
        id: 1,
        text: 'home',
        title: 'Home',
        url: '#home',
        sticky: Sticky(50, 60),
        fade:   Fade(),
        move: MoveOut(-20, -50)
    },
    {
        page: 1,
        id: 2,
        text: 'about',
        title: 'About',
        url: '#about',
        sticky: Sticky(50, 60),
        fade:   Fade(),
        move: MoveOut(20, -50)
    },
    {
        page: 2,
        id: 3,
        text: 'roadmap',
        title: 'Roadmap',
        url: '#roadmap',
        sticky: Sticky(50, 60),
        fade:   Fade(),
        move: MoveOut(-20, -50)
    },
    {
        page: 3,
        id: 4,
        text: 'team',
        title: 'Team',
        url: '#team',
        sticky: Sticky(50, 60),
        fade:   Fade(),
        move: MoveOut(20, -50)
    }

]