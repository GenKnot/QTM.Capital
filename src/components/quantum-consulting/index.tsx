import Breadcrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import QuantumConsultingArea from "./QuantumConsultingArea";

const QuantumConsulting = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb title="Xpend咨询" subtitle="专业的企业咨询服务" />
        <QuantumConsultingArea />
      </main>
      <FooterOne />
    </>
  );
};

export default QuantumConsulting; 