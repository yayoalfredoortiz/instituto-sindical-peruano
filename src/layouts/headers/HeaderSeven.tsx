"use client"
import Image from "next/image"
import Link from "next/link"
import NavMenuOne from "./menu/NavMenu"
import InjectableSvg from "@/hooks/InjectableSvg"
import HeaderSearch from "./menu/HeaderSearch"
import UseSticky from "@/hooks/UseSticky"
import { useState } from "react"
import MobileSidebar from "./menu/MobileSidebar"
import dynamic from "next/dynamic" 
import HeaderTopMain from "./menu/HeaderTopMain"
const TotalCart = dynamic(() => import("@/components/common/TotalCart"), { ssr: false });

//import logo from "@/assets/img/logo/logo.svg"

const HeaderSeven = () => {

   const [isSearch, setIsSearch] = useState<boolean>(false);
   const { sticky } = UseSticky();
   const [isActive, setIsActive] = useState<boolean>(false);

   return (
      <>
         <header>
            <HeaderTopMain />
            <div id="header-fixed-height"></div>
            <div id="sticky-header" className={`tg-header__area tg-header__style-seven ${sticky ? "sticky-menu" : ""}`}>
               <div className="container custom-container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tgmenu__wrap">
                           <nav className="tgmenu__nav">
                              <div className="logo">
                                 <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
                                    <Link href="/"><Image
                                       src={'/assets/img/logo/logo.png'}
                                       alt="Logo"
                                       width={0}
                                       height={0}
                                       sizes="100vw"
                                       style={{ width: '100%', height: 'auto' }}
                                    /></Link>

                                 </div>
                              </div>
                              <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                 <NavMenuOne />
                              </div>
                              <div className="tgmenu__action tgmenu__action-seven">
                                 <ul className="list-wrap">
                                    {/* <li className="header-select">
                                       <div className="tgmenu__categories select-grp-two d-none d-md-block">
                                          <div className="dropdown">
                                             <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="skillgro-list"></i>
                                                Categories
                                             </button>
                                             <ul className="dropdown-menu">
                                                <li><Link className="dropdown-item" href="/courses">Business</Link></li>
                                                <li><Link className="dropdown-item" href="/courses">Data Science</Link></li>
                                                <li><Link className="dropdown-item" href="/courses">Art & Design</Link></li>
                                                <li><Link className="dropdown-item" href="/courses">Marketing</Link></li>
                                                <li><Link className="dropdown-item" href="/courses">Finance</Link></li>
                                             </ul>
                                          </div>
                                       </div>
                                    </li>
                                    <li className="header-search">
                                       <a onClick={() => setIsSearch(true)} style={{ cursor: "pointer" }} className="search-open-btn">
                                          <i className="flaticon-search"></i>
                                       </a>
                                    </li> */}
                                    <li className="mini-cart-icon">
                                       <Link href="/cart" className="cart-count">
                                          <InjectableSvg src="/assets/img/icons/cart.svg" className="injectable" alt="img" />
                                          <TotalCart />
                                       </Link>
                                    </li>
                                    <li className="header-btn">
                                       <Link href="/login" className="btn">Iniciar Sesión</Link>
                                    </li>
                                 </ul>
                              </div>
                              <div className="mobile-login-btn">
                                 <Link href="/login"><InjectableSvg src="/assets/img/icons/user.svg" alt="" className="injectable" /></Link>
                              </div>
                              <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="tg-flaticon-menu-1"></i></div>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
         </header>
         <MobileSidebar isActive={isActive} setIsActive={setIsActive} />
      </>
   )
}

export default HeaderSeven
