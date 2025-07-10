"use client";
import { socials, footerNavigations, footerPages } from "@/constants/constants";
import Image from "next/image";
import Input from "./ui/Input";
import FooterNavItem from "./FooterNavItem";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
	const [mail, setMail] = useState("");
	return (
		<div className="p-[26px] bg-[#fff] pb-0">
			<footer className="bg-linear-to-r from-[#00426A] to-[#0082D0] rounded-3xl">
				<div className="">
					<div className="">
						<div className="flex items-start justify-between p-[98px]">
							{footerNavigations?.map((item, index) => (
								<FooterNavItem item={item} key={index} />
							))}
							<div>
								<h6 className="text-[17px] font-bold text-[#fff] mb-[15px]">
									Social media
								</h6>
								<div className="flex items-center mb-[43px]">
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
								<p className="text-[17px] text-[#fff] font-semibold mb-[20px]">
									Stay informed by signing up for our <br />{" "}
									mailing list.
								</p>
								<form onSubmit={() => {}}>
									<Input
										type="email"
										placeholder="Enter mail"
										value={mail}
										onChange={(e: any) =>
											setMail(e.target.value)
										}
									/>
								</form>
							</div>
						</div>
						<hr className="bg-[#fff] h-[2px] w-full" />
						<div className="px-[81px] py-[41px] flex justify-between items-center">
							<h6 className="text-[45px] text-[#fff] font-bold">
								333444221
							</h6>
							<p className="text-[#fff] text-[16px]">
								<b className="font-bold">
									We're Here to Assist!
								</b>{" "}
								<br /> For lost cards, fraud concerns, or any
								inquiries, call our 24x7 toll free number.
							</p>
							<Image
								src="/assets/Container-1.png"
								alt="Footer"
								width={100}
								height={100}
								className="w-[100px]"
							/>
						</div>
					</div>
					<div></div>
				</div>
			</footer>
			<div className="p-[32px] flex justify-between items-center">
				<span className="text-[#00426A] text-[15px]">
					© 2025 Smarthatch
				</span>
				<div className="flex gap-[50px] items-center">
					{footerPages.map((item, index) => (
						<Link
							className="text-[##00426A] text-[15px]"
							key={index}
							href={item.link}
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
