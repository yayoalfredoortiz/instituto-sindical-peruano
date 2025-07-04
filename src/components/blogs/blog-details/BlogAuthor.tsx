import Image from "next/image"
import Link from "next/link"

import img from "@/assets/img/blog/author.png"

const BlogAuthor = () => {
   return (
      <div className="blog__post-author">
         <div className="blog__post-author-thumb">
            <Link href="#"><Image src={img} alt="Instructor legal" /></Link>
         </div>
         <div className="blog__post-author-content">
            <span className="designation">Abogado</span>
            <h5 className="name">Brooklyn Simmons</h5>
            <p>Agradecemos mucho tu confianza. Nuestros clientes valoran la dedicación y profesionalismo en cada asesoría legal que brindamos, con un enfoque personalizado y ético.</p>
         </div>
      </div>
   )
}

export default BlogAuthor
