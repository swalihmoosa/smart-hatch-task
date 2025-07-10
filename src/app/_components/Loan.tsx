import LoanItem from "@/components/LoanItems";
import { allLoans } from "@/constants/constants";

export default function Loan() {
	return (
		<div className="wrapper">
			<h3 className="text-[54px] text-center text-[#00426A] mb-[50px]">
				Loan Tailored to your Dreams
			</h3>
			<div className="flex justify-between items-center gap-[24px]">
				{allLoans?.map((loan, index) => (
					<LoanItem key={index} loan={loan} className="" />
				))}
			</div>
		</div>
	);
}
