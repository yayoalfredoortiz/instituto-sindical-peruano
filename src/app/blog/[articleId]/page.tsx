import BlogDetails from "@/components/blogs/blog-details";
import Wrapper from "@/layouts/Wrapper";

interface BlogPageProps {
  params: {
    articleId: string;
  };
}

export const metadata = {
  title: "Blog Details SkillGro - Online Courses & Education React Next js Template",
};

export default function BlogPage({ params }: BlogPageProps) {
  const { articleId } = params;

  return (
    <Wrapper>
      <BlogDetails articleId={articleId} />
    </Wrapper>
  );
}
