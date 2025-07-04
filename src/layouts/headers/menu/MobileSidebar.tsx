import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

import logo from "@/assets/img/logo/logo.png"

const MobileSidebar = ({ isActive, setIsActive }: any) => {

   return (
      <div className={isActive ? "mobile-menu-visible" : ""}>
         <div className="tgmobile__menu">
            <nav className="tgmobile__menu-box">
               <div onClick={() => setIsActive(false)} className="close-btn"><i className="tg-flaticon-close-1"></i></div>
               <div className="p-3">
               {/* <div className="nav-logo"> */}
                  <Link href="/">
                     <Image
                        src={logo}
                        alt="Logo"
                        width={65}
                        height={53}
                     />

                  </Link>
               </div>
               {/* <div className="tgmobile__search">
                  <form action="#">
                     <input type="text" placeholder="Buscar..." />
                     <button><i className="fas fa-search"></i></button>
                  </form>
               </div> */}
               <div className="tgmobile__menu-outer">
                  <MobileMenu />
               </div>
               <div className="social-links">
                  <ul className="list-wrap">
                     <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                     <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                  </ul>
               </div>
            </nav>
         </div>
         <div className="tgmobile__menu-backdrop"></div>
      </div>
   )
}

export default MobileSidebar
