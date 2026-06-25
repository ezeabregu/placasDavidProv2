import { FooterContainer } from "./footerStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        © {new Date().getFullYear()} Placas David. Todos los derechos
        reservados.
      </span>
      <span>
        <span>
          Desarrollado por{" "}
          <a href="https://ezze.ar" target="_blank" rel="noopener noreferrer">
            EzzE
          </a>
        </span>
      </span>
    </FooterContainer>
  );
};

export default Footer;
