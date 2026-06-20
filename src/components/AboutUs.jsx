import {
  AboutContainer,
  AboutTextBlock,
  AboutEyebrow,
  AboutTitle,
  AboutText,
  ImageItem,
  ListStyled,
  AboutImageWrapper,
} from "./aboutusStyles";
import { GiCheckMark } from "react-icons/gi";

const features = [
  "Acústicas",
  "Anti Hongos",
  "Ignífugas",
  "Muy resistentes",
  "Decorativas",
  "Aislante térmico",
  "Ecológicas",
  "Gran absorción de humedad",
  "Iluminan más tus ambientes",
  "Ideales para placares",
];

const AboutUs = () => {
  return (
    <section id="about" style={{ background: "#0F0F0F" }}>
      <AboutContainer>
        <AboutTextBlock>
          <AboutEyebrow>Sobre nosotros</AboutEyebrow>
          <AboutTitle>La solución definitiva a la humedad</AboutTitle>
          <AboutText>
            Nuestras placas decoran tus paredes y actúan como paneles evaporadores
            de humedad, que en forma progresiva y constante eliminan manchas negras,
            pinturas descascaradas, hongos, malos olores y salitre.
          </AboutText>
          <AboutText>
            Fabricadas con yeso cerámico de primera calidad y secadas a horno.
            Sin romper paredes, sin obras. Resultado definitivo.
          </AboutText>
          <ListStyled>
            {features.map((f) => (
              <li key={f}>
                <GiCheckMark size={12} />
                {f}
              </li>
            ))}
          </ListStyled>
        </AboutTextBlock>
        <AboutImageWrapper>
          <ImageItem src="https://goldenrod-ant-802933.hostingersite.com/img/fotos/foto-2.jpg" alt="Instalación de placas David" />
        </AboutImageWrapper>
      </AboutContainer>
    </section>
  );
};

export default AboutUs;
