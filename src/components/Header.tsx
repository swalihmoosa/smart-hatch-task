"use client";

import { socials } from "@/constants/constants";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Seperator from "./ui/Seperator";
import { FaAccessibleIcon, FaArrowRight } from "react-icons/fa";
import { AiFillCustomerService } from "react-icons/ai";
import Button from "./ui/Button";
import { CiGlobe, CiSearch } from "react-icons/ci";
import { FaMoneyCheckDollar } from "react-icons/fa6";

export default function Header() {
	return (
		<header>
			<div className="bg-[#00426A] h-[40px] flex justify-end items-center gap-[10px] p-[20px]">
				<div className="flex items-center">
					{socials?.map((item, index) => (
						<Link
							className="mr-[10px] last:mr-0 text-[#fff]"
							href={item?.link}
							key={index}
							target="_blank"
						>
							{item?.icon}
						</Link>
					))}
				</div>
				<Seperator />
				<Link
					href={"#"}
					className="flex items-center text-[#fff] font-medium"
				>
					<FaAccessibleIcon className="mr-[4px]" />
					Accebility
				</Link>
				<Seperator />
				<Link
					href={"#"}
					className="flex items-center text-[#fff] font-medium"
				>
					<AiFillCustomerService className="mr-[4px]" />
					44343423
				</Link>
				<Button
					onClick={() => {}}
					className="w-[26px] h-[26px] p-[6px] bg-[#009BDB] border-[#009BDB] flex justify-center items-center"
				>
					<CiSearch className="w-[12px] h-[12px]" />
				</Button>
				<Button
					onClick={() => {}}
					className="flex items-center justify-center px-[14px] py-[7px] font-medium bg-[#fff]"
				>
					عربي
					<CiGlobe className="ml-[4px] text-[009BDB]" />
				</Button>
			</div>
			<nav className="flex justify-between items-center px-[50px]">
				<h1 className="text-[#018AC6] text-[45px] font-bold relative">
					<span className="h-[40px] w-full bg-[#fff] absolute left-0 top-[-40px]"></span>
					<span className="h-[40px] w-full bg-[#fff] absolute left-0 bottom-[-40px]"></span>
					LOGO
				</h1>
				<div className="flex items-center">
					{naLinks?.map((item, index) => (
						<Link
							href={item.path}
							key={index}
							className="text-[14px] text-[#231F20] mr-[36px] font-bold flex items-center"
						>
							{item.name}
							{item?.subMenu?.length ? (
								<IoIosArrowDown className="text-[#018AC6] ml-[4px]" />
							) : null}
						</Link>
					))}
				</div>
				<div className="flex items-center gap-[12px]">
					<Button
						onClick={() => {}}
						className="px-[25px] py-[10px] bg-[#fff] border-[#009BDB] flex justify-center items-center font-bold"
					>
						Easy Pay
						<FaMoneyCheckDollar className="w-[12px] h-[12px] text-[#009BDB] ml-[4px]" />
					</Button>
					<Button
						onClick={() => {}}
						className="px-[25px] py-[10px] bg-[#009BDB] border-[#009BDB] text-[#fff] flex justify-center items-center font-bold"
					>
						Enquiore now
						<FaArrowRight className="w-[12px] h-[12px] text-[#fff] ml-[4px]" />
					</Button>
				</div>
			</nav>
		</header>
	);
}

const naLinks = [
	{
		name: "Home",
		path: "#",
	},
	{
		name: "Personal",
		path: "#",
		subMenu: [{}],
	},
	{
		name: "Business",
		path: "#",
		subMenu: [{}],
	},
	{
		name: "About us",
		path: "#",
		subMenu: [{}],
	},
	{
		name: "Help Center",
		path: "#",
		subMenu: [{}],
	},
];
