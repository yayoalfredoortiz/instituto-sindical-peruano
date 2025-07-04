import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne"
import WhatsappButton from "@/components/common/WhatsappButton";
import FooterMain from "@/layouts/footers/FooterMain"; 
import HeaderSeven from "@/layouts/headers/HeaderSeven";
import dynamic from "next/dynamic"
const CartArea = dynamic(() => import("./CartArea"), { ssr: false });

const Cart = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <BreadcrumbOne title="Carrito de Compras" sub_title="Carrito" />
            <CartArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default Cart
