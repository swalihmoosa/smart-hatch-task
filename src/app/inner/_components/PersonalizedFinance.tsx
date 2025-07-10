import FinanceCard from "@/components/FinanceCard";
import { financeDatas } from "@/constants/constants";

export default function PersonalizedFinance() {
	return (
		<section className="bg-[#CCF0FF] py-[55px]">
			<div className="wrapper">
				<h3 className="text-[45px] text-center text-[#00426A] mb-[11px]">
					Personalised finance for your unique goals.{" "}
				</h3>
				<p className="text-[##00426A] text-center text-[17px] mb-[42px]">
					Lorem ipsum dolor sit amet consectetur. Pharetra arcu est
					vel in egestas eget auctor pretium dictum.Lorem ipsum dolor
					sit amet consectetur. Pharetra arcu est vel in egestas eget
					auctor pretium dictum.Lorem ipsum dolor sit amet
					consectetur. Pharetra arcu est vel in egestas eget auctor
					pretium dictum.Lorem ipsum dolor sit amet consectetur.
					Pharetra arcu est vel in egestas eget auctor pretium dictum.
				</p>
				<div className="flex gap-[21px] justify-center">
					{financeDatas.map((data, index) => (
						<FinanceCard item={data} key={index} />
					))}
				</div>
			</div>
		</section>
	);
}
