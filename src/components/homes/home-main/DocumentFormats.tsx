'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import DocumentSidebar from '@/components/document-formats/DocumentSidebar';
import ReactPaginate from 'react-paginate';

const legalDocuments = [
  { title: 'Contrato de Arrendamiento', link: '/documentos/arrendamiento' },
  { title: 'Carta Poder', link: '/documentos/carta-poder' },
  { title: 'Acuerdo de Confidencialidad (NDA)', link: '/documentos/nda' },
  { title: 'Contrato de Servicios', link: '/documentos/contrato-servicios' },
  { title: 'Contrato Laboral', link: '/documentos/contrato-laboral' },
  { title: 'Convenio de Terminación', link: '/documentos/convenio-terminacion' },
  { title: 'Contrato de Compraventa', link: '/documentos/compraventa' },
  { title: 'Contrato de Prestamo', link: '/documentos/prestamo' },
];

const itemsPerPage = 6;

const DocumentFormats = () => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = legalDocuments.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(legalDocuments.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % legalDocuments.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="singUp-area section-py-120 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section__title">Formatos de Documentos Legales</h2>
          <p className="section__subtitle">Accede a formatos legales personalizables y listos para usar</p>
        </div>
        <div className="row">
          {/* Contenido principal en formato lista */}
          <div className="col-xl-9 col-lg-8">
            <div className="slider__search mb-4">
              <form onSubmit={(e) => e.preventDefault()} className="slider__search-form">
                <input type="text" placeholder="Buscar aquí . . ." />
                <button type="submit">Buscar</button>
              </form>
            </div>

            <ul className="list-group">
              {currentItems.map((doc, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                  <div><i className="fa fa-file-alt text-primary me-2"></i>{doc.title}</div>
                  <Link href={'/document-format-details'} className="btn btn-sm btn-three">Ver Formato</Link>
                </li>
              ))}
            </ul>

            <nav className="pagination__wrap mt-25">
                <ReactPaginate
                  breakLabel="..."
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={pageCount}
                  renderOnZeroPageCount={null}
                  className="list-wrap"
                />
              </nav>
          </div>

          {/* Sidebar */}
          <DocumentSidebar />
        </div>
      </div>
    </section>
  );
};

export default DocumentFormats;
