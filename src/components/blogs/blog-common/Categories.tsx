'use client';

import { useArticleCategoryStore } from '@/zustand/stores/article-category.store';
import { useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

const Categories = () => {
  const data = useArticleCategoryStore((state) => state.data);
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('categoryId');

  return (
    <div className="blog-widget">
      <h4 className="widget-title">Categorías</h4>
      <div className="shop-cat-list">
        <ul className="list-wrap">
          {data.map((cat) => {
            const params = new URLSearchParams(searchParams.toString());

            if (String(cat.id) === currentCategory) {
              params.delete('categoryId');
            } else {
              params.set('categoryId', String(cat.id!));
            }

            params.set('page', '1');

            return (
              <li key={cat.id}>
                <Link
                  href={`/blog?${params.toString()}`}
                  className={clsx({
                    'fw-bold text-primary': String(cat.id) === currentCategory,
                  })}
                >
                  <i className="flaticon-angle-right"></i>
                  {cat.ac_name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
