import Course from "@/components/courses/course";
import Wrapper from "@/layouts/Wrapper";
import { useMemo } from "react";

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

    const categoryIds = searchParams?.categoryId
      ? searchParams.categoryId.split(',')
      : [];

   return (
      <Wrapper>
         <Course
            search={searchParams?.search}
            categoryIds={categoryIds}
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
