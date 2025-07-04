'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Link from 'next/link';
import InjectableSvg from '@/hooks/InjectableSvg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { useBannerStore } from '@/zustand/stores/banner.store';

const fallbackImages = [
   '/assets/img/slider/slider_bg01.webp',
   '/assets/img/slider/slider_law_bg01.jpg',
   '/assets/img/slider/slider_law_bg02.jpg',
   '/assets/img/slider/slider_bg02.webp',
];

const setting = {
   spaceBetween: 0,
   effect: 'fade',
   loop: true,
   autoplay: {
      delay: 8000,
   },
   pagination: {
      clickable: true,
   },
};

const Banner = () => {
   const swiperRef = useRef<SwiperClass | null>(null);

   const data = useBannerStore((state) => state.data); 

   const handleFocus = () => {
      swiperRef.current?.autoplay?.stop();
   };

   const handleBlur = () => {
      swiperRef.current?.autoplay?.start();
   };

   return (
      <section className="slider__area banner__section">
         <Swiper
            {...setting}
            modules={[EffectFade, Autoplay, Pagination]}
            className="slider__active"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
         >
            {(data.length > 0 ? data : fallbackImages.map((img, i) => ({
               id: i,
               title: 'Título de ejemplo',
               description: 'Descripción de ejemplo del banner.',
               pre_text_highlight: 'Texto',
               text_highlight: 'Destacado',
               post_text_highlight: 'final',
               has_search: 0,
               text_search_action: 'Buscar',
               enable_action: true,
               text_action: 'Conocer más',
               url_action: '/appointment',
               type: 1,
               image: { url: img },
            }))).map((item, idx) => (
               <SwiperSlide key={item.id}>
                  <div
                     className="slider__bg"
                     style={{
                        backgroundImage: `url(${item.image?.url || fallbackImages[idx % fallbackImages.length]})`,
                     }}
                  >
                     <div className="container">
                        <div className="row">
                           <div className="col-xl-6 col-lg-7">
                              <div className="slider__content">
                                 <span className="sub-title">{item.title}</span>
                                 <h2 className="title">
                                    {item.pre_text_highlight}{' '}
                                    <span className="underline-highlight">
                                       {item.text_highlight}
                                       {/* <InjectableSvg
                                          src="/assets/img/slider/slider_title-shape.svg"
                                          alt=""
                                          className="injectable"
                                       /> */}
                                    </span>{' '}
                                    {item.post_text_highlight}
                                 </h2>
                                 <p>{item.description}</p>

                                 {/* Search */}
                                 {item.has_search&& (
                                    <div className="slider__search">
                                       <form
                                          onSubmit={(e) => e.preventDefault()}
                                          className="slider__search-form"
                                       >
                                          <input
                                             type="text"
                                             placeholder="Buscar aquí . . ."
                                             onFocus={handleFocus}
                                             onBlur={handleBlur}
                                          />
                                          <button type="submit">
                                             {item.text_search_action || 'Buscar'}
                                          </button>
                                       </form>
                                    </div>
                                 )}

                                 {/* Action Button */}
                                 {item.enable_action && item.url_action && (
                                    <Link href={item.url_action} className="btn">
                                       {item.text_action || 'Ver más'}
                                    </Link>
                                 )}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default Banner;
