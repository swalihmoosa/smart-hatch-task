"use client";

import { FaArrowRight } from "react-icons/fa";

export default function Input({
	type,
	placeholder,
	value,
	onChange,
	label,
	className,
	isIconNeed = true,
	inputClassName,
	name,
	disabled = false,
}: any) {
	return (
		<div className="w-full">
			{label && (
				<label className="text-[13px] text-[#00426A] mb-[10px]">
					{label}
				</label>
			)}
			<div
				className={`border-[1px] border-[#fff] rounded-4xl text-[#fff] pr-[10px] w-full flex justify-between items-center ${className} `}
			>
				<input
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					name={name}
					disabled={disabled}
					className={`text-[#fff] p-[10px] text-[14px] w-full placeholder:text-[#fff] ${inputClassName}`}
				/>
				{isIconNeed && (
					<FaArrowRight className="w-[12px] h-[12px] text-[#fff] ml-[4px]" />
				)}
			</div>
		</div>
	);
}
