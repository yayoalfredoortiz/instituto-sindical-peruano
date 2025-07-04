"use client"
import VideoPopup from "@/modals/VideoPopup"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import InjectableSvg from "@/hooks/InjectableSvg";
import BtnArrow from "@/svg/BtnArrow";

import img_1 from "@/assets/img/courses/course_thumb02.jpg"
import img_2 from "@/assets/img/others/payment.png"
import { Course } from "@/zustand/interfaces/course.interface";
import { formatCurrency } from "@/utils/functions";

interface Props {
   course: Course | null | undefined;
}

const Sidebar = ({ course }: Props) => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <div className="col-xl-3 col-lg-4">
            <div className="courses__details-sidebar">
               <div className="courses__details-video">
                  <Image src={img_1} alt="imagen del curso" />
                  <a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer" }} className="popup-video"><i className="fas fa-play"></i></a>
               </div>
               <div className="courses__cost-wrap">
                  <span>Precio del curso:</span>
                  <h2 className="title">
                     {formatCurrency(course?.price ?? 0)}
                     {/* <del className="text-secondary">$32.00</del> */}
                  </h2>
               </div>
               <div className="courses__information-wrap">
                  <h5 className="title">El curso incluye:</h5>
                  <ul className="list-wrap">
                     <li>
                        <InjectableSvg src="/assets/img/icons/course_icon01.svg" alt="icono" className="injectable" />
                        Nivel
                        <span>{course?.level.name}</span>
                     </li>
                     <li>
                        <InjectableSvg src="/assets/img/icons/course_icon02.svg" alt="icono" className="injectable" />
                        Duración
                        <span>11h 20m</span>
                     </li>
                     <li>
                        <InjectableSvg src="/assets/img/icons/course_icon03.svg" alt="icono" className="injectable" />
                        Lecciones
                        <span>{course?.lessons_count ?? 0}</span>
                     </li>
                     <li>
                        <InjectableSvg src="/assets/img/icons/course_icon04.svg" alt="icono" className="injectable" />
                        Cuestionarios
                        <span>1</span>
                     </li>
                     <li>
                        <InjectableSvg src="/assets/img/icons/course_icon05.svg" alt="icono" className="injectable" />
                        Certificaciones
                        <span>Sí</span>
                     </li>
                     <li>
                        <InjectableSvg src="/assets/img/icons/course_icon06.svg" alt="icono" className="injectable" />
                        Graduados
                        <span>0</span>
                     </li>
                  </ul>
               </div>
               <div className="courses__payment">
                  <h5 className="title">Pago seguro:</h5>
                  <Image src={img_2} alt="métodos de pago" />
               </div>
               {/* <div className="courses__details-social">
                  <h5 className="title">Comparte este curso:</h5>
                  <ul className="list-wrap">
                     <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-whatsapp"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                  </ul>
               </div> */}
               <div className="courses__details-enroll">
                  <div className="tg-button-wrap mb-2">
                     <Link href="/courses" className="btn btn-three arrow-btn">
                        Añadir a Carrito<BtnArrow />
                     </Link>
                  </div>
                  <div className="tg-button-wrap">
                     <Link href="/courses" className="btn btn-one arrow-btn">
                        Comprar Ahora<BtnArrow />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"qeureCudfAU"}
         />
      </>
   )
}

export default Sidebar;
