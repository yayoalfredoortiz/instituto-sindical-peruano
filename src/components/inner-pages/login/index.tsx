import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import LoginArea from "./LoginArea"
import HeaderSeven from "@/layouts/headers/HeaderSeven"
import WhatsappButton from "@/components/common/WhatsappButton"
import FooterMain from "@/layouts/footers/FooterMain"

const Login = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="Iniciar Sesión" sub_title="Login" /> */}
            <LoginArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default Login

