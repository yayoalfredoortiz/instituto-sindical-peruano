import { Course } from "@/zustand/interfaces/course.interface";

interface Props {
  course: Course | null | undefined;
}

const Overview = ({ course }: Props) => {
  return (
    <div className="courses__overview-wrap">
      <h3 className="title">Descripción del Curso</h3>
      <p>{course?.description}</p>

      <h3 className="title">¿Qué aprenderás en este curso?</h3>
      <ul className="about__info-list list-wrap">
        {course?.goals?.length ? (
          course.goals.map((goal) => (
            <li className="about__info-list-item" key={goal.id}>
              <i className="flaticon-angle-right"></i>
              <p className="content">{goal.name}</p>
            </li>
          ))
        ) : (
          <p>No se han definido los objetivos del curso.</p>
        )}
      </ul>

      <h3 className="title">Requisitos</h3>
      <ul className="about__info-list list-wrap">
        {course?.requirements?.length ? (
          course.requirements.map((req) => (
            <li className="about__info-list-item" key={req.id}>
              <i className="flaticon-angle-right"></i>
              <p className="content">{req.name}</p>
            </li>
          ))
        ) : (
          <p>No se han definido requisitos para este curso.</p>
        )}
      </ul>

      <p className="last-info">
        Este curso es ideal para estudiantes de derecho, profesionales que buscan actualizar sus conocimientos legales o cualquier persona interesada en entender el sistema jurídico.
      </p>
    </div>
  );
};

export default Overview;
