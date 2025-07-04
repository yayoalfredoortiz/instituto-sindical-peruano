'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import BlogAuthor from "./BlogAuthor";
import BlogPostComment from "./BlogPostComment";
import BlogForm from "@/forms/BlogForm";
import BlogSidebar from "../blog-common/BlogSidebar";

import blog_img1 from "@/assets/img/blog/blog_details.jpg";
import { useArticleStore } from "@/zustand/stores/article.store";
import Loading from "@/components/common/Loading";
import { useArticleCategoryStore } from "@/zustand/stores/article-category.store";

type BlogDetailsAreaProps = {
   articleId: string;
};

const BlogDetailsArea = ({ articleId }: BlogDetailsAreaProps) => {
   const getById = useArticleStore((state) => state.getById);
   const item = useArticleStore((state) => state.item);
   const loading = useArticleStore((state) => state.loading);

   const getAllArticle = useArticleCategoryStore((state) => state.getAll);
   const loadedArticle = useArticleCategoryStore((state) => state.loaded);

   useEffect(() => {
      if (articleId) {
         getById(articleId);
      }
      if (!loadedArticle) getAllArticle(1, 20);
   }, [articleId]);

   if (!item || loading || !loadedArticle) {
      return <Loading />;
   }

   return (
      <section className="blog-details-area section-py-120">
         <div className="container">
            <div className="row">
               <div className="col-xl-9 col-lg-8">
                  <div className="blog__details-wrapper">
                     <div className="blog__details-thumb">
                        <Image
                           src={item?.image?.url || blog_img1}
                           alt="imagen artículo legal"
                           width={800}
                           height={450}
                           className="w-100 h-auto"
                        />
                     </div>
                     <div className="blog__details-content">
                        <div className="blog__post-meta">
                           <ul className="list-wrap">
                              <li>
                                 <i className="flaticon-calendar"></i>{" "}
                                 {new Date(item.published_at).toLocaleDateString("es-PE", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                 })}
                              </li>
                              <li>
                                 <i className="flaticon-user-1"></i><span>{item.author?.name || "Admin"}</span>
                              </li>
                              <li>
                                 <i className="flaticon-clock"></i>{" "}
                                 Lectura de {item.duration_minutes || 5} min
                              </li>
                              <li>
                                 <i className="far fa-comment-alt"></i> 05 Comentarios
                              </li>
                           </ul>
                        </div>

                        <h3 className="title">{item.art_title}</h3>

                        <div
                           className="prose max-w-none"
                           dangerouslySetInnerHTML={{
                              __html: item.body,
                           }}
                        />

                        <div className="blog__details-bottom mt-40">
                           <div className="row align-items-center">
                              <div className="col-xl-6 col-md-7">
                                 <div className="tg-post-tag">
                                    <h5 className="tag-title">Etiquetas :</h5>
                                    <ul className="list-wrap p-0 mb-0">
                                       <li>
                                          <Link href="#">
                                             {item.category?.ac_name || "Ética Legal"}
                                          </Link>
                                       </li>
                                       <li>
                                          <Link href="#">Desarrollo Profesional</Link>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <BlogAuthor />
                  <div className="blog-post-comment">
                     <BlogPostComment />
                     <BlogForm />
                  </div>
               </div>
               <BlogSidebar />
            </div>
         </div>
      </section>
   );
};

export default BlogDetailsArea;
