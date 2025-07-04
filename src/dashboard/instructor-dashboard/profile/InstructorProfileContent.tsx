const InstructorProfileContent = ({ style }: any) => {
   return (
      <div className="col-lg-9">
         <div className="dashboard__content-wrap">
            <div className="dashboard__content-title">
               <h4 className="title">Mi perfil</h4>
            </div>
            <div className="row">
               <div className="col-lg-12">
                  <div className="profile__content-wrap">
                     <ul className="list-wrap">
                        <li><span>Fecha de registro</span> 28 de febrero de 2026, 8:01 a. m.</li>
                        <li><span>Nombre</span> {style ? "Emily" : "John"} </li>
                        <li><span>Apellido</span> {style ? "Hannah" : "Doe"} </li>
                        {/* <li><span>Nombre de usuario</span> instructor</li> */}
                        <li><span>Correo electrónico</span> example@gmail.com</li>
                        <li><span>Número de teléfono</span> +1-202-555-0174</li>
                        <li><span>Habilidad/Ocupación</span> Desarrollador de aplicaciones</li>
                        <li>
                           <span>Biografía</span> Soy desarrollador Front-End en #ThemeGenix en Nueva York, OR. Tengo una gran pasión por los efectos de UI, animaciones y la creación de experiencias de usuario intuitivas y dinámicas.
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default InstructorProfileContent;
