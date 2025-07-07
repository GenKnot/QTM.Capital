 
import CtaArea from "./CtaArea";
import HeroArea from "./HeroArea";
import Cta2Area from "./Cta2Area";
import BlogArea from "./BlogArea";
import AboutArea from "./AboutArea"; 
import ServiceArea from "./ServiceArea";
import ServiceAreaNew from "./ServiceAreaNew";
import XpendCapitalArea from "./XpendCapitalArea";
import JoinUsArea from "./JoinUsArea";
import PartnersStatsArea from "./PartnersStatsArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const HomeOne = () => {
	return (
		<>
		<HeaderOne />
              <HeroArea />
              <CtaArea />
              <ServiceAreaNew />
              <XpendCapitalArea />
              <PartnersStatsArea />
              <JoinUsArea />
              <FooterOne />
		</>
	);
};

export default HomeOne;


