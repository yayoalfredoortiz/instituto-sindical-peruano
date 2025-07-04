import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import BlogArea from "./BlogArea";
import HeaderSeven from "@/layouts/headers/HeaderSeven";
import WhatsappButton from "@/components/common/WhatsappButton";
import FooterMain from "@/layouts/footers/FooterMain";

type BlogProps = {
  categoryId?: string;
  search?: string;
};

const Blog = ({ categoryId, search }: BlogProps) => {
  return (
    <>
      <HeaderSeven />
      <main className="main-area fix">
        <BreadcrumbOne title="Noticias" sub_title="Noticias" />
        <BlogArea style_1={false} categoryId={categoryId} search={search} />
      </main>
      <WhatsappButton />
      <FooterMain />
    </>
  );
};

export default Blog;
