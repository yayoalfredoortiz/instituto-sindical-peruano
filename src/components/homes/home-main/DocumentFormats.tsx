'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DocumentSidebar from '@/components/document-formats/DocumentSidebar';
import ReactPaginate from 'react-paginate';

const legalDocuments = [
  { title: 'Contrato de Arrendamiento', link: '/documentos/arrendamiento', category: 'Contratos' },
  { title: 'Carta Poder', link: '/documentos/carta-poder', category: 'Poderes Legales' },
  { title: 'Acuerdo de Confidencialidad (NDA)', link: '/documentos/nda', category: 'Confidencialidad' },
  { title: 'Contrato de Servicios', link: '/documentos/contrato-servicios', category: 'Acuerdos de Servicios' },
  { title: 'Contrato Laboral', link: '/documentos/contrato-laboral', category: 'Contratos' },
  { title: 'Convenio de Terminación', link: '/documentos/convenio-terminacion', category: 'Contratos' },
  { title: 'Contrato de Compraventa', link: '/documentos/compraventa', category: 'Contratos' },
  { title: 'Contrato de Prestamo', link: '/documentos/prestamo', category: 'Otros' },
];

const itemsPerPage = 6;

const DocumentFormats = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredDocuments = legalDocuments.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? doc.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredDocuments.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredDocuments.length / itemsPerPage);

  useEffect(() => {
    setItemOffset(0);
  }, [searchTerm, selectedCategory]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredDocuments.length;
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
          <div className="col-xl-9 col-lg-8">
            <div className="slider__search mb-4">
              <form onSubmit={(e) => e.preventDefault()} className="slider__search-form">
                <input
                  type="text"
                  placeholder="Buscar aquí . . ."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Buscar</button>
              </form>
            </div>

            <ul className="list-group">
              {currentItems.map((doc, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                  <div><i className="fa fa-file-alt text-primary me-2"></i>{doc.title}</div>
                  <Link href={doc.link} className="btn btn-sm btn-three">Ver Formato</Link>
                </li>
              ))}
              {currentItems.length === 0 && (
                <li className="list-group-item text-center">No se encontraron resultados.</li>
              )}
            </ul>

            {pageCount > 1 && (
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
            )}
          </div>

          <DocumentSidebar
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>
      </div>
    </section>
  );
};

export default DocumentFormats;
