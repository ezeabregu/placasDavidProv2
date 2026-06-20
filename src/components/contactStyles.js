import styled from "styled-components";
import { theme } from "../styles/theme";

export const ContactSection = styled.section`
  background: ${theme.colors.surface};
  padding: 7rem 3rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const ContactInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactEyebrow = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

export const ContactTitle = styled.h2`
  font-family: ${theme.fonts.header};
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.15;
`;

export const ContactDivider = styled.div`
  width: 48px;
  height: 2px;
  background: ${theme.colors.primary};
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  color: ${theme.colors.textSecondary};
  line-height: 1.5;

  svg {
    color: ${theme.colors.primary};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: ${theme.colors.border};
    color: ${theme.colors.textSecondary};
    font-size: 1.3rem;
    border-radius: 6px;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;

    &:hover {
      background: ${theme.colors.primary};
      color: white;
      transform: translateY(-2px);
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${theme.colors.border};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(30%) contrast(1.05);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const WhatsAppCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 2rem;
  background: #25D366;
  color: white;
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.2s, transform 0.2s;
  width: fit-content;

  &:hover {
    background: #1EBE5A;
    transform: translateY(-2px);
  }
`;
