import Chip from "@/components/ui/Chip";

export default function InnerSpotlight() {
	return (
		<div className="spolight-bg">
			<div className="wrapper py-[64px] pt-[150px]">
				<Chip className="mb-[28px] bg-[#fff] text-[#00426A]">
					Credit Card
				</Chip>
				<h2 className="text-[32px] text-[#fff] font-bold mb-[28px]">
					Card 1
				</h2>
				<p className="text-[#FFFFFF] text-[20px]">
					low-interest rate card, saving you money and simply
				</p>
			</div>
		</div>
	);
}
