'use client';

import React from 'react';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/51995845629" // Reemplaza con tu número en formato internacional sin +
      className="btn whatsapp-btn rounded-circle shadow-lg"
      style={{
        position: 'fixed',
        bottom: '8px',
        right: '8px',
        zIndex: 9999,
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
      }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsappButton;
