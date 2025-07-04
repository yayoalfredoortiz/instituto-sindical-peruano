'use client';

import React from 'react';
import Link from 'next/link';

const FormatDetailsArea = () => {
  return (
    <section className="section-py-120 bg-light">
      <div className="container">
        <div className="row">
          {/* Contenido principal */}
          <div className="col-lg-8">
            <h2 className="section__title mb-3 text-primary">Contrato de Arrendamiento</h2>
            <p className="section__subtitle mb-4">
              Protege tu propiedad con un contrato de arrendamiento legalmente válido y personalizado para tus necesidades.
            </p>

            {/* Beneficios / características */}
            <h4 className="mb-3">¿Por qué usar este contrato?</h4>
            <ul className="list-group mb-4">
              <li className="list-group-item">Define claramente los derechos y obligaciones del arrendador y arrendatario.</li>
              <li className="list-group-item">Evita malentendidos y conflictos legales.</li>
              <li className="list-group-item">Incluye cláusulas importantes como duración, renta, depósito y más.</li>
            </ul>

            {/* Proceso para completar el documento */}
            <h4 className="mb-3">¿Cómo funciona?</h4>
            <ol className="list-group list-group-numbered mb-4">
              <li className="list-group-item">Responde algunas preguntas rápidas.</li>
              <li className="list-group-item">Genera el documento automáticamente según tus respuestas.</li>
              <li className="list-group-item">Descarga el contrato en PDF o edítalo online.</li>
            </ol>

            {/* CTA */}
            <div className="text-center mt-5">
              <Link href="/crear/arrendamiento" className="btn btn-primary btn-lg">
                Crear Contrato de Arrendamiento
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="card shadow-sm border-0 p-4">
              <h5 className="mb-3">Detalles del Formato</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Tipo: Contrato Legal</li>
                <li className="list-group-item">Formato: PDF / Word</li>
                <li className="list-group-item">Duración: Personalizable</li>
                <li className="list-group-item">Ámbito: Residencial</li>
              </ul>
              <div className="mt-4 text-center">
                <Link href="/ejemplo/arrendamiento.pdf" className="btn btn-outline-secondary w-100" target="_blank">
                  Ver Ejemplo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatDetailsArea;
