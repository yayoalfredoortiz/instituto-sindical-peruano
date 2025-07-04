"use client"
import DashboardBannerTwo from "@/dashboard/dashboard-common/DashboardBannerTwo";
import DashboardSidebarTwo from "@/dashboard/dashboard-common/DashboardSidebarTwo";
import Link from "next/link";
import Image from "next/image";
import bg_img from "@/assets/img/bg/dashboard_bg.jpg";

const student_review_data: string[] = [
  "El Curso Completo de Diseño Gráfico para Principiantes",
  "El Curso Completo de Diseño Gráfico para Principiantes",
  "El Curso Completo de Diseño Gráfico para Principiantes",
  "El Curso Completo de Diseño Gráfico para Principiantes",
  "El Curso Completo de Diseño Gráfico para Principiantes",
  "El Curso Completo de Diseño Gráfico para Principiantes",
  "El Curso Completo de Diseño Gráfico para Principiantes",
  "El Curso Completo de Diseño Gráfico para Principiantes",
];

const StudentReviewArea = () => {
  return (
    <section className="dashboard__area section-pb-120">
      <div className="dashboard__bg">
        <Image src={bg_img} alt="" />
      </div>
      <div className="container">
        <DashboardBannerTwo />
        <div className="dashboard__inner-wrap">
          <div className="row">
            <DashboardSidebarTwo />
            <div className="col-lg-9">
              <div className="dashboard__content-wrap">
                <div className="dashboard__content-title">
                  <h4 className="title">Reseñas</h4>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="dashboard__review-table">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th>Curso</th>
                            <th>Comentarios</th>
                            <th>&nbsp;</th>
                          </tr>
                        </thead>
                        <tbody>
                          {student_review_data.map((item, i) => (
                            <tr key={i}>
                              <td>
                                <Link href="/course-details">{item}</Link>
                              </td>
                              <td>
                                <div className="review__wrap">
                                  <div className="rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                  </div>
                                  <span>(3 Reseñas)</span>
                                </div>
                                <p>Bueno</p>
                              </td>
                              <td>
                                <div className="dashboard__review-action">
                                  <Link href="#" title="Editar">
                                    <i className="skillgro-edit"></i>
                                  </Link>
                                  <Link href="#" title="Eliminar">
                                    <i className="skillgro-bin"></i>
                                  </Link>
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
  );
};

export default StudentReviewArea;
