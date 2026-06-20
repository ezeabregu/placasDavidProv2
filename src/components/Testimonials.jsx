import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "./data/Productos";

const BASE = "https://goldenrod-ant-802933.hostingersite.com";

const Section = styled.section`
  background: ${theme.colors.background};
  padding: 7rem 3rem;
  @media (max-width: 768px) { padding: 4rem 1.5rem; }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Eyebrow = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

const Title = styled.h2`
  font-family: ${theme.fonts.header};
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0;
`;

const Divider = styled.div`
  width: 48px;
  height: 2px;
  background: ${theme.colors.primary};
`;

const FeaturedImg = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 8px;
  filter: grayscale(20%);

  @media (max-width: 600px) {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;

const Card = styled.div`
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: border-color 0.25s;
  &:hover { border-color: rgba(198,40,40,0.3); }
`;

const QuoteIcon = styled.div`
  color: ${theme.colors.primary};
  opacity: 0.6;
`;

const Stars = styled.div`
  display: flex;
  gap: 3px;
  color: #F59E0B;
  font-size: 0.75rem;
`;

const Quote = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${theme.colors.textSecondary};
  margin: 0;
  font-style: italic;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 0.5rem;
  border-top: 1px solid ${theme.colors.border};
`;

const AuthorAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${theme.fonts.header};
  font-weight: 700;
  color: white;
  font-size: 1rem;
  flex-shrink: 0;
`;

const AuthorName = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${theme.colors.text};
`;

const AuthorRole = styled.span`
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  color: ${theme.colors.textSecondary};
`;

const Testimonials = () => (
  <Section id="testimonios">
    <Inner>
      <Header>
        <HeaderLeft>
          <Eyebrow>Testimonios</Eyebrow>
          <Title>La opinión de nuestros clientes</Title>
          <Divider />
        </HeaderLeft>
        <FeaturedImg src={`${BASE}/img/fotos/colocacion-placas-1.jpeg`} alt="Instalación de placas David" loading="lazy" />
      </Header>

      <Grid>
        {testimonials.map((t) => (
          <Card key={t.id}>
            <QuoteIcon><FaQuoteLeft size={18} /></QuoteIcon>
            <Stars>{[...Array(5)].map((_, i) => <FaStar key={i} />)}</Stars>
            <Quote>"{t.text}"</Quote>
            <Author>
              <AuthorAvatar>{t.name[0]}</AuthorAvatar>
              <div>
                <AuthorName>{t.name}</AuthorName>
                <br />
                <AuthorRole>Cliente verificado</AuthorRole>
              </div>
            </Author>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default Testimonials;
