import BtnArrow from "@/svg/BtnArrow"
import Image from "next/image"
import Link from "next/link"

import avatar from "@/assets/img/courses/details_instructors01.jpg"
import avatar_2 from "@/assets/img/courses/details_instructors02.jpg"

const DashboardBanner = ({ style }: any) => {
   return (
      <div className="dashboard__top-wrap">
         <div className="dashboard__top-bg" style={{ backgroundImage: `url(/assets/img/bg/features_bg.jpg)` }}></div>
         <div className="dashboard__instructor-info">
            <div className="dashboard__instructor-info-left">
               <div className="thumb">
                  <Image src={style ? avatar_2 : avatar} alt="img" />
               </div>
               <div className="content">
                  <h4 className="title">{style ? "Emily Díaz" : "José Sandoval"}</h4>
                  <div className="review__wrap review__wrap-two">
                     <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                     </div>
                     <span>(15 Reviews)</span>
                  </div>
               </div>
            </div>
            <div className="dashboard__instructor-info-right mb-0">
               <Link href="#" className="btn btn-three arrow-btn mb-2">Ver Casos Asignados <BtnArrow /></Link> <br />
               <Link href="#" className="btn btn-three arrow-btn">Crear Nuevo Curso <BtnArrow /></Link>
            </div>
         </div>
      </div>
   )
}

export default DashboardBanner
