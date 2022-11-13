import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroH1,
} from "./HeroElements";
import React from "react";
import Video from "../../components/videos/video.mp4";

const Home = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
          data-testid="videoAdelanto"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Cinema Movies</HeroH1>
        <HeroP data-testid="registroTexto">Registrate para conocer descuentos especiales</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default Home;
