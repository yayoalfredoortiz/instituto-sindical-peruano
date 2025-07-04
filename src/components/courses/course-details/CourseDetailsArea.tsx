"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Overview from "./Overview"
import Sidebar from "./Sidebar"
import Curriculum from "./Curriculum"
import Reviews from "./Reviews"
import Instructors from "./Instructors"

import course_details_img1 from "@/assets/img/courses/courses_details.jpg"
import course_details_img2 from "@/assets/img/courses/course_author001.png"
import { useCourseStore } from "@/zustand/stores/course.store"

const tab_title: string[] = ["Descripción general", "Plan de estudios", "Instructores", "Reseñas"]

type CourseDetailsProps = {
  courseId: string;
};

const CourseDetailsArea = ({courseId}:CourseDetailsProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const { getById, item } = useCourseStore()

  useEffect(() => {
    if (courseId) {
      getById(String(courseId))
    }
  }, [courseId])

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  const course = item 

  return (
    <section className="courses__details-area section-py-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="courses__details-thumb">
              <Image src={course_details_img1} alt="imagen" />
            </div>
            <div className="courses__details-content">
              <ul className="courses__item-meta list-wrap">
                <li className="courses__item-tag">
                  <Link href="/course">{course?.category?.name || "Desarrollo"}</Link>
                </li>
                <li className="avg-rating">
                  <i className="fas fa-star"></i>
                  {course?.reviews_count ? `(4.8 Reseñas)` : "(4.5 Reseñas)"}
                </li>
              </ul>
              <h2 className="title">
                {course?.title || "Resolviendo conflictos entre diseñadores e ingenieros"}
              </h2>
              <div className="courses__details-meta">
                <ul className="list-wrap">
                  <li className="author-two">
                    <Image src={course_details_img2} alt="imagen" />
                    Por <Link href="#">{course?.teacher?.name || "David Millar"}</Link>
                  </li>
                  <li className="date"><i className="flaticon-calendar"></i>{new Date(course?.created_at || '2024-07-24').toLocaleDateString()}</li>
                  <li><i className="flaticon-mortarboard"></i>{course?.students_count} Estudiantes</li>
                </ul>
              </div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tab_title.map((tab, index) => (
                  <li key={index} onClick={() => handleTabClick(index)} className="nav-item" role="presentation">
                    <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`}>
                  <Overview course={course} />
                </div>
                <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`}>
                  <Curriculum course={course} />
                </div>
                <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`}>
                  <Instructors teacher={course?.teacher} />
                </div>
                <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`}>
                  <Reviews course={course} />
                </div>
              </div>
            </div>
          </div>
          <Sidebar course={course} />
        </div>
      </div>
    </section>
  )
}

export default CourseDetailsArea

// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react";
// import Overview from "./Overview";
// import Sidebar from "./Sidebar";
// import Curriculum from "./Curriculum"
// import Reviews from "./Reviews"
// import Instructors from "./Instructors"

// import course_details_img1 from "@/assets/img/courses/courses_details.jpg"
// import course_details_img2 from "@/assets/img/courses/course_author001.png"

// // Traducción de los títulos de pestañas
// const tab_title: string[] = ["Descripción general", "Plan de estudios", "Instructores", "Reseñas"];

// const CourseDetailsArea = ({ single_course }: any) => {

//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabClick = (index: any) => {
//     setActiveTab(index);
//   };

//   return (
//     <section className="courses__details-area section-py-120">
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-9 col-lg-8">
//             <div className="courses__details-thumb">
//               <Image src={course_details_img1} alt="imagen" />
//             </div>
//             <div className="courses__details-content">
//               <ul className="courses__item-meta list-wrap">
//                 <li className="courses__item-tag">
//                   <Link href="/course">{single_course?.category ? single_course.category : "Desarrollo"}</Link>
//                 </li>
//                 <li className="avg-rating">
//                   <i className="fas fa-star"></i>
//                   {single_course?.rating ? single_course.rating : "(4.5 Reseñas)"}
//                 </li>
//               </ul>
//               <h2 className="title">
//                 {single_course?.title ? single_course.title : "Resolviendo conflictos entre diseñadores e ingenieros"}
//               </h2>
//               <div className="courses__details-meta">
//                 <ul className="list-wrap">
//                   <li className="author-two">
//                     <Image src={course_details_img2} alt="imagen" />
//                     Por <Link href="#">{single_course?.instructors ? single_course.instructors : "David Millar"}</Link>
//                   </li>
//                   <li className="date"><i className="flaticon-calendar"></i>24/07/2024</li>
//                   <li><i className="flaticon-mortarboard"></i>2,250 Estudiantes</li>
//                 </ul>
//               </div>
//               <ul className="nav nav-tabs" id="myTab" role="tablist">
//                 {tab_title.map((tab, index) => (
//                   <li key={index} onClick={() => handleTabClick(index)} className="nav-item" role="presentation">
//                     <button className={`nav-link ${activeTab === index ? "active" : ""}`}>{tab}</button>
//                   </li>
//                 ))}
//               </ul>
//               <div className="tab-content" id="myTabContent">
//                 <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab">
//                   <Overview />
//                 </div>
//                 <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="curriculum-tab-pane" role="tabpanel" aria-labelledby="curriculum-tab">
//                   <Curriculum />
//                 </div>
//                 <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="instructors-tab-pane" role="tabpanel" aria-labelledby="instructors-tab">
//                   <Instructors />
//                 </div>
//                 <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`} id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab">
//                   <Reviews />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Sidebar />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CourseDetailsArea
