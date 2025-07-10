import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export const socials = [
	{
		icon: <FaFacebook />,
		link: "#",
	},
	{
		icon: <FaInstagram />,
		link: "#",
	},
	{
		icon: <FaTwitter />,
		link: "#",
	},
	{
		icon: <FaLinkedin />,
		link: "#",
	},
];

export const allCards = [
	{
		name: "Card 1",
		desc: "Lorem ipsum dolor sit amet consectetur. Pharetra arcu est vel in egestas eget auctor pretium dictum.",
		link: "#",
		image: "/assets/Cart Gradient 1.png",
	},
	{
		name: "Card 2",
		desc: "Lorem ipsum dolor sit amet consectetur. Pharetra arcu est vel in egestas eget auctor pretium dictum.",
		link: "#",
		image: "/assets/Cart Gradient 2.png",
	},
	{
		name: "Card 3",
		desc: "Lorem ipsum dolor sit amet consectetur. Pharetra arcu est vel in egestas eget auctor pretium dictum.",
		link: "#",
		image: "/assets/Cart  Geometric  1.png",
	},
];

export const allLoans = [
	{
		name: "Loan 1",
		desc: "Lorem ipsum dolor sit amet consectetur. Pharetra arcu est vel in egestas eget auctor pretium dictum.",
		link: "#",
		image: "/assets/prahant-photo-films-hVPCnpu1GSs-unsplash 1.png",
	},
	{
		name: "Loan 2",
		desc: "Lorem ipsum dolor sit amet consectetur. Pharetra arcu est vel in egestas eget auctor pretium dictum.",
		link: "#",
		image: "/assets/documents-laptop-portfolio-with-couple-sofa-home-living-room-bank-payment-accounting-finance-refund-with-man-woman-apartment-review-loan-mortgage-tax-computer 2.png",
	},
];

export const footerNavigations = [
	{
		name: "Title 1",
		navs: [
			{
				name: "Head Office - Abudhabi",
				link: "#",
			},
			{
				name: "Head Office - Abudhabi",
				link: "#",
			},
			{
				name: "Head Office - Abudhabi",
				link: "#",
			},
		],
	},
	{
		name: "Title 2",
		navs: [
			{
				name: "Finarch LLC",
				link: "#",
			},
			{
				name: "Insurance",
				link: "#",
			},
			{
				name: "Capital",
				link: "#",
			},
		],
	},
	{
		name: "Title 3",
		navs: [
			{
				name: "Sitemap",
				link: "#",
			},
			{
				name: "Feedback & Complaint",
				link: "#",
			},
			{
				name: "VAT",
				link: "#",
			},
			{
				content: (
					<div className="flex gap-[10px]">
						kjdfsghdjhfg
						{/* <Image
							src={"/assets/Container-2.png"}
							alt="Container"
							width={100}
							height={100}
						/>
						<Image
							src={"Container-1.png"}
							alt="Container"
							width={100}
							height={100}
						/> */}
					</div>
				),
			},
		],
	},
];

export const footerPages = [
	{
		name: "Terms ",
		link: "#",
	},
	{
		name: "Privacy",
		link: "#",
	},
	{
		name: "Cookies ",
		link: "#",
	},
	{
		name: "Legal  ",
		link: "#",
	},
];

export const cardCalculations = [
	{
		name: "Credit Card 01",
		outstanding: "100,000",
		intereset: "3.85%",
	},
	{
		name: "Credit Card 01",
		outstanding: "100,000",
		intereset: "3.85%",
	},
	{
		name: "Credit Card 01",
		outstanding: "100,000",
		intereset: "3.85%",
	},
	{
		name: "Credit Card 01",
		outstanding: "100,000",
		intereset: "3.85%",
	},
];

export const financeDatas = [
	{
		label: "Minimum Payment as Low as",
		value: "2.0%",
		desc: "Per Month Only",
	},
	{
		label: "Minimum Payment as Low as",
		value: "2.0%",
		desc: "Per Month Only",
	},
	{
		label: "Minimum Payment as Low as",
		value: "2.0%",
		desc: "Per Month Only",
	},
];
