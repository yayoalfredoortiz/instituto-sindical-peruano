import InstructorCommentsArea from './InstructorCommentsArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const InstructorComments = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <InstructorCommentsArea/>
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default InstructorComments
