import InjectableSvg from "@/hooks/InjectableSvg"
import BtnArrow from "@/svg/BtnArrow"
import Link from "next/link"

const ErrorArea = () => {
   return (
      <section className="error-area">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="error-wrap text-center">
                     <div className="error-img">
                        <InjectableSvg src="assets/img/others/error_img.svg" alt="imagen" className="injectable" />
                     </div>
                     <div className="error-content">
                        <h2 className="title">¡PÁGINA NO ENCONTRADA! <span>¡Lo sentimos! ¡Esta página no está disponible!</span></h2>
                        <div className="tg-button-wrap">
                           <Link href="/" className="btn arrow-btn">Ir a la Página Principal <BtnArrow /></Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ErrorArea
