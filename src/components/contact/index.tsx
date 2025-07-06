import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import Cta2Area from "../homes/home/Cta2Area";
import FooterOne from "@/layouts/footers/FooterOne";
import ContactArea from "./ContactArea";

const Contact = () => {
	return (
		<>
			<HeaderOne />
			<Breacrumb title="联系我们" subtitle="联系我们" />
			<ContactArea />
			<Cta2Area />
			<FooterOne />
		</>
	);
};

export default Contact;
