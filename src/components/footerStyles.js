import styled from "styled-components";
import { theme } from "../styles/theme";

export const FooterContainer = styled.footer`
  background: #080808;
  border-top: 1px solid ${theme.colors.border};
  padding: 2rem 3rem;
  /* Espacio para el ticker banner fijo de 44px */
  margin-bottom: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  color: ${theme.colors.textSecondary};

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }
`;
