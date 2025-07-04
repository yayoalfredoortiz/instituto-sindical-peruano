import InstructorHistoryArea from './InstructorHistoryArea'
import HeaderSeven from '@/layouts/headers/HeaderSeven'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'

const InstructorHistory = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <InstructorHistoryArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default InstructorHistory
