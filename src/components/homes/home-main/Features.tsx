interface DataType {
   id: number;
   icon: string;
   title: string;
   tag: string;
}[]

const feature_data: DataType[] = [
   {
      id: 1,
      icon: "skillgro-profit",
      title: "Plataforma Legal Integral",
      tag: "Capacitación, Seguimiento de casos, Descarga de formatos , Asesorías y mucho más.",
   },
   {
      id: 2,
      icon: "skillgro-instructor",
      title: "Charlas y Conferencias",
      tag: "Abordamos Temas Legales de gran interés.",
   },
   {
      id: 3,
      icon: "skillgro-tutorial",
      title: "Abogados Especializados",
      tag: "Asesoria y Seguimientos de casos.",
   },
   {
      id: 4,
      icon: "skillgro-graduated",
      title: "Certificados Digitales",
      tag: "Estudia de manera flexible online.",
   },
];

const Features = () => {
   return (
      <section className="features__area-seven grey-bg-two">
         <div className="container">
            <div className="features__item-wrap-four">
               <div className="row">
                  {feature_data.map((item) => (
                     <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                        <div className="features__item-six">
                           <div className="features__icon-six">
                              <i className={item.icon}></i>
                           </div>
                           <div className="features__content-six">
                              <h4 className="title">{item.title}</h4>
                              <span>{item.tag}</span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Features
