import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne" 
import HeaderSeven from "@/layouts/headers/HeaderSeven"
import WhatsappButton from "@/components/common/WhatsappButton"
import FooterMain from "@/layouts/footers/FooterMain"
import FormatDetailsArea from "./FormatDetailsArea"

const DocumentFormatDetails = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <BreadcrumbOne title="Detalle de Formato" sub_title="Formatos" sub_title_2="Contrato de Arrendamiento" style={true} />
             <FormatDetailsArea/>
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default DocumentFormatDetails

