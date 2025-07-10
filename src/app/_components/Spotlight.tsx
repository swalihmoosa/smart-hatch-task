import Chip from "@/components/ui/Chip";
import Image from "next/image";

export default function Spotlight() {
	return (
		<div className="bg-linear-to-r from-[#009BDB] to-[#00426A]">
			<div className="flex justify-between items-end wrapper py-[64px]">
				<div className="w-[65%]">
					<Chip className="mb-[28px]">Credit Card</Chip>
					<h2 className="text-[32px] text-[#fff] font-bold mb-[28px]">
						Lowest Credit Card Interest Rate <br /> at just 1.25%
						per Month
					</h2>
					<div className="flex gap-[10px] items-center">
						<span className="h-[5px] rounded-2xl bg-[#fff] opacity-[.4] w-[25px]" />
						<span className="h-[5px] rounded-2xl bg-[#fff] w-[65px]" />
						<span className="h-[5px] rounded-2xl bg-[#fff] opacity-[.4] w-[25px]" />
					</div>
				</div>
				<div className="w-[500px]">
					<Image
						src={"/assets/Cart Gradient 1-1.png"}
						alt="Card"
						width={100}
						height={100}
						className="w-full"
					/>
				</div>
			</div>
		</div>
	);
}
