import StudentDashboardArea from './StudentDashboardArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const StudentDashboard = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <StudentDashboardArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default StudentDashboard
