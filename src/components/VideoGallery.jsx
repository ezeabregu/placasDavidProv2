import { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { videos } from "./data/Productos";
import { FaPlay } from "react-icons/fa";

const Section = styled.section`
  background: ${theme.colors.surface};
  padding: 7rem 3rem;
  @media (max-width: 768px) { padding: 4rem 1.5rem; }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`;

const Eyebrow = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

const Title = styled.h2`
  font-family: ${theme.fonts.header};
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0;
`;

const Divider = styled.div`
  width: 48px;
  height: 2px;
  background: ${theme.colors.primary};
`;

const FeaturedVideo = styled.video`
  width: 100%;
  max-height: 500px;
  border-radius: 8px;
  border: 1px solid ${theme.colors.border};
  background: #000;
  display: block;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;

  @media (max-width: 900px) { grid-template-columns: repeat(5, minmax(120px, 1fr)); }
  @media (max-width: 600px) {
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    overflow-x: auto;
    padding-bottom: 0.5rem;
    scrollbar-width: thin;
    scrollbar-color: #C62828 #1A1A1A;
  }
`;

const Thumb = styled.button`
  position: relative;
  border: 2px solid ${p => p.$active ? theme.colors.primary : theme.colors.border};
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  background: ${theme.colors.background};
  padding: 0;
  transition: border-color 0.2s, transform 0.2s;
  aspect-ratio: 9/6;
  &:hover { border-color: rgba(198,40,40,0.5); transform: translateY(-2px); }
`;

const ThumbVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

const ThumbOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: background 0.2s;
  ${Thumb}:hover & { background: rgba(198,40,40,0.4); }
`;

const ThumbLabel = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.4rem 0.5rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  font-family: ${theme.fonts.body};
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  text-align: left;
`;

const VideoGallery = () => {
  const [active, setActive] = useState(0);

  return (
    <Section id="videos">
      <Inner>
        <Header>
          <Eyebrow>En acción</Eyebrow>
          <Title>Videos de Instalación</Title>
          <Divider />
        </Header>

        <FeaturedVideo
          key={videos[active].src}
          src={videos[active].src}
          controls
          autoPlay
          muted
          playsInline
        />

        <Grid>
          {videos.map((v, i) => (
            <Thumb key={v.id} $active={i === active} onClick={() => setActive(i)}>
              <ThumbVideo src={v.src} muted playsInline preload="metadata" />
              <ThumbOverlay>
                <FaPlay size={14} />
              </ThumbOverlay>
              <ThumbLabel>{v.label}</ThumbLabel>
            </Thumb>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
};

export default VideoGallery;
