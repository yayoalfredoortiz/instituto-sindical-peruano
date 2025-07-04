import Link from "next/link";

interface DataType {
  id: number;
  name: string;
  enroll: number;
}[];

const table_data: DataType[] = [
  {
    id: 1,
    name: "Contabilidad Legal",
    enroll: 50,
  },
  {
    id: 2,
    name: "Marketing Jurídico",
    enroll: 43,
  },
  {
    id: 3,
    name: "Diseño Web para Abogados",
    enroll: 36,
  },
  {
    id: 4,
    name: "Diseño Gráfico Legal",
    enroll: 22,
  },
];

const DashboardReviewTable = () => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th>Nombre del Curso</th>
          <th>Inscritos</th>
          <th>Calificación</th>
        </tr>
      </thead>
      <tbody>
        {table_data.map((list) => (
          <tr key={list.id}>
            <td>
              <Link href="/course-details">{list.name}</Link>
            </td>
            <td>
              <p className="color-black">{list.enroll}</p>
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
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardReviewTable;
