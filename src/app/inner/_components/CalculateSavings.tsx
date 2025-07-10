"use client";
import CalculatorCard from "@/components/CalculatorCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { cardCalculations } from "@/constants/constants";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function CalculateSavings() {
	const [cardValues, setCardValues] = useState<any>({});

	const calculateTotal = () => {
		let amount = 0;
		let interest = 0;
		Object.keys(cardValues)?.map((key) => {
			if (key?.endsWith("amount")) {
				amount += Number(cardValues[key]);
			} else if (key?.endsWith("interest")) {
				interest += Number(cardValues[key]);
			}
		});

		return {
			amount,
			interest,
		};
	};

	return (
		<section className="wrapper py-[45px]">
			<h3 className="text-[45px] text-center text-[#00426A]">
				Calculate <b className="font-bold">your savings</b>
			</h3>
			<p className="text-[#00426A] text-[20px] text-center mb-[50px]">
				Lorem ipsum dolor sit amet consectetur. Pharetra arcu est vel in
				egestas eget auctor pretium
			</p>
			<div className="flex ">
				<div className="bg-[#EBF9FF] w-[60%]">
					<div className="p-[40px]">
						<h6 className="text-[32px] text-[#00426A] font-bold">
							how many Credit Cards you have?
						</h6>
						<input type="range" className="mb-[37px]" />
						<div className="flex justify-between items-center flex-wrap gap-[14px]">
							{cardCalculations?.map((item, index) => (
								<CalculatorCard
									key={index}
									index={index}
									card={item}
									cardValues={cardValues}
									setCardValues={setCardValues}
								/>
							))}
						</div>
					</div>
					<hr className="h-[2px] w-full bg-[#009BDB]" />
					<div className="p-[40px] py-[30px]">
						<h6 className="text-[32px] text-[#00426A] font-bold">
							Total
						</h6>{" "}
						<div className="flex items-center gap-[14px]">
							<Input
								label="Monthly Interest rate (%)"
								value={calculateTotal()?.amount ?? 0}
								onChange={() => {}}
								placeholder="100,000"
								name="amount"
								className="rounded-[6px] !border-[#009BDB]"
								isIconNeed={false}
								inputClassName="!placeholder:text-[#fff] !text-[#000]"
								disabled
							/>
							<Input
								label="Outstanding Amount ( AED )"
								value={calculateTotal()?.interest / 4}
								onChange={() => {}}
								placeholder="100,000"
								name="ineterest"
								className="rounded-[6px] !border-[#009BDB]"
								isIconNeed={false}
								inputClassName="!placeholder:text-[#fff] !text-[#000]"
								disabled
							/>
						</div>
					</div>
				</div>
				<div className="px-[25px] py-[50px] bg-[#00426A]">
					<p className="text-[#fff]">
						With Card 1 <br />{" "}
						<span className="font-bold text-[32px]">
							You would be saving
						</span>
						<br />
						<span className="font-bold text-[32px]">AED</span>
						<span className="font-bold text-[64px]">116,128</span>
						<br />
						Estimated 
						<span className="font-bold text-[32px]">
							Yearly
						</span>{" "}
						interest savings*
					</p>
					<hr className="my-[23px] bg-[#009BDB] h-[2px] w-full" />
					<p className="text-[#fff] mb-[46px]">
						<span className="font-bold text-[32px]">
							You would be saving
						</span>
						<br />
						<span className="font-bold text-[32px]">AED</span>
						<span className="font-bold text-[64px]">116,128</span>
						<br />
						Estimated 
						<span className="font-bold text-[32px]">
							Yearly
						</span>{" "}
						interest savings*
					</p>
					<Button
						onClick={() => {}}
						className="px-[25px] w-full mb-[24px] py-[16px] bg-transparent border-[#fff] text-[#fff] flex justify-center items-center font-bold"
					>
						Get in Touch{" "}
						<FaArrowRight className="w-[12px] h-[12px] text-[#fff] ml-[4px]" />
					</Button>
					<Button
						onClick={() => {}}
						className="px-[25px] py-[16px] w-full bg-[#009BDB] border-[#009BDB] text-[#fff] flex justify-center items-center font-bold"
					>
						Apply{" "}
						<FaArrowRight className="w-[12px] h-[12px] text-[#fff] ml-[4px]" />
					</Button>
				</div>
			</div>
		</section>
	);
}
