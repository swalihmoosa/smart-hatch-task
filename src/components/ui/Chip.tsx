export default function Chip({ children, className }: any) {
	return (
		<span
			className={`px-[25px] inline-block rounded-[30px] py-[5px] text-[17px] bg-[#009BDB] text-[#FFFFFFBA] font-bold ${className}`}
		>
			{children}
		</span>
	);
}
