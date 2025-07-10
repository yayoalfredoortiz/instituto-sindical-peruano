import Contact from "@/components/inner-pages/contact";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Contact",
};
const page = () => {
   return (
      <Wrapper>
         <Contact />
      </Wrapper>
   )
}

export default page