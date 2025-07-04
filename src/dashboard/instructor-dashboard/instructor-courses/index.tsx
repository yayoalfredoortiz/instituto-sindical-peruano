import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import InstructorEnrolledCourseArea from '../instructor-enrolled-courses/InstructorEnrolledCourseArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const InstructorCourses = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <InstructorEnrolledCourseArea style={true} />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default InstructorCourses
