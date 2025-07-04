import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VideoPopup from "@/modals/VideoPopup";

import icon_1 from "@/assets/img/icons/lock.svg";
import { Course } from "@/zustand/interfaces/course.interface";

interface Props {
  course: Course | null | undefined;
}

const Curriculum = ({ course }: Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="courses__curriculum-wrap">
        <h3 className="title">Plan de Estudios</h3>
        <p>
          Este curso está organizado en módulos para facilitar tu aprendizaje progresivo. Cada sección incluye videos explicativos y materiales complementarios.
        </p>

        <div className="accordion" id="accordionExample">
          {course?.sections?.map((section, index) => (
            <div key={section.id} className="accordion-item">
              <h2 className="accordion-header" id={`heading${section.id}`}>
                <button
                  className={`accordion-button ${index > 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${section.id}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${section.id}`}
                >
                  {section.name}
                </button>
              </h2>

              <div
                id={`collapse${section.id}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`heading${section.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ul className="list-wrap">
                    {section.lessons.map((lesson, i) => (
                      <li
                        key={lesson.id}
                        className={`course-item ${i === 0 ? "open-item" : ""}`}
                      >
                        <a
                          onClick={() => setIsVideoOpen(true)}
                          style={{ cursor: "pointer" }}
                          className="course-item-link popup-video"
                        >
                          <span className="item-name">{lesson.name}</span>
                          <div className="course-item-meta">
                            {/* Si tuvieras duración podrías incluirla aquí */}
                            {/* <span className="item-meta duration">03:03</span> */}
                            <span className="item-meta course-item-status">
                              <Image src={icon_1} alt="Bloqueado" />
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"qeureCudfAU"} // Puedes reemplazar por el `lesson.url` si haces que se abra uno específico
      />
    </>
  );
};

export default Curriculum;
