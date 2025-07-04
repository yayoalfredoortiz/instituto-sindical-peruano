import Image from "next/image"
import Link from "next/link"

import instructor_img from "@/assets/img/courses/course_instructors.png"
import { User } from "@/zustand/interfaces/user.interface";

interface Props {
   teacher: User | null | undefined;
}

const Instructors = ({ teacher }: Props) => {
   return (
      <div className="courses__instructors-wrap">
         <div className="courses__instructors-thumb">
            <Image src={instructor_img} alt="imagen de la instructora" />
         </div>
         <div className="courses__instructors-content">
            <h2 className="title">{teacher?.name}</h2>
            <span className="designation">Abogada especialista en Derecho Corporativo</span>
            <p className="avg-rating"><i className="fas fa-star"></i>(4.9 Valoraciones)</p>
            <p>
               La Dra. Laura Méndez es una reconocida abogada con más de 15 años de experiencia en derecho corporativo y formación jurídica. Ha asesorado a importantes empresas y ofrece este curso para compartir sus conocimientos prácticos y actualizados en el área legal.
            </p>
            {/* <div className="instructor__social">
               <ul className="list-wrap justify-content-start">
                  <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-whatsapp"></i></Link></li>
                  <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
               </ul>
            </div> */}
         </div>
      </div>
   )
}

export default Instructors
