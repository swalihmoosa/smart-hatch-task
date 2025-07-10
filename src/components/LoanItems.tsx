"use client";
import Image from "next/image";
import Button from "./ui/Button";
import { FaArrowRight } from "react-icons/fa";

export default function LoanItem({ loan, className }: any) {
	return (
		<div
			className={`bg-[#EBF9FF] rounded-2xl overflow-hidden ${className}`}
		>
			<Image
				src={loan?.image}
				alt={loan?.name}
				width={100}
				height={100}
				className="w-full"
			/>
			<div className="p-[51px] pb-[116px]">
				<h5 className="mb-[17px] text-[28px] text-[##00426A] font-bold">
					{loan?.name}
				</h5>
				<p className="mb-[17px] text-[17px] text-[#00426A]">
					{loan?.desc}
				</p>
				<Button
					onClick={() => {}}
					className="px-[25px] py-[10px] bg-[#EBF9FF] border-[##00426A] text-[#00426A] flex justify-center items-center font-bold"
				>
					Apply now
					<FaArrowRight className="w-[12px] h-[12px] text-[#00426A] ml-[4px]" />
				</Button>
			</div>
		</div>
	);
}
