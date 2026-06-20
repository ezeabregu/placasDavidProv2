import {
  ContactSection,
  ContactInner,
  ContactInfo,
  ContactEyebrow,
  ContactTitle,
  ContactDivider,
  InfoItem,
  SocialIcons,
  MapContainer,
  WhatsAppCTA,
} from "./contactStyles";
import { FaPhoneSquareAlt, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { PiMapPinLineFill } from "react-icons/pi";

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactInner>
        <ContactInfo>
          <ContactEyebrow>Contacto</ContactEyebrow>
          <ContactTitle>Hablemos de tu proyecto</ContactTitle>
          <ContactDivider />

          <InfoItem>
            <FaPhoneSquareAlt size={18} />
            +54 9 11 3158-1752
          </InfoItem>
          <InfoItem>
            <IoMail size={18} />
            alejandro.tonchuk2012@hotmail.com
          </InfoItem>
          <InfoItem>
            <PiMapPinLineFill size={18} />
            San Martín, Billinghurst, Provincia de Buenos Aires
          </InfoItem>

          <WhatsAppCTA
            href="https://wa.me/5491131581752"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={18} />
            Presupuesto sin cargo por WhatsApp
          </WhatsAppCTA>

          <SocialIcons>
            <a href="https://www.facebook.com/Placasdavid/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/placasdavid/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </SocialIcons>
        </ContactInfo>

        <MapContainer>
          <img src="/assets/contact.JPG" alt="Ubicación Placas David — San Martín, Buenos Aires" />
        </MapContainer>
      </ContactInner>
    </ContactSection>
  );
};

export default Contact;
