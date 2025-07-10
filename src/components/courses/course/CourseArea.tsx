'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CourseSidebar from './CourseSidebar';
import CourseTop from './CourseTop';
import { useCourseStore } from '@/zustand/stores/course.store';
import { useCourseCategoryStore } from '@/zustand/stores/course-category.store';
import { useCourseLevelStore } from '@/zustand/stores/course-level.store';
import course_data from '@/data/home-data/CourseDataTwo';
import Loading from '@/components/common/Loading';

type Props = {
   search?: string;
   categoryIds: string[];
   levelId?: string;
   isPaid?: string;
};

const CourseArea = ({
   search,
   categoryIds,
   levelId,
   isPaid,
}: Props) => {
   const {
      data: storeCourses,
      page,
      perPage,
      count,
      getAll,
      setPage,
      loaded,
   } = useCourseStore();

   const getAllCategories = useCourseCategoryStore((s) => s.getAll);
   const loadedCategories = useCourseCategoryStore((s) => s.loaded);

   const getAllLevels = useCourseLevelStore((s) => s.getAll);
   const loadedLevels = useCourseLevelStore((s) => s.loaded);

   const [localSearch, setLocalSearch] = useState(search || '');
   const [activeTab, setActiveTab] = useState(0);

   const fallbackCourses = course_data.filter((item) => item.page === 'home_7');

   const combinedCourses = storeCourses.map((course, idx) => {
      const fallback = fallbackCourses[idx % fallbackCourses.length];
      return {
         id: course.id,
         title: course.title,
         slug: course.slug,
         price: course.price,
         thumb: fallback.thumb,
         category: course.category?.name || fallback.tag,
         reviews_count: course.reviews_count || 0,
         teacher: course.teacher?.name || 'Instructor',
         desc: course.description || fallback.desc,
      };
   });

   const currentItems = combinedCourses.slice((page - 1) * perPage, page * perPage);

   useEffect(() => {
      getAll(page, perPage, { search, categoryId: categoryIds, levelId, isPaid });
      if (!loadedCategories) getAllCategories(1, 20);
      if (!loadedLevels) getAllLevels(1, 20);
   }, [page, perPage, categoryIds, levelId, isPaid, search]);

   const clearSearch = () => {
      setLocalSearch('');
      setPage(1);
      getAll(1, perPage, {
         search: '',
         categoryId: categoryIds,
         levelId,
         isPaid,
      });
   };

   const handleSearchSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      getAll(1, perPage, {
         search: localSearch,
         categoryId: categoryIds,
         levelId,
         isPaid,
      });
      setPage(1);
   };

   const handlePageClick = (event: any) => {
      setPage(event.selected + 1);
   };

   if (!loaded || !loadedCategories || !loadedLevels) {
      return <Loading />;
   }

   const renderCourses = () =>
      currentItems.map((item) => (
         <div key={item.id} className="col">
            <div className={`courses__item ${activeTab === 1 ? 'courses__item-three' : ''} shine__animate-item`}>
               <div className="courses__item-thumb">
                  <Link href={`/course-details/${item.slug}`} className="shine__animate-link">
                     <Image src={item.thumb} alt="imagen del curso" width={400} height={250} />
                  </Link>
               </div>
               <div className="courses__item-content">
                  <ul className="courses__item-meta list-wrap">
                     <li className="courses__item-tag"><Link href="/course">{item.category}</Link></li>
                     {activeTab === 0 && (
                        <li className="avg-rating"><i className="fas fa-star"></i> ({item.reviews_count} Reseñas)</li>
                     )}
                     <li className="price">{item.price > 0 ? `$${item.price}.00` : 'Gratis'}</li>
                  </ul>
                  <h5 className="title"><Link href={`/course-details/${item.slug}`}>{item.title}</Link></h5>
                  <p className="author">Por <Link href="#">{item.teacher}</Link></p>
                  {activeTab === 1 && <p className="info">{item.desc}</p>}
                  <div className="courses__item-bottom">
                     <div className="button">
                        <Link href={`/course-details/${item.slug}`}>
                           <span className="text">Inscribirse</span>
                           <i className="flaticon-arrow-right"></i>
                        </Link>
                     </div>
                     {activeTab === 0 && (
                        <h5 className="price">{item.price > 0 ? `$${item.price}.00` : 'Gratis'}</h5>
                     )}
                  </div>
               </div>
            </div>
         </div>
      ));

   return (
      <section className="all-courses-area section-py-120">
         <div className="container">
            <div className="row">
               <CourseSidebar onClearFilters={clearSearch} />
               <div className="col-xl-9 col-lg-8">
                  <div className="mb-4">
                     <form onSubmit={handleSearchSubmit} className="slider__search-form d-flex">
                        <input
                           type="text"
                           placeholder="Buscar cursos..."
                           value={localSearch}
                           onChange={(e) => setLocalSearch(e.target.value)}
                           className="form-control me-2 input-primary-border"
                        />
                        <button type="submit" className="btn btn-primary">Buscar</button>
                     </form>
                  </div>

                  <CourseTop
                     startOffset={(page - 1) * perPage + 1}
                     endOffset={Math.min(page * perPage, combinedCourses.length)}
                     totalItems={combinedCourses.length}
                     setCourses={() => { }}
                     handleTabClick={setActiveTab}
                     activeTab={activeTab}
                  />

                  {combinedCourses.length === 0 ? (
                     <div className="text-center py-5">
                        <h3>No se encontraron cursos disponibles</h3>
                     </div>
                  ) : (
                     <div className="tab-content" id="myTabContent">
                        <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="grid" role="tabpanel">
                           <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                              {renderCourses()}
                           </div>
                        </div>
                        <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="list" role="tabpanel">
                           <div className="row courses__list-wrap row-cols-1">
                              {renderCourses()}
                           </div>
                        </div>
                        <nav className="pagination__wrap mt-30">
                           <ReactPaginate
                              breakLabel="..."
                              onPageChange={handlePageClick}
                              pageRangeDisplayed={3}
                              pageCount={Math.ceil(combinedCourses.length / perPage)}
                              forcePage={page - 1}
                              className="list-wrap"
                           />
                        </nav>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
};

export default CourseArea;

// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import ReactPaginate from 'react-paginate';
// import CourseSidebar from './CourseSidebar';
// import CourseTop from './CourseTop';
// import UseCourses from '@/hooks/UseCourses';

// const CourseArea = () => {

//    const { courses, setCourses } = UseCourses();

//    const itemsPerPage = 12;
//    const [itemOffset, setItemOffset] = useState(0);
//    const endOffset = itemOffset + itemsPerPage;
//    const currentItems = courses.slice(itemOffset, endOffset);
//    const pageCount = Math.ceil(courses.length / itemsPerPage);

//    const startOffset = itemOffset + 1;
//    const totalItems = courses.length;

//    useEffect(() => {}, [courses]);

//    const handlePageClick = (event: any) => {
//       const newOffset = (event.selected * itemsPerPage) % courses.length;
//       setItemOffset(newOffset);
//    };

//    const [activeTab, setActiveTab] = useState(0);

//    const handleTabClick = (index: any) => {
//       setActiveTab(index);
//    };

//    return (
//       <section className="all-courses-area section-py-120">
//          <div className="container">
//             <div className="row">
//                <CourseSidebar setCourses={setCourses} />
//                <div className="col-xl-9 col-lg-8">
//                   <CourseTop
//                      startOffset={startOffset}
//                      endOffset={Math.min(endOffset, totalItems)}
//                      totalItems={totalItems}
//                      setCourses={setCourses}
//                      handleTabClick={handleTabClick}
//                      activeTab={activeTab}
//                   />
//                   <div className="tab-content" id="myTabContent">
//                      <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="grid" role="tabpanel" aria-labelledby="grid-tab">
//                         <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
//                            {currentItems.map((item) => (
//                               <div key={item.id} className="col">
//                                  <div className="courses__item shine__animate-item">
//                                     <div className="courses__item-thumb">
//                                        <Link href={`/course-details/${item.id}`} className="shine__animate-link">
//                                           <Image src={item.thumb} alt="imagen del curso" />
//                                        </Link>
//                                     </div>
//                                     <div className="courses__item-content">
//                                        <ul className="courses__item-meta list-wrap">
//                                           <li className="courses__item-tag">
//                                              <Link href="/course">{item.category}</Link>
//                                           </li>
//                                           <li className="avg-rating"><i className="fas fa-star"></i> ({item.rating} Reseñas)</li>
//                                        </ul>
//                                        <h5 className="title">
//                                           <Link href={`/course-details/${item.id}`}>{item.title}</Link>
//                                        </h5>
//                                        <p className="author">Por <Link href="#">{item.instructors}</Link></p>
//                                        <div className="courses__item-bottom">
//                                           <div className="button">
//                                              <Link href={`/course-details/${item.id}`}>
//                                                 <span className="text">Inscribirse</span>
//                                                 <i className="flaticon-arrow-right"></i>
//                                              </Link>
//                                           </div>
//                                           <h5 className="price">${item.price}.00</h5>
//                                        </div>
//                                     </div>
//                                  </div>
//                               </div>
//                            ))}
//                         </div>
//                         <nav className="pagination__wrap mt-30">
//                            <ReactPaginate
//                               breakLabel="..."
//                               onPageChange={handlePageClick}
//                               pageRangeDisplayed={3}
//                               pageCount={pageCount}
//                               renderOnZeroPageCount={null}
//                               className="list-wrap"
//                            />
//                         </nav>
//                      </div>

//                      <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="list" role="tabpanel" aria-labelledby="list-tab">
//                         <div className="row courses__list-wrap row-cols-1">
//                            {currentItems.map((item) => (
//                               <div key={item.id} className="col">
//                                  <div className="courses__item courses__item-three shine__animate-item">
//                                     <div className="courses__item-thumb">
//                                        <a href={`/course-details/${item.id}`} className="shine__animate-link">
//                                           <Image src={item.thumb} alt="imagen del curso" />
//                                        </a>
//                                     </div>
//                                     <div className="courses__item-content">
//                                        <ul className="courses__item-meta list-wrap">
//                                           <li className="courses__item-tag">
//                                              <a href="/course">{item.category}</a>
//                                              <div className="avg-rating">
//                                                 <i className="fas fa-star"></i> ({item.rating} Reseñas)
//                                              </div>
//                                           </li>
//                                           <li className="price">${item.price}.00</li>
//                                        </ul>
//                                        <h5 className="title"><a href={`/course-details/${item.id}`}>{item.title}</a></h5>
//                                        <p className="author">Por <a href="#">{item.instructors}</a></p>
//                                        <p className="info">{item.desc}</p>
//                                        <div className="courses__item-bottom">
//                                           <div className="button">
//                                              <a href={`/course-details/${item.id}`}>
//                                                 <span className="text">Inscribirse</span>
//                                                 <i className="flaticon-arrow-right"></i>
//                                              </a>
//                                           </div>
//                                        </div>
//                                     </div>
//                                  </div>
//                               </div>
//                            ))}
//                         </div>
//                         <nav className="pagination__wrap mt-30">
//                            <ul className="list-wrap">
//                               <ReactPaginate
//                                  breakLabel="..."
//                                  onPageChange={handlePageClick}
//                                  pageRangeDisplayed={3}
//                                  pageCount={pageCount}
//                                  renderOnZeroPageCount={null}
//                                  className="list-wrap"
//                               />
//                            </ul>
//                         </nav>
//                      </div>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </section>
//    );
// };

// export default CourseArea;
