import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { NextPage } from 'next';
import classes from "../../styles/particleStyles.module.css"
import { init } from "aos";

const MovingParticles: NextPage = () => {

  const particlesInit = async (main: any) => {
      console.log(main);
      await loadFull(main);
    };
  
    const particlesLoaded = (container: any) :any => {
      console.log(container);
    };

    return (
      <Particles
        className={classes.wrapper}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.3,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1100,
              },
              value: 45,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          fullScreen: {
            enable: false,
            zIndex: -1 // or any value is good for you, if you use -1 set `interactivity.detectsOn` to `"window"` if you need mouse interactions
          },
          detectRetina: true,
      }}/>
    )
}

export default MovingParticles;
