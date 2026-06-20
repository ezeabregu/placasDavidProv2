import styled from "styled-components";
import { theme } from "../styles/theme";
import { FaStore, FaTools, FaComments } from "react-icons/fa";

const BASE = "https://goldenrod-ant-802933.hostingersite.com";

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
  margin-bottom: 4rem;
`;

const Eyebrow = styled.span`
  display: block;
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.header};
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0 0 1rem;
`;

const Divider = styled.div`
  width: 48px;
  height: 2px;
  background: ${theme.colors.primary};
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const Card = styled.div`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  &:hover {
    border-color: rgba(198,40,40,0.4);
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
  ${Card}:hover & { transform: scale(1.04); }
`;

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CardIcon = styled.div`
  color: ${theme.colors.primary};
  display: flex;
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.header};
  font-size: 1.2rem;
  font-weight: 600;
  color: ${theme.colors.text};
  margin: 0;
`;

const CardDesc = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.9rem;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};
  margin: 0;
`;

const CardLink = styled.a`
  align-self: flex-start;
  font-family: ${theme.fonts.body};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  text-decoration: none;
  border-bottom: 1px solid rgba(198,40,40,0.3);
  padding-bottom: 1px;
  transition: border-color 0.2s, color 0.2s;
  &:hover { color: #EF5350; border-color: #EF5350; }
`;

const services = [
  {
    icon: <FaStore size={20} />,
    img: `${BASE}/img/fotos/venta-placas-1.jpeg`,
    title: "Venta de Placas",
    desc: "Comercializamos placas antihumedad resistentes, decorativas y de alta calidad, ideales para combatir la humedad y mejorar la estética de cualquier ambiente.",
    link: "#services",
    linkText: "Ver catálogo",
  },
  {
    icon: <FaTools size={20} />,
    img: `${BASE}/img/fotos/foto-1.jpg`,
    title: "Instalación Profesional",
    desc: "Realizamos la colocación con terminaciones prolijas y duraderas para garantizar el mejor resultado en cada proyecto. Rápido, limpio, sin obras.",
    link: "https://wa.me/5491131581752",
    linkText: "Solicitar instalación",
  },
  {
    icon: <FaComments size={20} />,
    img: `${BASE}/img/fotos/foto-4.jpg`,
    title: "Asesoramiento Técnico",
    desc: "Analizamos cada caso de humedad y te ayudamos a elegir la mejor solución según las características de tu vivienda, comercio o proyecto.",
    link: "https://wa.me/5491131581752",
    linkText: "Consultar ahora",
  },
];

const Services = () => (
  <Section id="servicios">
    <Inner>
      <Header>
        <Eyebrow>Lo que hacemos</Eyebrow>
        <Title>Nuestras Soluciones</Title>
        <Divider />
      </Header>
      <Grid>
        {services.map((s) => (
          <Card key={s.title}>
            <CardImg src={s.img} alt={s.title} loading="lazy" />
            <CardBody>
              <CardIcon>{s.icon}</CardIcon>
              <CardTitle>{s.title}</CardTitle>
              <CardDesc>{s.desc}</CardDesc>
              <CardLink href={s.link} target={s.link.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {s.linkText} →
              </CardLink>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default Services;
