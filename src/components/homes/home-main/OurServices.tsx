'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import BtnArrow from '@/svg/BtnArrow'; 
import { useBusinessServiceStore } from '@/zustand/stores/business-service.store';

const fallbackImages = [
  'https://plus.unsplash.com/premium_photo-1694088516834-6fa55faab454',
  'https://plus.unsplash.com/premium_photo-1667520464141-cf9d86c1fbbd',
  'https://plus.unsplash.com/premium_photo-1679547202671-f9dbbf466db4',
  'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1',
  'https://plus.unsplash.com/premium_photo-1681589453544-72d21960816b',
];

const OurServices = () => {
  const router = useRouter();

  const data = useBusinessServiceStore((state) => state.data);
  const loading = useBusinessServiceStore((state) => state.loading); 

  return (
    <div className="container py-5 mb-5">
      <div className="row align-items-center">
        {/* Texto lateral izquierdo */}
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="section__title mb-20">
            <span className="sub-title">Acerca de Nuestro Servicio</span>
            <h2 className="title bold">Brindamos servicios legales confiables y efectivos</h2>
          </div>
          <p className="mb-4 text-muted">
            Contamos con una amplia gama de servicios especializados para atender tus necesidades legales con compromiso y experiencia.
          </p>
          <div className="tg-button-wrap" id="case-tranking">
            <Link href="/appointment" className="btn arrow-btn">
              Agendar una Cita <BtnArrow />
            </Link>
          </div>
        </div>

        {/* Carrusel */}
        <div className="col-lg-8 col-md-12 position-relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {(loading ? fallbackImages.map((img, i) => ({
              id: i,
              service_name: `Servicio ${i + 1}`,
              service_description: 'Cargando descripción...',
              image: { url: img },
            })) : data).map((service, idx) => (
              <SwiperSlide key={service.id ?? idx} className="pb-5">
                <div
                  className="case-item"
                  onClick={() => router.push(`/business-services/${service.id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="img-wrapper">
                    <img
                      src={service.image?.url || fallbackImages[idx % fallbackImages.length]}
                      alt={service.service_name}
                    />
                  </div>
                  <div className="case-content">
                    <div className="case-title">{service.service_name}</div>
                    <div className="arrow">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
