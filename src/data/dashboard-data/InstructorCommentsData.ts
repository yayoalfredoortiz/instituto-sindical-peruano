type CommentDataType = {
  id: number;
  comment: string;
  course: string;
  student: string;
};

const instructor_comments_data: CommentDataType[] = [
  {
    id: 1,
    comment: "El contenido fue muy útil, pero me gustaría más ejemplos prácticos.",
    course: "Diseño Gráfico para Principiantes",
    student: "Ana López"
  },
  {
    id: 2,
    comment: "¿Puedes explicar mejor la lección sobre tipografía?",
    course: "Diseño Gráfico para Principiantes",
    student: "Carlos Ramírez"
  },
  {
    id: 3,
    comment: "Gracias por la clase, aprendí mucho sobre composición.",
    course: "Fundamentos del Diseño",
    student: "Lucía Gómez"
  },
  {
    id: 4,
    comment: "No entendí cómo usar la herramienta de pluma en Illustrator.",
    course: "Ilustración Digital",
    student: "Miguel Torres"
  },
  {
    id: 5,
    comment: "¿Tendrás recursos adicionales para practicar fuera del curso?",
    course: "Diseño UX/UI",
    student: "Sofía Herrera"
  },
];
export default instructor_comments_data;