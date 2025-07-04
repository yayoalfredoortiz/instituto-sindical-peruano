'use client';

import { useArticleStore } from "@/zustand/stores/article.store";
import blog_data from "@/data/home-data/BlogData";
import Image from "next/image";
import Link from "next/link";
import BtnArrow from "@/svg/BtnArrow";

// Filtro solo de blog_data con page: home_6
const fallbackPool = blog_data.filter((item) => item.page === "home_6");

const Blog = () => {
   const articles = useArticleStore((state) => state.data);

   const getRandomFallback = () =>
      fallbackPool[Math.floor(Math.random() * fallbackPool.length)];

   const mappedArticles = articles
      .filter((a) => !!a.published_at)
      .map((article) => {
         const fallback = getRandomFallback();

         return {
            id: article.id,
            title: article.art_title,
            slug: article.art_slug,
            author: article.author?.name || "Admin",
            tag: article.category?.ac_name || fallback?.tag || "Legal",
            date:
               new Date(article.published_at).toLocaleDateString("es-PE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
               }) || fallback?.date,
            imgSrc: article.image?.url || fallback?.thumb || "/img/blog/default.jpg",
         };
      }).slice(0, 3);

   return (
      <section className="blog__post-area-six section-pt-140 section-pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6">
                  <div className="section__title text-center mb-50">
                     <h2 className="title">Últimas Noticias</h2>
                     <div className="small-border"></div>
                  </div>
               </div>
            </div>

            <div className="row justify-content-center">
               {mappedArticles.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="blog__post-item-four shine__animate-item">
                        <div className="blog__post-thumb">
                           <Link href={`/blog/${item.slug}`} className="shine__animate-link">
                              <Image
                                 src={item.imgSrc}
                                 alt={item.title}
                                 width={600}
                                 height={400}
                              />
                           </Link>
                           <Link href="/blog" className="post-tag">{item.tag}</Link>
                        </div>
                        <div className="blog__post-content-four">
                           <h2 className="title">
                              <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                           </h2>
                           <div className="blog__post-meta">
                              <ul className="list-wrap">
                                 <li>
                                    <i className="flaticon-user-1"></i>by{" "}
                                    <Link href={`/blog/${item.slug}`}>{item.author}</Link>
                                 </li>
                                 <li>
                                    <i className="flaticon-calendar"></i>{item.date}
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="discover-courses-btn text-center mt-30">
               <Link href="/blog" className="btn arrow-btn btn-four">Ver Todo <BtnArrow /></Link>
            </div>
         </div>
      </section>
   );
};

export default Blog;
