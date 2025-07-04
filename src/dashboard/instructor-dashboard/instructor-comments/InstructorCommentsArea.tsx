import DashboardBanner from "@/dashboard/dashboard-common/DashboardBanner"
import DashboardSidebar from "@/dashboard/dashboard-common/DashboardSidebar" 
import Link from "next/link"
import Image from "next/image"
import bg_img from "@/assets/img/bg/dashboard_bg.jpg"
import instructor_comments_data from "@/data/dashboard-data/InstructorCommentsData"

const InstructorCommentsArea = () => {
   return (
      <section className="dashboard__area section-pb-120">
         <div className="dashboard__bg"><Image src={bg_img} alt="Fondo del panel"/></div>
         <div className="container">
            <DashboardBanner />
            <div className="dashboard__inner-wrap">
               <div className="row">
                  <DashboardSidebar />
                  <div className="col-lg-9">
                     <div className="dashboard__content-wrap">
                        <div className="dashboard__content-title">
                           <h4 className="title">Comentarios de Estudiantes</h4>
                        </div>
                        <div className="row">
                           <div className="col-12">
                              <div className="dashboard__review-table">
                                 <table className="table table-borderless">
                                    <thead>
                                       <tr>
                                          <th>Comentario</th>
                                          <th>Curso</th>
                                          <th>Estudiante</th>
                                          <th>Acciones</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {instructor_comments_data.map((item) => (
                                          <tr key={item.id}>
                                             <td>
                                                <p>{item.comment || "Buen trabajo, pero puedes mejorar la estructura del ensayo."}</p>
                                             </td>
                                             <td>
                                                <Link href="#">{item.course}</Link>
                                             </td>
                                             <td>
                                                <p>{item.student || "Juan Pérez"}</p>
                                             </td>
                                             <td>
                                                <div className="dashboard__review-action">
                                                   <Link href="#" title="Responder"><i className="fa fa-eye"></i></Link>
                                                   <Link href="#" title="Eliminar"><i className="skillgro-bin"></i></Link>
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

export default InstructorCommentsArea
