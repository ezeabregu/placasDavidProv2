import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { theme } from "../styles/theme";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

const BASE = "https://goldenrod-ant-802933.hostingersite.com";

/* ── Header bar ── */
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background: rgba(15, 15, 15, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(198, 40, 40, 0.25);
  position: sticky;
  top: 0;
  z-index: 500;

  @media (max-width: 768px) {
    padding: 0.85rem 1.25rem;
  }
`;

const LogoImage = styled.img`
  height: 38px;
  width: auto;

  @media (max-width: 768px) {
    height: 28px;
  }
`;

/* ── Desktop nav ── */
const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  padding: 0.5rem 0.9rem;
  color: ${theme.colors.textSecondary};
  font-family: ${theme.fonts.body};
  font-size: 0.825rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  position: relative;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0.9rem;
    right: 0.9rem;
    height: 1px;
    background: ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${theme.colors.text};
    &::after { transform: scaleX(1); }
  }
`;

const CTAButton = styled.a`
  padding: 0.5rem 1.25rem;
  background: ${theme.colors.primary};
  color: white;
  font-family: ${theme.fonts.body};
  font-size: 0.825rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  margin-left: 0.5rem;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: ${theme.colors.primaryLight};
    transform: translateY(-1px);
  }
`;

/* ── Hamburger button ── */
const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text};
  cursor: pointer;
  padding: 0.35rem;
  border-radius: 4px;
  transition: color 0.2s;
  line-height: 0;

  &:hover { color: ${theme.colors.primary}; }

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* ── Mobile drawer ── */
const slideIn = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
`;
const slideOut = keyframes`
  from { transform: translateX(0);    opacity: 1; }
  to   { transform: translateX(100%); opacity: 0; }
`;

const Overlay = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 600;
    backdrop-filter: blur(2px);
  }
`;

const Drawer = styled.nav`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(300px, 82vw);
    background: #111;
    border-left: 1px solid rgba(198,40,40,0.25);
    z-index: 700;
    padding: 1.5rem 1.5rem 2rem;
    gap: 0;
    animation: ${p => p.$open ? css`${slideIn} 0.28s ease both` : css`${slideOut} 0.22s ease both`};
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.textSecondary};
  cursor: pointer;
  padding: 0.25rem;
  line-height: 0;
  transition: color 0.2s;
  &:hover { color: ${theme.colors.primary}; }
`;

const DrawerLink = styled.a`
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid ${theme.colors.border};
  color: ${theme.colors.textSecondary};
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.2s, padding-left 0.2s;

  &:hover {
    color: ${theme.colors.text};
    padding-left: 0.5rem;
  }
`;

const DrawerCTA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 2rem;
  padding: 1rem;
  background: #25D366;
  color: white;
  font-family: ${theme.fonts.body};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.2s;

  &:hover { background: #1EBE5A; }
`;

const links = [
  { href: "#about",     label: "Nosotros" },
  { href: "#services",  label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#gallery",   label: "Trabajos" },
  { href: "#videos",    label: "Videos" },
  { href: "#contact",   label: "Contacto" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  // Cierra el drawer al cambiar de sección
  const close = () => setOpen(false);

  // Bloquea scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <HeaderContainer>
        <LogoImage
          src={`${BASE}/img/logo/logo.png`}
          alt="Placas David"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        {/* Desktop */}
        <DesktopNav>
          {links.map(l => <NavLink key={l.href} href={l.href}>{l.label}</NavLink>)}
          <CTAButton href="https://wa.me/5491131581752" target="_blank" rel="noopener noreferrer">
            Presupuesto
          </CTAButton>
        </DesktopNav>

        {/* Hamburger */}
        <HamburgerBtn onClick={() => setOpen(true)} aria-label="Abrir menú">
          <FaBars size={22} />
        </HamburgerBtn>
      </HeaderContainer>

      {/* Mobile drawer */}
      {open && <Overlay onClick={close} />}
      {open && (
        <Drawer $open={open}>
          <DrawerHeader>
            <LogoImage
              src={`${BASE}/img/logo/logo.png`}
              alt="Placas David"
              style={{ height: 28, filter: "brightness(0) invert(1)" }}
            />
            <CloseBtn onClick={close} aria-label="Cerrar menú">
              <FaTimes size={20} />
            </CloseBtn>
          </DrawerHeader>

          {links.map(l => (
            <DrawerLink key={l.href} href={l.href} onClick={close}>{l.label}</DrawerLink>
          ))}

          <DrawerCTA href="https://wa.me/5491131581752" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={18} /> Pedir presupuesto
          </DrawerCTA>
        </Drawer>
      )}
    </>
  );
};

export default Header;
