"use client";
import CardItem from "@/components/CardItem";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import { allCards } from "@/constants/constants";
import Image from "next/image";
import { CiCreditCard1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";

export default function Cards() {
	return (
		<div className="wrapper py-[50px]">
			<h3 className="text-[54px] text-center text-[#00426A] mb-[50px]">
				Cards
			</h3>
			<div className="flex justify-between items-center gap-[24px]">
				{allCards?.map((card, index) => (
					<CardItem key={index} card={card} className="" />
				))}
			</div>
			<div
				className={`bg-[#EBF9FF] pt-[60px] px-[28px] rounded-2xl flex items-center justify-between mt-[24px]`}
			>
				<div className="w-[40%]">
					<Chip className="!rounded-[5px] !inline-flex items-center text-[#fff] px-[13px] mb-[27px]">
						<CiCreditCard1 className="mr-[4px] text-[#fff]" />
						Virtual card
					</Chip>
					<h5 className="mb-[17px] text-[28px] text-[##00426A] font-bold">
						Virtual Card{" "}
					</h5>
					<p className="mb-[17px] text-[17px] text-[#00426A]">
						Lorem ipsum dolor sit amet consectetur. Pharetra arcu
						est vel in egestas eget auctor pretium dictum.{" "}
					</p>
					<Button
						onClick={() => {}}
						className="px-[25px] py-[10px] bg-[#009BDB] border-[#009BDB] text-[#fff] flex justify-center items-center font-bold"
					>
						Know more
						<FaArrowRight className="w-[12px] h-[12px] text-[#fff] ml-[4px]" />
					</Button>
				</div>
				<Image
					src={"/assets/Group-1.png"}
					alt={"Virtual card"}
					width={100}
					height={100}
					className="w-[370px]"
				/>
			</div>
		</div>
	);
}
