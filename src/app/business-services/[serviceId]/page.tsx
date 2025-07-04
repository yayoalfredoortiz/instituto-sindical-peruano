import OurServicesDetails from "@/components/our-services/service-details";
import Wrapper from "@/layouts/Wrapper";

interface Props {
   params: {
      serviceId: string;
   };
}

export const metadata = {
   title: "Detalle de Servicio",
};

const ServiceDetailPage = ({ params }: Props) => {
   return (
      <Wrapper>
         <OurServicesDetails serviceId={params.serviceId} />
      </Wrapper>
   );
};

export default ServiceDetailPage;
