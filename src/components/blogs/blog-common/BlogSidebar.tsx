'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Categories from './Categories';
import LatestPost from './LatestPost';
import Tags from './Tags';

const BlogSidebar = ({ style_1 }: any) => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchText.trim()) {
      params.set('search', searchText.trim());
    } else {
      params.delete('search');
    }
    params.set('page', '1'); // reiniciar paginación
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="col-xl-3 col-lg-4">
      <aside className={`blog-sidebar ${style_1 ? 'blog-sidebar-two' : ''}`}>
        <div className="blog-widget widget_search">
          <div className="sidebar-search-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Buscar aquí"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button type="submit">
                <i className="flaticon-search"></i>
              </button>
            </form>
          </div>
        </div>
        <Categories />
        <LatestPost />
        <Tags />
      </aside>
    </div>
  );
};

export default BlogSidebar;
