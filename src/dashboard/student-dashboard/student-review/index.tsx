import StudentReviewArea from './StudentReviewArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const StudentReview = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <StudentReviewArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default StudentReview
