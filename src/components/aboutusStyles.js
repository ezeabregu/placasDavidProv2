import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";

export const AboutContainer = styled.section`
  padding: 7rem 3rem;
  background-color: ${theme.colors.background};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 4rem 1.5rem;
  }
`;

export const AboutTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AboutEyebrow = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

export const AboutTitle = styled.h2`
  font-family: ${theme.fonts.header};
  color: ${theme.colors.text};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  margin: 0;
`;

export const AboutText = styled.p`
  font-family: ${theme.fonts.body};
  color: ${theme.colors.textSecondary};
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0;
`;

export const ListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6rem 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: ${theme.fonts.body};
    font-size: 0.9rem;
    color: ${theme.colors.textSecondary};

    svg {
      color: ${theme.colors.primary};
      flex-shrink: 0;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const AboutImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -16px;
    left: -16px;
    right: 16px;
    bottom: 16px;
    border: 2px solid ${theme.colors.primary};
    border-radius: 6px;
    opacity: 0.4;
    pointer-events: none;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const ImageItem = styled.img`
  width: 100%;
  border-radius: 6px;
  display: block;
  position: relative;
  z-index: 1;
`;
