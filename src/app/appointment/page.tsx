import Appointment from "@/components/inner-pages/appointment";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "About Us SkillGro - Online Courses & Education React Next js Template",
};
const page = () => {
   return (
      <Wrapper>
         <Appointment />
      </Wrapper>
   )
}

export default page