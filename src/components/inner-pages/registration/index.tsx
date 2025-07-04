import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import RegistrationArea from "./RegistrationArea"
import HeaderSeven from "@/layouts/headers/HeaderSeven"
import WhatsappButton from "@/components/common/WhatsappButton"
import FooterMain from "@/layouts/footers/FooterMain"

const Registration = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            {/* <BreadcrumbOne title="Registro de Usuarios" sub_title="Registro" /> */}
            <RegistrationArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default Registration

