import StudentHistoryArea from './StudentHistoryArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const StudentHistory = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <StudentHistoryArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default StudentHistory

