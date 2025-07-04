import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne" 
import WhatsappButton from "@/components/common/WhatsappButton"
import FooterMain from "@/layouts/footers/FooterMain"
import HeaderSeven from "@/layouts/headers/HeaderSeven"  
import DocumentFormats from "@/components/homes/home-main/DocumentFormats"

const DocumentFormatPage = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <BreadcrumbOne title="Formatos de Documentos Digitales" sub_title="Formatos" />
            <DocumentFormats /> 
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default DocumentFormatPage
