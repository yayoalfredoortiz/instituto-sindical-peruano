import InstructorAttemptsArea from './InstructorAttemptsArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const InstructorAttempts = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <InstructorAttemptsArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default InstructorAttempts
