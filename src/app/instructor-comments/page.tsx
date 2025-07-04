import InstructorAssignment from "@/dashboard/instructor-dashboard/instructor-assignment";
import InstructorComments from "@/dashboard/instructor-dashboard/instructor-comments";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Instructor Assignment SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <InstructorComments />
      </Wrapper>
   )
}

export default index