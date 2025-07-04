import HomeMain from "@/components/homes/home-main";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Instituto Sindical Peruano",
  description: "Capacitación , asesoría y defensa",
  keywords: 'Escuela,sindical,legal,capacitación,asesoría,defensa,abogado,legal,jurídico,denuncia,defensa,formato,documento,seguimiento,caso'
};
const index = () => {
  return (
    <Wrapper>
      <HomeMain />
    </Wrapper>
  )
}

export default index