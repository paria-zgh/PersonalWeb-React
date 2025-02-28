import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

 export const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a
        href="https://wa.me/+98351393144" // ش=
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
      <a href="mailto:your-email@example.com">
        <FaEnvelope />
      </a>
    </footer>
  );
};

