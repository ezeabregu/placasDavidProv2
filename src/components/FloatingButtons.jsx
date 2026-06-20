import { useState, useEffect } from "react";
import { theme } from "../styles/theme";
import { FloatingContainer, FloatingButton } from "./floatingbuttonsStyles";
import { FaChevronUp, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FloatingContainer>
      {showScrollTop && (
        <FloatingButton
          as="button"
          onClick={scrollToTop}
          bg={theme.colors.primary}
          hover={theme.colors.primary}
          size="big"
          aria-label="Volver arriba"
        >
          <FaChevronUp size={28} />
        </FloatingButton>
      )}

      <FloatingButton
        href="https://wa.me/5491131581752"
        target="_blank"
        rel="noopener noreferrer"
        bg="#25D366"
        hover="#1EBE5A"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} />
      </FloatingButton>
    </FloatingContainer>
  );
};

export default FloatingButtons;
