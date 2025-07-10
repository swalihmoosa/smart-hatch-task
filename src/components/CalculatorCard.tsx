import { useState } from "react";
import Input from "./ui/Input";

export default function CalculatorCard({
	card,
	setCardValues,
	index,
	cardValues,
}: any) {
	const [calculationValues, setCalculationValues] = useState({
		amount: "100,000",
		interest: "3.85%",
	});

	const onChange = (e: any) => {
		setCardValues((prev: any) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		// setCalculationValues((prev) => ({
		// 	...prev,
		// [e.target.name]: e.target.value,
		// }));
	};

	return (
		<div className="border-solid border-[1px] border-[#009BDB4D] bg-[#fff] p-[18px] gap-[15px] flex flex-col w-[calc(50%-14px)] rounded-2xl">
			<Input
				label="Outstanding Amount ( AED )"
				value={cardValues[`card_${index}_amount`] ?? 0}
				onChange={onChange}
				placeholder="100,000"
				name={`card_${index}_amount`}
				className="rounded-[6px] !border-[#009BDB]"
				isIconNeed={false}
				inputClassName="!placeholder:text-[#fff] !text-[#000]"
				type="number"
			/>
			<Input
				label="Monthly Interest rate (%)"
				value={cardValues[`card_${index}_interest`] ?? 0}
				onChange={onChange}
				placeholder=""
				name={`card_${index}_interest`}
				className="rounded-[6px] !border-[#009BDB]"
				isIconNeed={false}
				inputClassName="!placeholder:text-[#fff] !text-[#000]"
				type="number"
			/>{" "}
		</div>
	);
}
