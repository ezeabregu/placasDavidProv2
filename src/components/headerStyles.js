import styled from "styled-components";
import { theme } from "../styles/theme";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: rgba(15, 15, 15, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(198, 40, 40, 0.25);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    gap: 0.5rem;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 768px) {
    gap: 0.1rem;
  }
`;

export const NavLink = styled.a`
  padding: 0.5rem 1rem;
  color: ${theme.colors.textSecondary};
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background: ${theme.colors.primary};
    transform: scaleX(0);
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${theme.colors.text};
    &::after { transform: scaleX(1); }
  }

  @media (max-width: 768px) {
    font-size: 0.65rem;
    padding: 0.4rem 0.5rem;
    letter-spacing: 0.04em;
  }
`;

export const ContactButton = styled.a`
  padding: 0.5rem 1.25rem;
  background: ${theme.colors.primary};
  color: white;
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.2s ease, transform 0.2s ease;
  margin-left: 0.5rem;

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  height: 40px;
  width: auto;
  filter: brightness(1.1);

  @media (max-width: 768px) {
    height: 28px;
  }
`;
