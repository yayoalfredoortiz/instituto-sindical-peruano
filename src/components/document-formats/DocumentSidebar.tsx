'use client';

import React from 'react';

const DocumentSidebar = () => {
  return (
    <div className="col-xl-3 col-lg-4 bg-white pt-4">
      <aside className="blog-sidebar">
        {/* Buscador */}
        {/* <div className="blog-widget widget_search">
          <div className="sidebar-search-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Buscar formatos legales" />
              <button><i className="flaticon-search"></i></button>
            </form>
          </div>
        </div> */}

        {/* Categorías */}
        <div className="blog-widget widget_categories">
          <h4 className="widget-title">Categorías</h4>
          <ul className="list-wrap">
            <li><a href="#">Contratos <span>(4)</span></a></li>
            <li><a href="#">Poderes Legales <span>(2)</span></a></li>
            <li><a href="#">Confidencialidad <span>(1)</span></a></li>
            <li><a href="#">Acuerdos de Servicios <span>(3)</span></a></li>
            <li><a href="#">Otros <span>(2)</span></a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default DocumentSidebar;
