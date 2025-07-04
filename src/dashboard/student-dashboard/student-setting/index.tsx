import StudentSettingArea from './StudentSettingArea'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'
import HeaderSeven from '@/layouts/headers/HeaderSeven'

const StudentSetting = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <StudentSettingArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default StudentSetting

