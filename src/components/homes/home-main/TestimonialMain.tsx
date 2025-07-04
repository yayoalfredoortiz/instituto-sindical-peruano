'use client';

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useReviewStore } from '@/zustand/stores/review.store';

const DEFAULT_AVATAR = '/assets/img/instructor/instructor04.png';

const TestimonialMain = () => {
    const data = useReviewStore((state) => state.data); 
    const loading = useReviewStore((state) => state.loading); 

    return (
        <div className="container-fluid py-5">
            <div className="testimonial-main container py-5">
                <div className="text-center mb-4">
                    <h2 className="fw-bold">Testimonios</h2>
                    <div className='small-border'></div>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >
                    {loading && (
                        <div className="testimonial-text bg-primary text-light rounded-2 p-5 mb-4">
                            Cargando testimonios...
                        </div>
                    )}

                    {data.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="testimonial-item pb-5 instructor__content">
                                <div className="testimonial-text position-relative bg-primary text-light rounded-2 p-5 mb-4">
                                    {review.comment}
                                </div>
                                <div className="d-flex align-items-center pt-3">
                                    <img
                                        className="img-fluid rounded-circle"
                                        src={review.user.imageUrl || DEFAULT_AVATAR}
                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                        alt={review.user.name || 'Usuario'}
                                    />
                                    <div className="pl-4">
                                        <h5 className='title'>{review.user.name || 'Anónimo'}</h5>
                                        <p className="m-0 designation">{review.user.roles?.[0]?.name || 'Cliente'}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TestimonialMain;
