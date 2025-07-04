import FooterOne from '@/layouts/footers/FooterOne'
import DashboardHomeArea from './DashboardHomeArea'
import HeaderSeven from '@/layouts/headers/HeaderSeven'
import WhatsappButton from '@/components/common/WhatsappButton'
import FooterMain from '@/layouts/footers/FooterMain'

const DashboardHome = () => {
  return (
    <>
      <HeaderSeven />
      <main className="main-area fix">
        <DashboardHomeArea />
      </main>
      <WhatsappButton />
      <FooterMain />
    </>
  )
}

export default DashboardHome
