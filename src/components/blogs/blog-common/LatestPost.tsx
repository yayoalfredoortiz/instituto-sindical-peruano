import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import blog_img1 from "@/assets/img/blog/latest_post04.jpg";
import blog_img2 from "@/assets/img/blog/latest_post02.jpg";
import blog_img3 from "@/assets/img/blog/latest_post03.jpg";
import blog_img4 from "@/assets/img/blog/latest_post04.jpg";
import { useArticleStore } from "@/zustand/stores/article.store";
import blog_data from "@/data/home-data/BlogData";
import { useEffect } from "react";

interface DataType {
   id: number;
   thumb: StaticImageData;
   date: string;
   title: string;
}[];

const latest_post_data: DataType[] = [
   {
      id: 1,
      thumb: blog_img1,
      date: "13 Abril, 2024",
      title: "Cómo elegir la estrategia legal adecuada",
   },
   {
      id: 2,
      thumb: blog_img2,
      date: "10 Abril, 2024",
      title: "Nuevas regulaciones en derecho laboral 2024",
   },
   {
      id: 3,
      thumb: blog_img3,
      date: "05 Abril, 2024",
      title: "Guía para la defensa en casos penales",
   },
   {
      id: 4,
      thumb: blog_img4,
      date: "01 Abril, 2024",
      title: "Aspectos clave del derecho mercantil internacional",
   },
];

const fallbackPool = blog_data.filter((item) => item.page === "home_6");

const LatestPost = () => {

   const {
      data: articles,
      count,
      getAll,
      loading,
      page,
      perPage,
      setPage,
      loaded,
   } = useArticleStore();

   useEffect(() => {
      if (!loaded) getAll(
         page,
         perPage
      );
   }, [page, perPage]);

   const getRandomFallback = () =>
      fallbackPool[Math.floor(Math.random() * fallbackPool.length)];

   const mappedArticles = articles
      .slice(0, 4)
      .map((article) => {
         const fallback = getRandomFallback();

         return {
            id: article.id,
            title: article.art_title,
            slug: article.art_slug,
            author: article.author?.name || 'Admin',
            tag: article.category?.ac_name || fallback?.tag || 'Legal',
            date: new Date(article.published_at).toLocaleDateString('es-PE', {
               year: 'numeric',
               month: 'long',
               day: 'numeric',
            }),
            imgSrc: article.image?.url || fallback?.thumb || '/img/blog/default.jpg',
         };
      });

   return (
      <div className="blog-widget">
         <h4 className="widget-title">Últimas Publicaciones</h4>
         {mappedArticles.map((item) => (
            <div key={item.id} className="rc-post-item">
               <div className="rc-post-thumb">
                  <Link href={`/blog/${item.slug}`}>
                     <Image src={item.imgSrc} alt="imagen del blog" />
                  </Link>
               </div>
               <div className="rc-post-content">
                  <span className="date"><i className="flaticon-calendar"></i> {item.date}</span>
                  <h4 className="title"><Link href={`/blog/${item.slug}`}>{item.title}</Link></h4>
               </div>
            </div>
         ))}
      </div>
   );
};

export default LatestPost;
