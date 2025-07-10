// components/courses/Course.tsx
import CourseArea from "./CourseArea";
import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import WhatsappButton from "@/components/common/WhatsappButton";
import FooterMain from "@/layouts/footers/FooterMain";
import HeaderMain from "@/layouts/headers/HeaderMain";

type CourseProps = {
  search?: string;
  categoryIds?: string[];
  levelId?: string;
  isPaid?: string;
  //   status?: string;
  //   limit?: string;
  //   offset?: string;
};

const Course = ({
  search,
  categoryIds,
  levelId,
  isPaid,
  //   status,
  //   limit,
  //   offset,
}: CourseProps) => {
  return (
    <>
      <HeaderMain />
      <main className="main-area fix">
        <BreadcrumbOne title="Todos los Cursos" sub_title="Cursos" />
        <CourseArea
          search={search}
          categoryIds={categoryIds ?? []}
          levelId={levelId}
          isPaid={isPaid}
        //  status={status}
        //  limit={limit}
        //  offset={offset}
        />
      </main>
      <WhatsappButton />
      <FooterMain />
    </>
  );
};

export default Course;
