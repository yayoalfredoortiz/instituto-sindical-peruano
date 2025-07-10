'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCourseCategoryStore } from '@/zustand/stores/course-category.store';
import { useCourseLevelStore } from '@/zustand/stores/course-level.store';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

type Props = {
  onClearFilters?: () => void;
};

const CourseSidebar = ({ onClearFilters }: Props) => {
   const router = useRouter();
   const pathname = usePathname();
   const searchParams = useSearchParams();

   const [mostrarMásCategorías, setMostrarMásCategorías] = useState(false);

   const categoryIdRaw = searchParams.get('categoryId') ?? '';
   const selectedCategoryIds = categoryIdRaw.split(',').filter(Boolean); // ['1', '2']
   const levelId = searchParams.get('levelId') ?? '';
   const isPaid = searchParams.get('isPaid') ?? '';
   const rating = searchParams.get('rating') ?? '';

   const setParam = (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
         params.set(key, value);
      } else {
         params.delete(key);
      }
      router.push(`${pathname}?${params.toString()}`);
   };

   const manejarCategoría = (id: string) => {
      const current = selectedCategoryIds;
      const exists = current.includes(id);
      const updated = exists ? current.filter(c => c !== id) : [...current, id];
      const value = updated.length > 0 ? updated.join(',') : null;
      setParam('categoryId', value);
   };

   const manejarNivel = (id: string) => {
      const selected = levelId === id ? null : id;
      setParam('levelId', selected);
   };

   const manejarPrecio = (precio: string) => {
      let value: string | null = null;
      if (precio === 'Gratuito') value = '0';
      else if (precio === 'De pago') value = '1';
      const selected = isPaid === value ? null : value;
      setParam('isPaid', selected);
   };

   const manejarValoración = (valor: number) => {
      const val = rating === valor.toString() ? null : valor.toString();
      setParam('rating', val);
   };

   const resetFiltros = () => {
      router.push(pathname);
      onClearFilters?.();
   };

   const categories = useCourseCategoryStore((state) => state.data);
   const levels = useCourseLevelStore((state) => state.data);

   const todosLosPrecios = ['Gratuito', 'De pago'];
   const categoríasVisibles = mostrarMásCategorías ? categories : categories.slice(0, 8);
   const nivelesVisibles = levels;

   return (
      <div className="col-xl-3 col-lg-4">
         <aside className="courses__sidebar">
            <div className="mb-4 text-end">
               <button onClick={resetFiltros} className="btn btn-sm btn-outline-dark">Limpiar filtros</button>
            </div>

            {/* Categorías */}
            <div className="courses-widget">
               <h4 className="widget-title">Categorías</h4>
               <div className="courses-cat-list">
                  <ul className="list-wrap">
                     {categoríasVisibles.map((cat, i) => (
                        <li key={cat.id}>
                           <div onClick={() => manejarCategoría(String(cat.id))} className="form-check">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 checked={selectedCategoryIds.includes(String(cat.id))}
                                 readOnly
                                 id={`cat_${i}`}
                              />
                              <label className="form-check-label" htmlFor={`cat_${i}`}>{cat.name}</label>
                           </div>
                        </li>
                     ))}
                  </ul>
                  {categories.length > 8 && (
                     <div className="show-more">
                        <a
                           onClick={() => setMostrarMásCategorías(!mostrarMásCategorías)}
                           className={`show-more-btn ${mostrarMásCategorías ? 'active' : ''}`}
                           style={{ cursor: 'pointer' }}
                        >
                           {mostrarMásCategorías ? 'Mostrar menos -' : 'Mostrar más +'}
                        </a>
                     </div>
                  )}
               </div>
            </div>

            {/* Precio */}
            <div className="courses-widget">
               <h4 className="widget-title">Precio</h4>
               <div className="courses-cat-list">
                  <ul className="list-wrap">
                     {todosLosPrecios.map((precio, i) => {
                        const valor = precio === 'Gratuito' ? '0' : '1';
                        return (
                           <li key={i}>
                              <div onClick={() => manejarPrecio(precio)} className="form-check">
                                 <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={isPaid === valor}
                                    readOnly
                                    id={`price_${i}`}
                                 />
                                 <label className="form-check-label" htmlFor={`price_${i}`}>{precio}</label>
                              </div>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>

            {/* Nivel */}
            <div className="courses-widget">
               <h4 className="widget-title">Nivel</h4>
               <div className="courses-cat-list">
                  <ul className="list-wrap">
                     {nivelesVisibles.map((nivel, i) => (
                        <li key={nivel.id}>
                           <div onClick={() => manejarNivel(String(nivel.id))} className="form-check">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 checked={levelId === String(nivel.id)}
                                 readOnly
                                 id={`nivel_${i}`}
                              />
                              <label className="form-check-label" htmlFor={`nivel_${i}`}>{nivel.name}</label>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Valoraciones */}
            {/* <div className="courses-widget">
               <h4 className="widget-title">Valoraciones</h4>
               <div className="courses-rating-list">
                  <ul className="list-wrap">
                     {[5, 4, 3, 2, 1].map((valor, i) => (
                        <li key={i}>
                           <div onClick={() => manejarValoración(valor)} className="form-check">
                              <input
                                 className="form-check-input"
                                 type="checkbox"
                                 checked={rating === valor.toString()}
                                 readOnly
                                 id={`rating_${i}`}
                              />
                              <label className="form-check-label" htmlFor={`rating_${i}`}>
                                 <div className="rating">
                                    <Rating initialValue={valor} size={20} readonly />
                                 </div>
                              </label>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div> */}
         </aside>
      </div>
   );
};

export default CourseSidebar;
