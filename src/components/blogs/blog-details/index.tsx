import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import BlogDetailsArea from "./BlogDetailsArea";
import HeaderSeven from "@/layouts/headers/HeaderSeven";
import WhatsappButton from "@/components/common/WhatsappButton";
import FooterMain from "@/layouts/footers/FooterMain";

type BlogDetailsProps = {
  articleId: string;
};

const BlogDetails = ({ articleId }: BlogDetailsProps) => {
  return (
    <>
      <HeaderSeven />
      <main className="main-area fix">
        <BreadcrumbOne
          title="Detalle de Blog"
          sub_title="Blogs"
          sub_title_2="Librarse de una deuda Legal"
          style={true}
        />
        <BlogDetailsArea articleId={articleId} /> {/* 👈 se lo pasas aquí */}
      </main>
      <WhatsappButton />
      <FooterMain />
    </>
  );
};

export default BlogDetails;
