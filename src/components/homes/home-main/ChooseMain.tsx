'use client';

import { useWhyChooseUsStore } from '@/zustand/stores/why-choose-us.store';
import { useEffect } from 'react';

const ChooseMain = () => {
  const getAll = useWhyChooseUsStore((state) => state.getAll);
  const loading = useWhyChooseUsStore((state) => state.loading);
  const data = useWhyChooseUsStore((state) => state.data);
  const loaded = useWhyChooseUsStore((state) => state.loaded);

  useEffect(() => {
    if (!loaded) getAll(1, 20);
  }, []);

  const sortedData = [...data].sort((a, b) => a.order - b.order);

  return (
    <section className="py-5 bg-light">
      <div className="container pb-5">
        <div className="row">
          {/* Imagen a la izquierda */}
          <div className="col-lg-6" style={{ minHeight: '500px' }}>
            <div className="position-relative h-100 rounded-3 overflow-hidden">
              <img
                src="/assets/img/others/feature.jpg"
                alt="Feature"
                className="position-absolute w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Texto a la derecha */}
          <div className="col-lg-6 pt-5 pb-lg-5">
            <div className="bg-white rounded-3 p-4 p-lg-5 shadow overlap-md-left">
              <div className="section__title mb-20">
                <span className="sub-title">Nuestras características</span>
                <h2 className="title bold">¿Por qué escogernos a nosotros?</h2>
              </div>

              {loading && <p>Cargando características...</p>}

              {!loading && sortedData.map((item, index) => (
                <div className="d-flex align-items-start mb-4" key={item.id}>
                  <div>
                    <div
                      className="d-flex bg-primary rounded-circle align-items-center justify-content-center"
                      style={{ width: '50px', aspectRatio: '1', padding: '8px' }}
                    >
                      <h5 className="mb-0 text-secondary">{String(index + 1).padStart(2, '0')}</h5>
                    </div>
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary mb-1">{item.wcu_title}</h5>
                    <p className="mb-0">{item.wcu_description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseMain;
