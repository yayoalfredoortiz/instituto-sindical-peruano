import Image from "next/image"
import Link from "next/link"
import BtnArrow from "@/svg/BtnArrow"

import shape_1 from "@/assets/img/others/h7_newsletter_shape01.svg"
import shape_2 from "@/assets/img/others/h7_newsletter_shape02.svg"

const Newsletter = () => {
   return (
      <section className="newsletter__area-two">
         <div className="container">
            <div className="newsletter__inner-wrap">
               <h2 className="title">Regístrate gratis y accede a soluciones legales digitales en un solo lugar</h2>
               <div className="newsletter__btn">
                  <Link href="/login" className="btn arrow-btn btn-two">Empezar Ahora <BtnArrow /></Link>
               </div>
               <Image  src={shape_1} alt="shape" data-aos="fade-down-right" data-aos-delay="400" className="shape shape-one" />
               {/* <Image src={shape_2} alt="shape" className="shape shape-two rotateme" /> */}
            </div>
         </div>
      </section>
   )
}

export default Newsletter
