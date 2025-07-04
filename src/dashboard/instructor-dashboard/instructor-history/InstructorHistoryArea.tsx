import DashboardBanner from "@/dashboard/dashboard-common/DashboardBanner"
import DashboardSidebar from "@/dashboard/dashboard-common/DashboardSidebar"
import InstructorHistoryContent from "./InstructorHistoryContent"
import Image from "next/image"
import bg_img from "@/assets/img/bg/dashboard_bg.jpg"

const InstructorHistoryArea = () => {
  return (
    <section className="dashboard__area section-pb-120">
         <div className="dashboard__bg"><Image src={bg_img} alt=""/></div>
      <div className="container">
        <DashboardBanner />
        <div className="dashboard__inner-wrap">
          <div className="row">
            <DashboardSidebar />
            <InstructorHistoryContent />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructorHistoryArea
