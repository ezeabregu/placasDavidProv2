import styled from "styled-components";
import { theme } from "../styles/theme";

export const ImageGridContainer = styled.section`
  padding: 7rem 3rem;
  background-color: ${theme.colors.background};
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const GridHeader = styled.div`
  max-width: 600px;
  margin: 0 auto 3.5rem;
`;

export const AboutEyebrow = styled.span`
  display: block;
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  margin-bottom: 0.75rem;
`;

export const AboutTitle = styled.h2`
  font-family: ${theme.fonts.header};
  color: ${theme.colors.text};
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  margin: 0 0 1rem;
`;

export const SectionDivider = styled.div`
  width: 48px;
  height: 2px;
  background: ${theme.colors.primary};
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  columns: 5;
  column-gap: 0.75rem;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1100px) { columns: 3; }
  @media (max-width: 700px)  { columns: 2; }
`;

export const ImageItem = styled.img`
  width: 100%;
  margin-bottom: 0.75rem;
  border-radius: 6px;
  display: block;
  break-inside: avoid;
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease;
  filter: brightness(0.9);

  &:hover {
    transform: translateY(-3px) scale(1.015);
    box-shadow: 0 12px 32px rgba(0,0,0,0.6);
    filter: brightness(1.05);
  }
`;
