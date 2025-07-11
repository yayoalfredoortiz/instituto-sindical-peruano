import instructor_history_data from "@/data/dashboard-data/InstructorHistoryData";

const InstructorHistoryContent = () => {
  return (
    <div className="col-lg-9">
      <div className="dashboard__content-wrap">
        <div className="dashboard__content-title">
          <h4 className="title">Historial de Compras</h4>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="dashboard__review-table">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>ID de Compra</th>
                    <th>Nombre del Curso</th>
                    <th>Fecha</th>
                    <th>Precio</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {instructor_history_data.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <p>{item.order_id}</p>
                      </td>
                      <td>
                        <p>{item.course_name}</p>
                      </td>
                      <td>
                        <p>{item.date}</p>
                      </td>
                      <td>
                        <p>${item.price}.99</p>
                      </td>
                      <td>
                        <span className={`dashboard__quiz-result ${item.status_class}`}>
                          {item.status}
                        </span>
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
  );
};

export default InstructorHistoryContent;
