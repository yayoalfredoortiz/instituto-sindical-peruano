"use client";
import Image from "next/image";
import Link from "next/link";

import thumb from "@/assets/img/courses/details_instructors01.jpg";
import thumb_2 from "@/assets/img/courses/details_instructors02.jpg";

const InstructorSettingProfile = ({ style }: any) => {
   return (
      <>
         {style ? (
            <div className="d-flex justify-content-center">
               <div className="instructor__cover-info-left mb-3">
                  <div className="thumb">
                     <Image src={thumb_2} alt="img" />
                  </div>
                  <button title="Subir foto">
                     <i className="fas fa-camera"></i>
                  </button>
               </div>
            </div>
            // <div
            //    className="instructor__cover-bg"
            //    style={{ backgroundImage: `url(/assets/img/bg/student_bg.jpg)` }}
            // >
            //    <div className="instructor__cover-info">
            //       <div className="instructor__cover-info-left">
            //          <div className="thumb">
            //             <Image src={thumb_2} alt="img" />
            //          </div>
            //          <button title="Subir foto">
            //             <i className="fas fa-camera"></i>
            //          </button>
            //       </div>
            //       <div className="instructor__cover-info-right">
            //          <Link href="#" className="btn btn-two arrow-btn">
            //             Editar foto de portada
            //          </Link>
            //       </div>
            //    </div>
            // </div>
         ) : (
            <div className="d-flex justify-content-center">
               <div className="instructor__cover-info-left mb-3">
                  <div className="thumb">
                     <Image src={thumb} alt="img" />
                  </div>
                  <button title="Subir foto">
                     <i className="fas fa-camera"></i>
                  </button>
               </div>
            </div>
            // <div
            //    className="instructor__cover-bg"
            //    style={{ backgroundImage: `url(/assets/img/bg/instructor_dashboard_bg.jpg)` }}
            // >
            //    <div className="instructor__cover-info">
            //       <div className="instructor__cover-info-left">
            //          <div className="thumb">
            //             <Image src={thumb} alt="img" />
            //          </div>
            //          <button title="Subir foto">
            //             <i className="fas fa-camera"></i>
            //          </button>
            //       </div>
            //       <div className="instructor__cover-info-right">
            //          <Link href="#" className="btn btn-two arrow-btn">
            //             Editar foto de portada
            //          </Link>
            //       </div>
            //    </div>
            // </div>
         )}

         <div className="instructor__profile-form-wrap">
            <form onSubmit={(e) => e.preventDefault()} className="instructor__profile-form">
               <div className="row">
                  <div className="col-md-6">
                     <div className="form-grp">
                        <label htmlFor="firstname">Nombre</label>
                        <input id="firstname" type="text" defaultValue="John" />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-grp">
                        <label htmlFor="lastname">Apellido</label>
                        <input id="lastname" type="text" defaultValue="Due" />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-grp">
                        <label htmlFor="username">Email</label>
                        <input id="username" type="text" defaultValue="instructor@gmail.com" />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-grp">
                        <label htmlFor="phonenumber">Teléfono</label>
                        <input id="phonenumber" type="tel" defaultValue="+1-202-555-0174" />
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="form-grp">
                        <label htmlFor="skill">Especialidad / Profesión</label>
                        <input id="skill" type="text" defaultValue="Desarrollador Full Stack" />
                     </div>
                  </div>
                  {/* <div className="col-md-6">
                     <div className="form-grp select-grp">
                        <label htmlFor="displayname">Mostrar públicamente como</label>
                        <select id="displayname" name="displayname">
                           <option value="Emily Hannah">Emily Hannah</option>
                           <option value="John">John</option>
                           <option value="Due">Due</option>
                           <option value="Due John">Due John</option>
                           <option value="johndue">johndue</option>
                        </select>
                     </div>
                  </div> */}
               </div>
               <div className="form-grp">
                  <label htmlFor="bio">Biografía</label>
                  <textarea
                     id="bio"
                     defaultValue="Soy desarrollador Front-End para #ThemeGenix en Nueva York, EE.UU. Me apasionan los efectos de interfaz, las animaciones y crear experiencias de usuario dinámicas e intuitivas."
                  />
               </div>
               <div className="submit-btn mt-25">
                  <button type="submit" className="btn">
                     Actualizar información
                  </button>
               </div>
            </form>
         </div>
      </>
   );
};

export default InstructorSettingProfile;
