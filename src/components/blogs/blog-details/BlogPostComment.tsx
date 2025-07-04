import Image from "next/image"
import Link from "next/link"

import blog_details_img1 from "@/assets/img/blog/comment01.png"
import blog_details_img2 from "@/assets/img/blog/comment02.png"

const BlogPostComment = () => {
   return (
      <div className="comment-wrap">
         <div className="comment-wrap-title">
            <h4 className="title">02 Comentarios</h4>
         </div>
         <div className="latest-comments">
            <ul className="list-wrap">
               <li>
                  <div className="comments-box">
                     <div className="comments-avatar">
                        <Image src={blog_details_img1} alt="imagen comentario" />
                     </div>
                     <div className="comments-text">
                        <div className="avatar-name">
                           <h6 className="name">Jessica Rose</h6>
                           <span className="date">20 Julio, 2024</span>
                        </div>
                        <p>Este artículo me ha ayudado mucho a comprender los aspectos legales que desconocía. Aprecio la claridad y profundidad con la que se explican los conceptos.</p>
                        <div className="comment-reply">
                           <Link href="#" className="comment-reply-link">Responder</Link>
                        </div>
                     </div>
                  </div>
               </li>
               <li>
                  <div className="comments-box">
                     <div className="comments-avatar">
                        <Image src={blog_details_img2} alt="imagen comentario" />
                     </div>
                     <div className="comments-text">
                        <div className="avatar-name">
                           <h6 className="name">Parker Willy</h6>
                           <span className="date">20 Julio, 2024</span>
                        </div>
                        <p>Excelente explicación sobre temas legales complejos. Me gustaría ver más artículos como este para seguir aprendiendo.</p>
                        <div className="comment-reply">
                           <Link href="#" className="comment-reply-link">Responder</Link>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   )
}

export default BlogPostComment
