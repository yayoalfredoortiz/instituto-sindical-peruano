import Image from "next/image"
import Link from "next/link"

import icon from "@/assets/img/icons/google.svg"
import LoginForm from "@/forms/LoginForm"

const LoginArea = () => {
   return (
      <section className="singUp-area section-py-90 mt-5">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-8">
                  <div className="singUp-wrap">
                     <h2 className="title">¡Bienvenido de nuevo!</h2>
                     <p>Accede a tu cuenta ingresando tu correo electrónico y contraseña. Continúa con tus gestiones legales de forma segura y rápida.</p>
                     <div className="account__social">
                        <Link href="#" className="account__social-btn">
                           <Image src={icon} alt="Google" />
                           Continuar con Google
                        </Link>
                     </div>
                     <div className="account__divider">
                        <span>o</span>
                     </div>
                     <LoginForm />
                     <div className="account__switch">
                        <p>¿No tienes una cuenta? <Link href="/registration">Regístrate aquí</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default LoginArea
