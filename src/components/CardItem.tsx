"use client";

import Image from "next/image";
import Button from "./ui/Button";
import { FaArrowRight } from "react-icons/fa";

export default function CardItem({ card, className }: any) {
	return (
		<div
			className={`bg-[#EBF9FF] py-[60px] px-[28px] rounded-2xl ${className}`}
		>
			<Image
				src={card?.image}
				alt={card?.name}
				width={100}
				height={100}
				className="w-full mb-[30px]"
			/>
			<h5 className="mb-[17px] text-[28px] text-[##00426A] font-bold">
				{card?.name}
			</h5>
			<p className="mb-[17px] text-[17px] text-[#00426A]">{card?.desc}</p>
			<Button
				onClick={() => {}}
				className="px-[25px] py-[10px] bg-[#EBF9FF] border-[##00426A] text-[#00426A] flex justify-center items-center font-bold"
			>
				Apply now
				<FaArrowRight className="w-[12px] h-[12px] text-[#00426A] ml-[4px]" />
			</Button>
		</div>
	);
}
