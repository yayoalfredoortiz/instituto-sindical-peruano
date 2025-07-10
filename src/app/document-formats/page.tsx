 import DocumentFormatPage from "@/components/document-formats/document-format";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Document Format",
};
const page = () => {
   return (
      <Wrapper>
         <DocumentFormatPage />
      </Wrapper>
   )
}

export default page