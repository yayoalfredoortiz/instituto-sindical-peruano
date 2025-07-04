import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne" 
import BrandOne from "@/components/common/brands/BrandOne" 
import WhatsappButton from "@/components/common/WhatsappButton"
import FooterMain from "@/layouts/footers/FooterMain"
import HeaderSeven from "@/layouts/headers/HeaderSeven"
import ChooseMain from "@/components/homes/home-main/ChooseMain"
import AboutUsMain from "@/components/homes/home-main/AboutUs"

const AboutUs = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <BreadcrumbOne title="¿Quienes Somos Nosotros?" sub_title="Acerca de Nosotros" />
            <AboutUsMain/>
            <ChooseMain/>
            <BrandOne />
            {/* <Feature style={true} />
            <Newsletter />
            <Features />
            <Testimonial /> */}
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default AboutUs
