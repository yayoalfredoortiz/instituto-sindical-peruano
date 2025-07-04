import CourseDetailsArea from "./CourseDetailsArea"
import BreadcrumbTwo from "@/components/common/breadcrumb/BreadcrumbTwo"
import HeaderSeven from "@/layouts/headers/HeaderSeven"
import WhatsappButton from "@/components/common/WhatsappButton"
import FooterMain from "@/layouts/footers/FooterMain"

const CourseDetails = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <BreadcrumbTwo title="Resolving Conflicts Between Designers And Engineers" sub_title="Courses" />
            <CourseDetailsArea courseId=""/>
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default CourseDetails
