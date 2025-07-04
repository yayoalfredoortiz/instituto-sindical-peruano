interface DataType {
   id: number;
   icon: string;
   count: number;
   title: string;
}

const dashboard_count_data: DataType[] = [
   {
      id: 1,
      icon: "skillgro-book",
      count: 4,
      title: "Mis Cursos",
   },
   {
      id: 2,
      icon: "skillgro-tutorial",
      count: 2,
      title: "Casos Legales Activos",
   },
   {
      id: 3,
      icon: "skillgro-diploma-1",
      count: 1,
      title: "Casos Finalizados",
   },
   {
      id: 4,
      icon: "skillgro-notepad",
      count: 8,
      title: "Formatos Descargados",
   },
   {
      id: 5,
      icon: "skillgro-dollar-currency-symbol",
      count: 3,
      title: "Documentos Comprados",
   },
   {
      id: 6,
      icon: "skillgro-notepad",
      count: 1,
      title: "Consultas en Proceso",
   },
];

export default dashboard_count_data;
