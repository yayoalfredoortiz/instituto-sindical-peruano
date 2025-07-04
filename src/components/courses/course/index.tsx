import CourseArea from "./CourseArea"
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne" 
import WhatsappButton from "@/components/common/WhatsappButton"
import FooterMain from "@/layouts/footers/FooterMain"
import HeaderMain from "@/layouts/headers/HeaderMain"

const Course = () => {
   return (
      <>
         <HeaderMain />
         <main className="main-area fix">
            <BreadcrumbOne title="Todos los Cursos" sub_title="Cursos" />
            <CourseArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default Course
