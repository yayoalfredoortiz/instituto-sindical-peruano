import ErrorArea from "./ErrorArea"
import HeaderSeven from "@/layouts/headers/HeaderSeven"
import WhatsappButton from "@/components/common/WhatsappButton"
import FooterMain from "@/layouts/footers/FooterMain"

const NotFound = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <ErrorArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default NotFound

