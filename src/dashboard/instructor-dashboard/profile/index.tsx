import InstructorProfileArea from './InstructorProfileArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const InstructorProfile = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <InstructorProfileArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default InstructorProfile
