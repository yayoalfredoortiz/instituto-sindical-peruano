import Login from "@/components/inner-pages/login"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Login SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <Login />
      </Wrapper>
   )
}

export default index