import InstructorEnrolledCourseArea from './InstructorEnrolledCourseArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const InstructorEnrolledCourse = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <InstructorEnrolledCourseArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default InstructorEnrolledCourse
