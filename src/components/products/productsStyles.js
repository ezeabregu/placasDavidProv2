import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ProductsSection = styled.section`
  background: ${theme.colors.surface};
  padding: 7rem 3rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export const ProductsInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionEyebrow = styled.span`
  display: block;
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  margin-bottom: 0.75rem;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.header};
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: ${theme.colors.text};
  text-align: center;
  margin: 0 0 1rem;
`;

export const SectionDivider = styled.div`
  width: 48px;
  height: 2px;
  background: ${theme.colors.primary};
  margin: 0 auto 3.5rem;
`;

export const SubTitle = styled.h3`
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.textSecondary};
  margin: 0 0 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${theme.colors.border};
`;

export const ProductsContainter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductsCard = styled.div`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  cursor: default;

  &:hover {
    border-color: rgba(198, 40, 40, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: 600px) {
    img { height: 140px; }
  }
`;

export const CardBody = styled.div`
  padding: 1rem 1.25rem 1.25rem;
`;

export const CardTitle = styled.h4`
  font-family: ${theme.fonts.header};
  font-size: 1.05rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0 0 0.25rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const CardSize = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  color: ${theme.colors.primary};
  font-weight: 500;
  letter-spacing: 0.04em;
  margin: 0;
`;
