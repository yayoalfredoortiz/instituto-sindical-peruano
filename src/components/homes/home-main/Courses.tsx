"use client";

import Image from "next/image";
import Link from "next/link";
import BtnArrow from "@/svg/BtnArrow";
import InjectableSvg from "@/hooks/InjectableSvg";
import { useDispatch } from "react-redux";
import { addToWishlist } from "@/redux/features/wishlistSlice";
import course_data from "@/data/home-data/CourseDataTwo";
import { useCourseStore } from "@/zustand/stores/course.store";

const Courses = () => {
   const dispatch = useDispatch();
   const { data: storeCourses } = useCourseStore();

   const handleAddToWishlist = (item: any) => {
      dispatch(addToWishlist(item));
   };

   const fallbackCourses = course_data.filter((item) => item.page === "home_7");

   const combinedCourses = storeCourses.length > 0
      ? storeCourses.slice(0, 8).map((course, idx) => {
         const fallback = fallbackCourses[idx % fallbackCourses.length];
         return {
            id: course.id,
            page: "home_7",
            thumb: fallback.thumb,
            tag: course.category?.name || fallback.tag,
            review: "(4.8 Reviews)",
            title: course.title,
            slug: course.slug,
            price: course.price,
            reviews_count: course.reviews_count,
            lesson: `${course.lessons_count ?? 0} Lecciones`,
            student: `${course.students_count} Estudiantes`,
         };
      })
      : fallbackCourses;

   return (
      <section className="courses-area-six grey-bg-two">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6">
                  <div className="section__title text-center mb-50">
                     <h2 className="title bold">Nuestros Cursos Más Populares</h2>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {combinedCourses.map((item) => (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                     <div className="courses__item-eight shine__animate-item">
                        <div className="courses__item-thumb-seven shine__animate-link">
                           <Link href={`/course-details/${item.slug}`}>
                              <Image
                                 src={item.thumb}
                                 alt={item.title}
                                 width={500}
                                 height={300}
                                 style={{ width: "100%", height: "auto" }}
                              />
                           </Link>
                           {item.tag && (
                              <Link href="/courses" className="courses__item-tag-three">
                                 {item.tag}
                              </Link>
                           )}
                        </div>
                        <div className="courses__item-content-seven">
                           <ul className="courses__item-meta list-wrap">
                              <li className="price">{item.price>0?`$${item.price}`:'Gratis'}</li>
                              <li className="courses__wishlist">
                                 <a onClick={() => handleAddToWishlist(item)}>
                                    <InjectableSvg
                                       src="/assets/img/icons/heart02.svg"
                                       alt="wishlist"
                                       className="injectable"
                                    />
                                 </a>
                              </li>
                           </ul>
                           <h2 className="title">
                              <Link href={`/course-details/${item.slug}`}>{item.title}</Link>
                           </h2>
                           <div className="courses__review">
                              <div className="rating">
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                                 <i className="fas fa-star"></i>
                              </div>
                              <span>{item.review}</span>
                           </div>
                        </div>
                        <div className="courses__item-bottom-three courses__item-bottom-five">
                           <ul className="list-wrap">
                              <li>
                                 <i className="flaticon-book"></i> {item.lesson}
                              </li>
                              <li>
                                 <i className="skillgro-group"></i> {item.student}
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="discover-courses-btn text-center mt-30">
               <Link href="/courses" className="btn arrow-btn btn-four">
                  Ver Todo <BtnArrow />
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Courses;
