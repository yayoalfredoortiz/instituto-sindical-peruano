import DashboardBanner from "@/dashboard/dashboard-common/DashboardBanner"
import DashboardSidebar from "@/dashboard/dashboard-common/DashboardSidebar"
import instructor_attempts_data from "@/data/dashboard-data/InstructorAttemptsData"
import Link from "next/link"
import Image from "next/image"
import bg_img from "@/assets/img/bg/dashboard_bg.jpg"

const InstructorQuizArea = () => {
  return (
    <section className="dashboard__area section-pb-120">
         <div className="dashboard__bg"><Image src={bg_img} alt=""/></div>
      <div className="container">
        <DashboardBanner />
        <div className="dashboard__inner-wrap">
          <div className="row">
            <DashboardSidebar />
            <div className="col-lg-9">
              <div className="dashboard__content-wrap">
                <div className="dashboard__content-title">
                  <h4 className="title">Quiz Attempts</h4>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="dashboard__review-table">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th>Quiz</th>
                            <th>Qus</th>
                            <th>TM</th>
                            <th>CA</th>
                            <th>Result</th>
                            <th>&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          {instructor_attempts_data.slice(0, 5).map((item) => (
                            <tr key={item.id}>
                              <td>
                                <div className="dashboard__quiz-info">
                                  <p>{item.date}</p>
                                  <h6 className="title">{item.title}</h6>
                                  <span>Student: <Link href="#">{item.name}</Link></span>
                                </div>
                              </td>
                              <td>
                                <p className="color-black">{item.qus}</p>
                              </td>
                              <td>
                                <p className="color-black">{item.tm}</p>
                              </td>
                              <td>
                                <p className="color-black">{item.ca}</p>
                              </td>
                              <td>
                                <span className={`dashboard__quiz-result ${item.result_class}`}>{item.result}</span>
                              </td>
                              <td>
                                <div className="dashboard__review-action">
                                  <Link href="#" title="Edit"><i className="skillgro-edit"></i></Link>
                                  <Link href="#" title="Delete"><i className="skillgro-bin"></i></Link>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstructorQuizArea
