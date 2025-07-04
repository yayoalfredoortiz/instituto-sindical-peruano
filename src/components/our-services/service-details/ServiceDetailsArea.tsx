'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ServiceSidebar from './ServiceSidebar';
import serviceImg from '@/assets/img/others/appointment.jpg';
import { useBusinessServiceStore } from '@/zustand/stores/business-service.store';
import Loading from '@/components/common/Loading';

interface Props {
  serviceId: string;
}

const ServiceDetailsArea = ({ serviceId }: Props) => {
  const getById = useBusinessServiceStore((s) => s.getById);
  const item = useBusinessServiceStore((s) => s.item);

  useEffect(() => {
    if (serviceId) {
      getById(Number(serviceId));
    }
  }, [serviceId, getById]);

  if (!item) return <Loading />;

  return (
    <section className="section-py-120 bg-light bg-white">
      <div className="container">
        <div className="row">
          {/* Contenido principal */}
          <div className="col-xl-9 col-lg-8">
            <div className="blog__details-wrapper">
              <div className="blog__details-thumb mb-4">
                <Image src={serviceImg} alt={item.service_name} />
                {/* <Image src={item.image ?? serviceImg} alt={item.service_name} width={800} height={400} /> */}
              </div>
              <div className="blog__details-content">
                <h3 className="title">{item.service_name}</h3>
                <p>{item.service_description}</p>

                {item.includes && item.includes.length > 0 && (
                  <div className="blog__details-content-inner mt-4">
                    <h4 className="inner-title">¿Qué incluye este servicio?</h4>
                    <ul className="about__info-list list-wrap">
                      {item.includes.map((include) => (
                        <li className="about__info-list-item" key={include.id}>
                          <i className="flaticon-angle-right"></i>
                          <p className="content">{include.si_title}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p>
                  Nuestro compromiso es brindarte transparencia, ética profesional y resultados sólidos en cada caso que tomamos.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <ServiceSidebar />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsArea;
