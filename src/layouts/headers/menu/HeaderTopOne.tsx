import Image from "next/image"
import Link from "next/link"

import icon_1 from "@/assets/img/icons/map_marker.svg"
import icon_2 from "@/assets/img/icons/envelope.svg"
import icon_3 from "@/assets/img/icons/phone.svg"

const HeaderTopOne = ({ style }: any) => {
   return (
      <div className="tg-header__top">
         <div className={`container ${style ? "" : "custom-container"}`}>
            <div className="row">
               <div className="col-lg-6">
                  <ul className="tg-header__top-info list-wrap">
                     <li><Image src={icon_1} alt="Icon" /> <span>Av. Javier Prado Este 4200, Surco, Lima</span></li>
                     <li><Image src={icon_2} alt="Icon" /> <Link href="mailto:info@skillgrodemo.com">info@gmail.com</Link></li>
                  </ul>
               </div>
               <div className="col-lg-6">
                  <div className="tg-header__top-right">
                     <div className="tg-header__phone">
                        <Image src={icon_3} alt="Icon" />Llámanos al: <Link href="tel:0123456789">+51 599 8989</Link>
                     </div>
                     <ul className="tg-header__top-social list-wrap">
                        <li>Síguenos en :</li>
                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-whatsapp"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopOne
