import styled from "styled-components";

export const FloatingContainer = styled.div`
  position: fixed;
  /* 44px ticker + 1rem gap */
  bottom: calc(44px + 1rem);
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  z-index: 300;

  @media (max-width: 600px) {
    right: 1rem;
    bottom: calc(44px + 0.75rem);
  }
`;

export const FloatingButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${(p) => p.bg || "#C62828"};
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-3px) scale(1.06);
    box-shadow: 0 8px 24px rgba(0,0,0,0.5);
    background: ${(p) => p.hover || "#EF5350"};
  }

  @media (max-width: 600px) {
    width: 46px;
    height: 46px;
  }
`;
