'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import BtnArrow from "@/svg/BtnArrow";

import choose_img1 from "@/assets/img/others/feature.jpg";
import choose_img2 from "@/assets/img/others/appointment.jpg";
import choose_img3 from "@/assets/img/others/about.jpg";
import choose_img4 from "@/assets/img/others/h7_choose_shape01.svg";
import choose_img5 from "@/assets/img/others/h7_choose_shape02.svg";
import choose_img6 from "@/assets/img/others/h7_choose_shape03.svg";

import InjectableSvg from "@/hooks/InjectableSvg";
import { useBusinessServiceStore } from "@/zustand/stores/business-service.store";

const AboutUsMain = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const getAll = useBusinessServiceStore((state) => state.getAll);
  const loading = useBusinessServiceStore((state) => state.loading);
  const data = useBusinessServiceStore((state) => state.data);
  const loaded = useBusinessServiceStore((state) => state.loaded);

  useEffect(() => { 
    if (!loaded) getAll(1, 10); 
  }, []);

  return (
    <>
      <section className="choose__area-four tg-motion-effects section-py-140">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10">
              <div className="choose__img-four">
                <div className="left__side">
                  <Image src={choose_img1} alt="img" data-aos="fade-down" data-aos-delay="200" />
                  <Image src={choose_img2} alt="img" data-aos="fade-up" data-aos-delay="200" />
                  <div className="banner__review bg-primary" data-aos="fade-right" data-aos-delay="400">
                    <h6 className="title text-secondary">
                      40<span className="text-white">Años de experiencia</span>
                    </h6>
                  </div>
                </div>
                <div className="right__side" data-aos="fade-left" data-aos-delay="400">
                  <Image src={choose_img3} alt="img" />
                  <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="popup-video">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <Image src={choose_img4} alt="shape" className="shape shape-one tg-motion-effects4" />
                <Image src={choose_img5} alt="shape" className="shape shape-two alltuchtopdown" />
                <Image src={choose_img6} alt="shape" className="shape shape-three tg-motion-effects7" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="choose__content-four">
                <div className="section__title mb-20">
                  <span className="sub-title">Acerca de Nosotros</span>
                  <h2 className="title bold">Brindamos servicios legales confiables y efectivos</h2>
                </div>
                <p>
                  Somos especialistas en derecho laboral y, además, trabajamos con especialistas de otras ramas
                  sociales vinculados al mundo del trabajo y del sindicalismo.
                </p>

                <ul className="about__info-list list-wrap">
                  {loading && <li>Cargando servicios...</li>}
                  {!loading && data.map((service) => (
                    <li key={service.id} className="about__info-list-item">
                      <i className="flaticon-angle-right"></i>
                      <p className="content">{service.service_name}</p>
                    </li>
                  ))}
                </ul>

                {/* <Link href="/login" className="btn arrow-btn btn-four">Start Free Trial<BtnArrow /></Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"YHfU19no06E"} />
    </>
  );
};

export default AboutUsMain;
