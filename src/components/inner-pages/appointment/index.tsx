import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne" 
import WhatsappButton from "@/components/common/WhatsappButton"
import FooterMain from "@/layouts/footers/FooterMain"
import HeaderSeven from "@/layouts/headers/HeaderSeven" 
import GetAppointment from "@/components/homes/home-main/GetAppointment"

const Appointment = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <BreadcrumbOne title="¿Requieres Ayuda?" sub_title="Agenda una Cita" />
            <GetAppointment /> 
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default Appointment
