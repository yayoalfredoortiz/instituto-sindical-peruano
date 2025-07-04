import StudentAttemptsArea from './StudentAttemptsArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const StudentAttempts = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <StudentAttemptsArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default StudentAttempts

