import InstructorReviewArea from './InstructorReviewArea'
import HeaderSeven from '@/layouts/headers/HeaderSeven'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'

const InstructorReview = () => {
  return (
   <>
        <HeaderSeven />
         <main className="main-area fix">
            <InstructorReviewArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
  )
}

export default InstructorReview
