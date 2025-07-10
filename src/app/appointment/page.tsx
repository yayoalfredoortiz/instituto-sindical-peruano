import Appointment from "@/components/inner-pages/appointment";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "About Us",
};
const page = () => {
   return (
      <Wrapper>
         <Appointment />
      </Wrapper>
   )
}

export default page