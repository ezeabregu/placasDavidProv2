import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";
import { FaWhatsapp, FaChevronDown } from "react-icons/fa";

const BASE = "https://goldenrod-ant-802933.hostingersite.com";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;
const expandLine = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;
const bobble = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
`;

const HeroContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("${BASE}/img/fotos/foto-3.jpg");
  background-size: cover;
  background-position: center 30%;
  transform: scale(1.04);
  transition: transform 8s ease;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(10,10,10,0.88) 0%,
    rgba(10,10,10,0.65) 55%,
    rgba(10,10,10,0.25) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const HeroEyebrow = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  animation: ${fadeUp} 0.8s 0.1s ease both;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.header};
  font-size: clamp(2rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 1.08;
  color: ${theme.colors.text};
  margin: 0;
  max-width: 700px;
  animation: ${fadeUp} 0.8s 0.25s ease both;

  span { color: ${theme.colors.primary}; }
`;

const HeroAccent = styled.div`
  width: 64px;
  height: 3px;
  background: ${theme.colors.primary};
  transform-origin: left;
  animation: ${expandLine} 0.6s 0.5s ease both;
`;

const HeroSubtitle = styled.p`
  font-family: ${theme.fonts.body};
  font-size: clamp(0.9rem, 1.8vw, 1.15rem);
  font-weight: 300;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};
  max-width: 520px;
  margin: 0;
  animation: ${fadeUp} 0.8s 0.4s ease both;
`;

const HeroBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  animation: ${fadeUp} 0.8s 0.5s ease both;

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  background: rgba(198,40,40,0.12);
  border: 1px solid rgba(198,40,40,0.3);
  color: ${theme.colors.textSecondary};
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  border-radius: 2px;

  &::before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.68rem;
    padding: 0.28rem 0.55rem;
  }
`;

const HeroCTAs = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.8s 0.6s ease both;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const CTAPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 2rem;
  background: ${theme.colors.primary};
  color: white;
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 3px;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(198,40,40,0.35);

  &:hover {
    background: #EF5350;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(198,40,40,0.5);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

const CTASecondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 2rem;
  background: transparent;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(245,240,235,0.25);
  border-radius: 3px;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(245,240,235,0.6);
    background: rgba(245,240,235,0.06);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.9rem;
  }
`;

const ScrollHint = styled.a`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(168,159,150,0.6);
  font-family: ${theme.fonts.body};
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  animation: ${bobble} 2.5s ease infinite;
  transition: color 0.2s;

  &:hover { color: ${theme.colors.primary}; }
`;

const YearsChip = styled.div`
  position: absolute;
  right: 3rem;
  bottom: 6rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  animation: ${fadeUp} 0.8s 0.7s ease both;

  @media (max-width: 900px) { display: none; }
`;

const YearsNumber = styled.span`
  font-family: ${theme.fonts.header};
  font-size: 4rem;
  font-weight: 900;
  color: ${theme.colors.primary};
  line-height: 1;
`;

const YearsLabel = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.textSecondary};
  text-align: center;
`;

const Hero = () => (
  <HeroContainer id="inicio">
    <HeroBg />
    <HeroOverlay />
    <HeroContent>
      <HeroEyebrow>Más de 15 años de experiencia</HeroEyebrow>
      <HeroTitle>
        Eliminamos la humedad<br />
        de forma <span>definitiva</span>
      </HeroTitle>
      <HeroAccent />
      <HeroSubtitle>
        Fabricación, venta e instalación de placas antihumedad y cielorrasos decorativos.
        Sin romper paredes, sin obras. Resultado permanente.
      </HeroSubtitle>
      <HeroBadges>
        {["Presupuesto sin cargo", "Instalación profesional", "Materiales certificados", "Asesoramiento técnico"].map(b => (
          <Badge key={b}>{b}</Badge>
        ))}
      </HeroBadges>
      <HeroCTAs>
        <CTAPrimary href="https://wa.me/5491131581752" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={16} /> Solicitar presupuesto
        </CTAPrimary>
        <CTASecondary href="#services">
          Ver productos
        </CTASecondary>
      </HeroCTAs>
    </HeroContent>

    <YearsChip>
      <YearsNumber>15+</YearsNumber>
      <YearsLabel>años<br />de experiencia</YearsLabel>
    </YearsChip>

    <ScrollHint href="#about">
      <FaChevronDown size={14} />
      Ver más
    </ScrollHint>
  </HeroContainer>
);

export default Hero;
