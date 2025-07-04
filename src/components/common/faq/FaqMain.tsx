'use client';

import { useFaqStore } from '@/zustand/stores/faq.store'; 

const FaqMain = () => {
  const data = useFaqStore((state) => state.data);
  const loading = useFaqStore((state) => state.loading);  

  return (
    <>
      <div className="section__title mb-15">
        <span className="sub-title">Faq’s</span>
        <h2 className="title bold">¿Tienes dudas legales?</h2>
      </div>
      <p>
        Aquí respondemos a las consultas más comunes que recibimos de nuestros clientes.
        Si no encuentras la información que buscas, no dudes en contactarnos: estamos aquí para ayudarte.
      </p>

      <div className="faq__wrap faq__wrap-two">
        <div className="accordion" id="accordionExample">
          {loading ? (
            <p>Cargando preguntas frecuentes...</p>
          ) : (
            data.map((item, index) => (
              <div key={item.id} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item.id}`}
                    aria-expanded={index === 0 ? 'true' : 'false'}
                    aria-controls={`collapse${item.id}`}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse${item.id}`}
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default FaqMain;
