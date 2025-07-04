"use client"
import BtnArrow from "@/svg/BtnArrow"
import Image from "next/image"
import Link from "next/link"
import VideoPopup from "@/modals/VideoPopup"
import { useState } from "react"

import choose_thumb from "@/assets/img/others/case-tracking.jpg"

const CaseTracking = () => {

    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="choose__area-three section-pb-140">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="choose__img-three">
                                <Image src={choose_thumb} alt="img" />
                                <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="play-btn popup-video"><i className="fas fa-play"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose__content-three">
                                <div className="section__title mb-15">
                                    <span className="sub-title">Seguimiento de Casos Legales</span>
                                    <h2 className="title bold">Mantén el control total de tus procesos legales</h2>
                                </div>
                                <p>Consulta el estado de tus casos en tiempo real, recibe notificaciones importantes y mantente informado en cada etapa del proceso legal.</p>
                                <div className="choose__list-wrap">
                                    <div className="choose__list-item">
                                        <div className="icon">
                                            <i className="skillgro-law"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Historial y actualizaciones</h4>
                                            <span>Consulta cada paso del avance legal.</span>
                                        </div>
                                    </div>
                                    <div className="choose__list-item">
                                        <div className="icon">
                                            <i className="fa fa-bell"></i>
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Alertas y recordatorios</h4>
                                            <span>Recibe avisos sobre fechas clave y novedades.</span>
                                        </div>
                                    </div>
                                </div>
                                 <div className="tg-button-wrap">
                                    <Link href="/registration" className="btn arrow-btn">Solicitar <BtnArrow /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"mneYrqmQhFM"}
            />
        </>
    )
}

export default CaseTracking
