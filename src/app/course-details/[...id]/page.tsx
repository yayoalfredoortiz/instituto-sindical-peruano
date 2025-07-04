import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import WhatsappButton from "@/components/common/WhatsappButton";
import CourseDetailsArea from "@/components/courses/course-details/CourseDetailsArea";
import courses_data from "@/data/inner-data/InnerCourseData";
import FooterMain from "@/layouts/footers/FooterMain";
import HeaderMain from "@/layouts/headers/HeaderMain"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Course Details",
};
const index = ({ params }: { params: { id: string } }) => {
 
   return (
      <Wrapper>
         <HeaderMain />
         <main className="main-area fix">
            <BreadcrumbOne title="Detalle de Curso" sub_title="Detalle" />
            <CourseDetailsArea courseId={params.id} />
         </main>
         <WhatsappButton />
         <FooterMain />
      </Wrapper>
   )
}

export default index