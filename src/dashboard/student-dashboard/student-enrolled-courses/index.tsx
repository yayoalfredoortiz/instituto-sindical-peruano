import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import StudentEnrolledCoursesArea from './StudentEnrolledCoursesArea'
import HeaderSeven from '@/layouts/headers/HeaderSeven'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'

const StudentEnrolledCourses = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <StudentEnrolledCoursesArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default StudentEnrolledCourses
