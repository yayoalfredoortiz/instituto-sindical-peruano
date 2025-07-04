import Image from "next/image"
import Link from "next/link";

import shape_1 from "@/assets/img/others/breadcrumb_shape01.svg";
import shape_2 from "@/assets/img/others/breadcrumb_shape02.svg";
import shape_3 from "@/assets/img/others/breadcrumb_shape03.svg";
import shape_4 from "@/assets/img/others/breadcrumb_shape04.svg";
import shape_5 from "@/assets/img/others/breadcrumb_shape05.svg";

const BreadcrumbOne = ({ title, sub_title, sub_title_2, style }: any) => {
   return (
      <section 
        className="breadcrumb__area breadcrumb__bg position-relative text-white" 
        style={{ 
          backgroundImage: `url(/assets/img/slider/slider_law_bg01.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          minHeight: '300px',
        }}
      >
         {/* Overlay oscuro */}
         <div style={{
           position: 'absolute',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           backgroundColor: 'rgba(0,0,0,0.6)',  // capa negra semitransparente
           zIndex: 0,
         }}></div>

         <div className="container position-relative" style={{ zIndex: 1 }}>
            <div className="row">
               <div className="col-12">
                  <div className="breadcrumb__content">
                     <h3 className="title text-white">{title}</h3>
                     <nav className="breadcrumb">
                        {
                           style ? (
                              <>
                                 <span  property="itemListElement" typeof="ListItem">
                                    <Link className="text-white" href="/">Inicio</Link>
                                 </span>
                                 <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                 <span property="itemListElement" typeof="ListItem">
                                    <Link className="text-white" href="#">{sub_title}</Link>
                                 </span>
                                 <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                 <span className="text-secondary" property="itemListElement" typeof="ListItem">{sub_title_2}</span>
                              </>
                           ) : (
                              <>
                                 <span property="itemListElement" typeof="ListItem">
                                    <Link className="text-white" href="/">Inicio</Link>
                                 </span>
                                 <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                 <span className="text-secondary" property="itemListElement" typeof="ListItem">{sub_title}</span>
                              </>
                           )
                        }
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BreadcrumbOne
