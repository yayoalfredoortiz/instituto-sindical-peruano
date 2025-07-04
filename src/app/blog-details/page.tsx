import BlogDetails from "@/components/blogs/blog-details"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Blog Details SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <BlogDetails articleId=""/>
      </Wrapper>
   )
}

export default index