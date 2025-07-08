import Blog from "@/components/blogs/blog";
import Wrapper from "@/layouts/Wrapper";

type Props = {
  searchParams?: {
    categoryId?: string;
    search?: string;
  };
};

export const metadata = {
  title: "Blog",
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
