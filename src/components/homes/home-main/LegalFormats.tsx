"use client"
import BtnArrow from "@/svg/BtnArrow"
import Image from "next/image"
import Link from "next/link" 
import { useState } from "react"

import category_img1 from "@/assets/img/others/h7_categories_shape01.svg"
import category_img2 from "@/assets/img/others/h7_categories_shape02.svg"
import category_img3 from "@/assets/img/others/h7_categories_shape03.svg"
import category_img4 from "@/assets/img/others/h7_categories_shape04.svg"


import choose_thumb from "@/assets/img/others/format.png"

const LegalFormats = () => { 

    return (
        <>
            <section className="categories-area-three fix section-pt-140 section-pb-110 categories__bg" style={{ backgroundImage: `url(/assets/img/bg/categories_bg.jpg)` }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <Image src={choose_thumb} alt="img" />
                            {/* <div className="choose__img-three">
                                <Image src={choose_thumb} alt="img" />
                                <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="play-btn popup-video"><i className="fas fa-play"></i></a>
                            </div> */}

                        </div>
                        <div className="col-lg-6">
                            <div className="choose__content-three">
                                <div className="section__title mb-15">
                                    <span className="sub-title">Formatos de Documentos Legales</span>
                                    <h2 className="title bold">Documentos Legales Personalizables Listos para Usar</h2>
                                </div>
                                <p>Accede a formatos legales confiables y personalizables, listos para descargar y utilizar en tus trámites más importantes.</p>
                                <div className="choose__list-wrap">
                                    <div className="choose__list-item">
                                        <div className="icon">
                                            <i className="skillgro-profit"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Accede a formatos legales listos</h4>
                                            <span>para contratos, cartas y más.</span>
                                        </div>
                                    </div>
                                    <div className="choose__list-item">
                                        <div className="icon">
                                            <i className="fa fa-user-tie"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Redactados por expertos legales</h4>
                                            <span>y actualizados según normativa vigente.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tg-button-wrap">
                                    <Link href="/document-formats" className="btn arrow-btn">Ver Formatos <BtnArrow /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categories__shape-wrap">
                    <Image src={category_img1} alt="shape" className="rotateme" />
                    <Image src={category_img2} alt="shape" data-aos="fade-down-left" data-aos-delay="400" />
                    <Image src={category_img3} alt="shape" className="alltuchtopdown" />
                    <Image src={category_img4} alt="shape" data-aos="fade-up-right" data-aos-delay="400" />
                </div>
            </section> 
        </>
    )
}

export default LegalFormats
