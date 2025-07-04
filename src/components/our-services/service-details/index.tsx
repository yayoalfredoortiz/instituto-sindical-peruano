import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import HeaderSeven from "@/layouts/headers/HeaderSeven";
import WhatsappButton from "@/components/common/WhatsappButton";
import FooterMain from "@/layouts/footers/FooterMain";
import ServiceDetailsArea from "./ServiceDetailsArea";

interface Props {
  serviceId: string;
}

const OurServicesDetails = ({ serviceId }: Props) => {
  return (
    <>
      <HeaderSeven />
      <main className="main-area fix">
        <BreadcrumbOne
          title="Detalle del Servicio"
          sub_title="Servicios"
          sub_title_2="Procesos Judiciales"
          style={true}
        />
        <ServiceDetailsArea serviceId={serviceId} />
      </main>
      <WhatsappButton />
      <FooterMain />
    </>
  );
};

export default OurServicesDetails;
