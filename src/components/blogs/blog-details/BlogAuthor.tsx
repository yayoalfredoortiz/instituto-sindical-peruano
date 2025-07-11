import Image from "next/image"
import Link from "next/link"

import img from "@/assets/img/blog/author.png"
import { User } from "@/zustand/interfaces/user.interface"

const BlogAuthor = ({ user }: { user: User }) => {
   return (
      <div className="blog__post-author">
         <div className="blog__post-author-thumb">
            <Link href="#"><Image src={img} alt="Instructor legal" /></Link>
         </div>
         <div className="blog__post-author-content">
            <span className="designation">Abogado</span>
            <h5 className="name">{user.name}</h5>
            <p>Agradecemos mucho tu confianza. Nuestros clientes valoran la dedicación y profesionalismo en cada asesoría legal que brindamos, con un enfoque personalizado y ético.</p>
         </div>
      </div>
   )
}

export default BlogAuthor
