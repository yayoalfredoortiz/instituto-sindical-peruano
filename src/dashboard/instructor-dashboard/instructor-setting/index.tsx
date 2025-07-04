import InstructorSettingArea from './InstructorSettingArea'
import HeaderSeven from '@/layouts/headers/HeaderSeven'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'

const InstructorSetting = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <InstructorSettingArea />
         </main>
         <WhatsappButton />
         <FooterMain />
      </>
   )
}

export default InstructorSetting
