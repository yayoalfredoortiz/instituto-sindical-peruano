import RegistrationForm from "@/forms/RegistrationForm"
import Link from "next/link"
import Image from "next/image"

import icon from "@/assets/img/icons/google.svg"

const RegistrationArea = () => {
   return (
      <section className="singUp-area section-py-90 mt-5">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="singUp-wrap">
                     <h2 className="title">Crea tu cuenta</h2>
                     <p>¿Listo para comenzar? Solo necesitamos algunos datos para iniciar tu registro. <br /> ¡Empecemos!</p>
                     <div className="account__social">
                        <Link href="#" className="account__social-btn">
                           <Image src={icon} alt="Google" />
                           Continuar con Google
                        </Link>
                     </div>
                     <div className="account__divider">
                        <span>o</span>
                     </div>
                     <RegistrationForm />
                     <div className="account__switch">
                        <p>¿Ya tienes una cuenta? <Link href="/login">Inicia sesión</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default RegistrationArea
