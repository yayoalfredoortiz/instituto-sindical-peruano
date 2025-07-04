'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CourseSidebar from './CourseSidebar';
import CourseTop from './CourseTop';
import { useCourseStore } from '@/zustand/stores/course.store';
import course_data from '@/data/home-data/CourseDataTwo';
import { useCourseCategoryStore } from '@/zustand/stores/course-category.store';
import Loading from '@/components/common/Loading';
import { useCourseLevelStore } from '@/zustand/stores/course-level.store';

const CourseArea = () => {
   const {
      data: storeCourses,
      page,
      perPage,
      count,
      getAll,
      setPage,
      loaded
   } = useCourseStore();

   const getAllCategories = useCourseCategoryStore((state) => state.getAll);
   const loadedCategories = useCourseCategoryStore((state) => state.loaded);

   const getAllLevels = useCourseLevelStore((state) => state.getAll);
   const loadedLevels = useCourseLevelStore((state) => state.loaded);

   const fallbackCourses = course_data.filter((item) => item.page === 'home_7');

   const combinedCourses = storeCourses.length > 0
      ? storeCourses.map((course, idx) => {
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
      })
      : fallbackCourses;

   useEffect(() => {
      if (!loaded) getAll(page, perPage);
      if (!loadedCategories) getAllCategories(1, 20);
      if (!loadedLevels) getAllLevels(1, 20);
   }, [page, perPage, loaded]);

   const handlePageClick = (event: any) => {
      setPage(event.selected + 1);
   };

   const [activeTab, setActiveTab] = useState(0);
   const handleTabClick = (index: number) => setActiveTab(index);

   if (!loaded || !loadedCategories || !loadedLevels) {
      return <Loading />;
   }

   const currentItems = combinedCourses.slice((page - 1) * perPage, page * perPage);

   return (
      <section className="all-courses-area section-py-120">
         <div className="container">
            <div className="row">
               <CourseSidebar setCourses={() => { }} />
               <div className="col-xl-9 col-lg-8">
                  <CourseTop
                     startOffset={(page - 1) * perPage + 1}
                     endOffset={Math.min(page * perPage, combinedCourses.length)}
                     totalItems={combinedCourses.length}
                     setCourses={() => { }}
                     handleTabClick={handleTabClick}
                     activeTab={activeTab}
                  />
                  <div className="tab-content" id="myTabContent">
                     <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="grid" role="tabpanel">
                        <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                           {currentItems.map((item) => (
                              <div key={item.id} className="col">
                                 <div className="courses__item shine__animate-item">
                                    <div className="courses__item-thumb">
                                       <Link href={`/course-details/${item.slug}`} className="shine__animate-link">
                                          <Image src={item.thumb} alt="imagen del curso" width={400} height={250} />
                                       </Link>
                                    </div>
                                    <div className="courses__item-content">
                                       <ul className="courses__item-meta list-wrap">
                                          <li className="courses__item-tag">
                                             <Link href="/course">{item.category}</Link>
                                          </li>
                                          <li className="avg-rating"><i className="fas fa-star"></i> ({item.reviews_count} Reseñas)</li>
                                       </ul>
                                       <h5 className="title">
                                          <Link href={`/course-details/${item.slug}`}>{item.title}</Link>
                                       </h5>
                                       <p className="author">Por <Link href="#">{item.teacher}</Link></p>
                                       <div className="courses__item-bottom">
                                          <div className="button">
                                             <Link href={`/course-details/${item.slug}`}>
                                                <span className="text">Inscribirse</span>
                                                <i className="flaticon-arrow-right"></i>
                                             </Link>
                                          </div>
                                          <h5 className="price">{item.price > 0 ? `$${item.price}.00` : 'Gratis'}</h5>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
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

                     <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="list" role="tabpanel">
                        <div className="row courses__list-wrap row-cols-1">
                           {currentItems.map((item) => (
                              <div key={item.id} className="col">
                                 <div className="courses__item courses__item-three shine__animate-item">
                                    <div className="courses__item-thumb">
                                       <Link href={`/course-details/${item.slug}`} className="shine__animate-link">
                                          <Image src={item.thumb} alt="imagen del curso" width={400} height={250} />
                                       </Link>
                                    </div>
                                    <div className="courses__item-content">
                                       <ul className="courses__item-meta list-wrap">
                                          <li className="courses__item-tag">
                                             <Link href="/course">{item.category}</Link>
                                          </li>
                                          <li className="price">{item.price > 0 ? `$${item.price}.00` : 'Gratis'}</li>
                                       </ul>
                                       <h5 className="title"><Link href={`/course-details/${item.slug}`}>{item.title}</Link></h5>
                                       <p className="author">Por <Link href="#">{item.teacher}</Link></p>
                                       <p className="info">{item.desc}</p>
                                       <div className="courses__item-bottom">
                                          <div className="button">
                                             <Link href={`/course-details/${item.slug}`}>
                                                <span className="text">Inscribirse</span>
                                                <i className="flaticon-arrow-right"></i>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
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
                  </div>
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
