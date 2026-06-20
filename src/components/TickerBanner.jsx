import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";
import { FaCircle } from "react-icons/fa";

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const BannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(15, 15, 15, 0.92);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(198, 40, 40, 0.3);
  height: 44px;
  display: flex;
  align-items: center;
  overflow: hidden;
  z-index: 9999;
`;

const BannerTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;
`;

const Item = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2.5rem;
  font-family: ${theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.colors.textSecondary};
  white-space: nowrap;

  svg {
    color: ${theme.colors.primary};
    font-size: 0.35rem;
  }
`;

export const TickerBanner = ({ announcements = [] }) => {
  const repeated = [...announcements, ...announcements, ...announcements, ...announcements];
  return (
    <BannerContainer>
      <BannerTrack>
        {repeated.map((text, i) => (
          <Item key={i}>
            <FaCircle />
            {text}
          </Item>
        ))}
      </BannerTrack>
    </BannerContainer>
  );
};
