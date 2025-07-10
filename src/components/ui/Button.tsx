"use client";

export default function Button({
	children,
	onClick,
	className,
}: {
	className?: string;
	onClick: any;
	children: React.ReactNode;
}) {
	return (
		<button
			onClick={onClick}
			className={`rounded-[30px] border-solid border-[1px] cursor-pointer ${className}`}
		>
			{children}
		</button>
	);
}
