'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import BlogSidebar from '../blog-common/BlogSidebar';
import { useArticleStore } from '@/zustand/stores/article.store';
import blog_data from '@/data/home-data/BlogData';
import Loading from '@/components/common/Loading';
import { useArticleCategoryStore } from '@/zustand/stores/article-category.store';

const fallbackPool = blog_data.filter((item) => item.page === "home_6");

type BlogAreaProps = {
   style_1?: boolean;
   categoryId?: string;
   search?: string;
};

const BlogArea = ({ style_1, categoryId, search }: BlogAreaProps) => {
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

   const getAllCategories = useArticleCategoryStore((state) => state.getAll);
   const loadedCategories = useArticleCategoryStore((state) => state.loaded);

   useEffect(() => {
      if (!loaded) getAll(
         page,
         perPage,
         {
            categoryId: categoryId ? parseInt(categoryId) : undefined,
            search: search || undefined
         }
      );
      if (!loadedCategories) getAllCategories(1, 20);
   }, [page, perPage, categoryId, search]);

   const handlePageClick = (event: any) => {
      setPage(event.selected + 1);
   };

   if (loading || !loadedCategories) {
      return <Loading />;
   }

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
      <section className="blog-area section-py-120">
         <div className="container">
            <div className="row">
               <div className={`col-xl-9 col-lg-8 ${style_1 ? 'order-0 order-lg-2' : ''}`}>
                  <div className="row gutter-20">
                     {mappedArticles.map((item) => (
                        <div key={item.id} className="col-xl-4 col-md-6">
                           <div className="blog__post-item shine__animate-item">
                              <div className="blog__post-thumb">
                                 <Link href={`/blog/${item.slug}`} className="shine__animate-link">
                                    <Image src={item.imgSrc} alt="img" width={400} height={250} />
                                 </Link>
                                 <Link href="/blog" className="post-tag">{item.tag}</Link>
                              </div>
                              <div className="blog__post-content">
                                 <div className="blog__post-meta">
                                    <ul className="list-wrap">
                                       <li>
                                          <i className="flaticon-calendar"></i>
                                          {item.date}
                                       </li>
                                    </ul>
                                 </div>
                                 <h4 className="title">
                                    <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                                 </h4>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  <nav className="pagination__wrap mt-25">
                     <ReactPaginate
                        breakLabel="..."
                        nextLabel="»"
                        previousLabel="«"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={Math.ceil(count / perPage)}
                        forcePage={page - 1}
                        className="list-wrap"
                     />
                  </nav>
               </div>

               <BlogSidebar style_1={style_1} />
            </div>
         </div>
      </section>
   );
};

export default BlogArea;
