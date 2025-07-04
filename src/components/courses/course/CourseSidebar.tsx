import { selectCourses } from "@/redux/features/courseSlice";
import { useCourseCategoryStore } from "@/zustand/stores/course-category.store";
import { useCourseLevelStore } from "@/zustand/stores/course-level.store";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Rating } from 'react-simple-star-rating';

const CourseSidebar = ({ setCourses }: any) => {

   const [mostrarMásCategorías, setMostrarMásCategorías] = useState(false);
   const [mostrarMásIdiomas, setMostrarMásIdiomas] = useState(false);
   const [mostrarMásInstructores, setMostrarMásInstructores] = useState(false);

   const [categoríaSeleccionada, setCategoríaSeleccionada] = useState('');
   const [idiomaSeleccionado, setIdiomaSeleccionado] = useState('');
   const [precioSeleccionado, setPrecioSeleccionado] = useState('');
   const [nivelSeleccionado, setNivelSeleccionado] = useState('');
   const [instructorSeleccionado, setInstructorSeleccionado] = useState('');
   const [valoraciónSeleccionada, setValoraciónSeleccionada] = useState<number | null>(null);

   // ✅ Obtenemos las categorías desde Zustand
   const categories = useCourseCategoryStore((state) => state.data);
   const categorías = categories.map(cat => cat.name ?? 'Sin nombre');

   // ✅ Obtenemos los niveles desde Zustand
   const levels = useCourseLevelStore((state) => state.data);
   const niveles = levels.map(level => level.name ?? 'Sin nombre');

   const idiomas = useSelector(selectCourses).map(course => course.language);
   const precios = useSelector(selectCourses).map(course => course.price_type);
   const instructores = useSelector(selectCourses).map(course => course.instructors);

   const todasLasCategorías = ['Todas las categorías', ...new Set(categorías)];
   const todosLosIdiomas = ['Todos los idiomas', ...new Set(idiomas)];
   // const todosLosPrecios = ['Todos los precios', ...new Set(precios)];
   const todosLosNiveles = ['Todos los niveles', ...new Set(niveles)];
   const todosLosInstructores = ['Todos los instructores', ...new Set(instructores)];

   const todosLosCursos = useSelector(selectCourses);

   const todosLosPrecios = ['Todos los precios', 'Gratuito', 'De pago'];

   const filtrarCursos = ({ category, language, price, rating, skill, instructor }: any) => {
      let cursosFiltrados = todosLosCursos;

      if (category && category !== 'Todas las categorías') {
         cursosFiltrados = cursosFiltrados.filter(course => course.category === category);
      }

      if (language && language !== 'Todos los idiomas') {
         cursosFiltrados = cursosFiltrados.filter(course => course.language === language);
      }

      if (price && price !== 'Todos los precios') {
         cursosFiltrados = cursosFiltrados.filter(course => course.price_type === price);
      }

      if (skill && skill !== 'Todos los niveles') {
         cursosFiltrados = cursosFiltrados.filter(course => course.skill_level === skill);
      }

      if (instructor && instructor !== 'Todos los instructores') {
         cursosFiltrados = cursosFiltrados.filter(course => course.instructors === instructor);
      }

      if (rating) {
         cursosFiltrados = cursosFiltrados.filter(course => course.rating >= rating);
      }

      setCourses(cursosFiltrados);
   };

   const manejarCategoría = (cat: string) => {
      setCategoríaSeleccionada(prev => prev === cat ? '' : cat);
      filtrarCursos({ category: cat === categoríaSeleccionada ? '' : cat, language: idiomaSeleccionado, price: precioSeleccionado, rating: valoraciónSeleccionada, skill: nivelSeleccionado, instructor: instructorSeleccionado });
   };

   const manejarIdioma = (lang: string) => {
      setIdiomaSeleccionado(prev => prev === lang ? '' : lang);
      filtrarCursos({ category: categoríaSeleccionada, language: lang === idiomaSeleccionado ? '' : lang, price: precioSeleccionado, rating: valoraciónSeleccionada, skill: nivelSeleccionado, instructor: instructorSeleccionado });
   };

   const manejarPrecio = (precio: string) => {
      setPrecioSeleccionado(prev => prev === precio ? '' : precio);
      filtrarCursos({ category: categoríaSeleccionada, language: idiomaSeleccionado, price: precio === precioSeleccionado ? '' : precio, rating: valoraciónSeleccionada, skill: nivelSeleccionado, instructor: instructorSeleccionado });
   };

   const manejarNivel = (nivel: string) => {
      setNivelSeleccionado(prev => prev === nivel ? '' : nivel);
      filtrarCursos({ category: categoríaSeleccionada, language: idiomaSeleccionado, price: precioSeleccionado, skill: nivel === nivelSeleccionado ? '' : nivel, rating: valoraciónSeleccionada, instructor: instructorSeleccionado });
   };

   const manejarInstructor = (instructor: string) => {
      setInstructorSeleccionado(instructor);
      filtrarCursos({ category: categoríaSeleccionada, language: idiomaSeleccionado, price: precioSeleccionado, rating: valoraciónSeleccionada, skill: nivelSeleccionado, instructor });
   };

   const manejarValoración = (rating: number) => {
      setValoraciónSeleccionada(prev => prev === rating ? null : rating);
      filtrarCursos({ category: categoríaSeleccionada, language: idiomaSeleccionado, price: precioSeleccionado, rating: rating === valoraciónSeleccionada ? null : rating, skill: nivelSeleccionado, instructor: instructorSeleccionado });
   };

   const categoríasVisibles = mostrarMásCategorías ? todasLasCategorías : todasLasCategorías.slice(0, 8);
   const idiomasVisibles = mostrarMásIdiomas ? todosLosIdiomas : todosLosIdiomas.slice(0, 4);
   const instructoresVisibles = mostrarMásInstructores ? todosLosInstructores : todosLosInstructores.slice(0, 4);

   return (
      <div className="col-xl-3 col-lg-4">
         <aside className="courses__sidebar">

            {/* Categorías */}
            <div className="courses-widget">
               <h4 className="widget-title">Categorías</h4>
               <div className="courses-cat-list">
                  <ul className="list-wrap">
                     {categoríasVisibles.map((cat, i) => (
                        <li key={i}>
                           <div onClick={() => manejarCategoría(cat)} className="form-check">
                              <input className="form-check-input" type="checkbox" checked={cat === categoríaSeleccionada} readOnly id={`cat_${i}`} />
                              <label className="form-check-label" htmlFor={`cat_${i}`}>{cat}</label>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <div className="show-more">
                     <a className={`show-more-btn ${mostrarMásCategorías ? 'active' : ''}`} style={{ cursor: "pointer" }} onClick={() => setMostrarMásCategorías(!mostrarMásCategorías)}>
                        {mostrarMásCategorías ? "Mostrar menos -" : "Mostrar más +"}
                     </a>
                  </div>
               </div>
            </div>

            {/* Idiomas */}
            {/* <div className="courses-widget">
               <h4 className="widget-title">Idiomas</h4>
               <div className="courses-cat-list">
                  <ul className="list-wrap">
                     {idiomasVisibles.map((lang, i) => (
                        <li key={i}>
                           <div onClick={() => manejarIdioma(lang)} className="form-check">
                              <input className="form-check-input" type="checkbox" checked={lang === idiomaSeleccionado} readOnly id={`lang_${i}`} />
                              <label className="form-check-label" htmlFor={`lang_${i}`}>{lang}</label>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <div className="show-more">
                     <a className={`show-more-btn ${mostrarMásIdiomas ? 'active' : ''}`} style={{ cursor: "pointer" }} onClick={() => setMostrarMásIdiomas(!mostrarMásIdiomas)}>
                        {mostrarMásIdiomas ? "Mostrar menos -" : "Mostrar más +"}
                     </a>
                  </div>
               </div>
            </div> */}

            {/* Precio */}
            <div className="courses-widget">
               <h4 className="widget-title">Precio</h4>
               <div className="courses-cat-list">
                  <ul className="list-wrap">
                     {todosLosPrecios.map((precio, i) => (
                        <li key={i}>
                           <div onClick={() => manejarPrecio(precio)} className="form-check">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 checked={precio === precioSeleccionado}
                                 readOnly
                                 id={`price_${i}`}
                              />
                              <label className="form-check-label" htmlFor={`price_${i}`}>{precio}</label>
                           </div>
                        </li>
                     ))}
                     {/* {todosLosPrecios.map((precio, i) => (
                        <li key={i}>
                           <div onClick={() => manejarPrecio(precio)} className="form-check">
                              <input className="form-check-input" type="checkbox" checked={precio === precioSeleccionado} readOnly id={`price_${i}`} />
                              <label className="form-check-label" htmlFor={`price_${i}`}>{precio}</label>
                           </div>
                        </li>
                     ))} */}
                  </ul>
               </div>
            </div>

            {/* Nivel de habilidad */}
            <div className="courses-widget">
               <h4 className="widget-title">Nivel</h4>
               <div className="courses-cat-list">
                  <ul className="list-wrap">
                     {todosLosNiveles.map((nivel, i) => (
                        <li key={i}>
                           <div onClick={() => manejarNivel(nivel)} className="form-check">
                              <input className="form-check-input" type="checkbox" checked={nivel === nivelSeleccionado} readOnly id={`skill_${i}`} />
                              <label className="form-check-label" htmlFor={`skill_${i}`}>{nivel}</label>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Instructores */}
            {/* <div className="courses-widget">
               <h4 className="widget-title">Instructores</h4>
               <div className="courses-cat-list">
                  <ul className="list-wrap">
                     {instructoresVisibles.map((inst, i) => (
                        <li key={i}>
                           <div onClick={() => manejarInstructor(inst)} className="form-check">
                              <input className="form-check-input" type="checkbox" checked={inst === instructorSeleccionado} readOnly id={`instructor_${i}`} />
                              <label className="form-check-label" htmlFor={`instructor_${i}`}>{inst}</label>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <div className="show-more">
                     <a className={`show-more-btn ${mostrarMásInstructores ? 'active' : ''}`} style={{ cursor: "pointer" }} onClick={() => setMostrarMásInstructores(!mostrarMásInstructores)}>
                        {mostrarMásInstructores ? "Mostrar menos -" : "Mostrar más +"}
                     </a>
                  </div>
               </div>
            </div> */}

            {/* Valoraciones */}
            <div className="courses-widget">
               <h4 className="widget-title">Valoraciones</h4>
               <div className="courses-rating-list">
                  <ul className="list-wrap">
                     {[5, 4, 3, 2, 1].map((rating, i) => (
                        <li key={i}>
                           <div onClick={() => manejarValoración(rating)} className="form-check">
                              <input className="form-check-input" type="checkbox" checked={rating === valoraciónSeleccionada} readOnly id={`rating_${i}`} />
                              <label className="form-check-label" htmlFor={`rating_${i}`}>
                                 <div className="rating">
                                    <Rating initialValue={rating} size={20} readonly />
                                 </div>
                              </label>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </aside>
      </div>
   );
};

export default CourseSidebar;
