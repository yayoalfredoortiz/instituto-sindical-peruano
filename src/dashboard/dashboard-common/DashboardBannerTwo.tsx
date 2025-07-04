import BtnArrow from "@/svg/BtnArrow"
import Image from "next/image"
import Link from "next/link"
import InjectableSvg from "@/hooks/InjectableSvg"

import img_1 from "@/assets/img/courses/details_instructors02.jpg"

const DashboardBannerTwo = () => {
   return (
      <div className="dashboard__top-wrap">
         <div className="dashboard__top-bg" style={{ backgroundImage: `url(/assets/img/bg/features_bg.jpg)` }}></div>
         <div className="dashboard__instructor-info">
            <div className="dashboard__instructor-info-left">
               <div className="thumb">
                  <Image src={img_1} alt="img" />
               </div>
               <div className="content">
                  <h4 className="title">Emily Hannah</h4>
                  <ul className="list-wrap">
                     <li>
                        <InjectableSvg src="/assets/img/icons/course_icon03.svg" alt="img" className="injectable" />
                        5 Cursos Inscritos
                     </li>
                     <li>
                        <InjectableSvg src="/assets/img/icons/course_icon03.svg" alt="img" className="injectable" />
                        2 Casos Resueltos
                     </li>
                     <li>
                        <InjectableSvg src="/assets/img/icons/course_icon03.svg" alt="img" className="injectable" />
                        4 Formatos Adquiridos
                     </li>
                  </ul>
               </div>
            </div>
            <div className="dashboard__instructor-info-right mb-0">
               <Link href="#" className="btn btn-three arrow-btn mb-2">Ver Casos Legales <BtnArrow /></Link> <br />
               <Link href="#" className="btn btn-three arrow-btn">Ver Cursos Inscritos <BtnArrow /></Link>
            </div>
         </div>
      </div>
   )
}

export default DashboardBannerTwo
