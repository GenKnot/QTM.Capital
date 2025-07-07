 
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import AboutArea from '../homes/home/AboutArea';
import FooterOne from '@/layouts/footers/FooterOne';

const Aboutus = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="关于我们" subtitle="About" />
      <AboutArea />
      <FooterOne />
    </>
  );
};

export default Aboutus;