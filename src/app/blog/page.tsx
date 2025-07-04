import Blog from "@/components/blogs/blog";
import Wrapper from "@/layouts/Wrapper";

type Props = {
  searchParams?: {
    categoryId?: string;
    search?: string;
  };
};

export const metadata = {
  title: "Blog SkillGro - Online Courses & Education React Next js Template",
};

const Page = ({ searchParams }: Props) => {
  return (
    <Wrapper>
      <Blog
        categoryId={searchParams?.categoryId}
        search={searchParams?.search}
      />
    </Wrapper>
  );
};

export default Page;
