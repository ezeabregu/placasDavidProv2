import { FooterContainer } from "./footerStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        © {new Date().getFullYear()} Placas David. Todos los derechos
        reservados.
      </span>
      <span>
        Desarrollado por <a href="mailto:">EzzE</a>
      </span>
    </FooterContainer>
  );
};

export default Footer;
