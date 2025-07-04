import StudentProfileArea from './StudentProfileArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const StudentProfile = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <StudentProfileArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default StudentProfile
