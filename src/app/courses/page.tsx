import Course from "@/components/courses/course";
import Wrapper from "@/layouts/Wrapper";

type Props = {
   searchParams?: {
      search?: string;
      categoryId?: string;
      levelId?: string;
      isPaid?: string;
      // status?: string;
      // limit?: string;
      // offset?: string;
   };
};

export const metadata = {
   title: "Cursos",
};

const page = ({ searchParams }: Props) => {
   return (
      <Wrapper>
         <Course
            search={searchParams?.search}
            categoryId={searchParams?.categoryId}
            levelId={searchParams?.levelId}
            isPaid={searchParams?.isPaid}
            // status={searchParams?.status}
            // limit={searchParams?.limit}
            // offset={searchParams?.offset}
         />
      </Wrapper>
   );
};

export default page;
