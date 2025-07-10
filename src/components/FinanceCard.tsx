export default function FinanceCard({ item }: any) {
	return (
		<div className="bg-[#009BDB] p-[50px] rounded-2xl">
			<span className="block text-center text-[#fff] text-[20px]">
				{item.label}
			</span>
			<span className="block text-center text-[#fff] text-[50px] font-bold">
				{item.value}
			</span>
			<span className="block text-center text-[#fff] text-[20px]">
				{item.desc}
			</span>
		</div>
	);
}
