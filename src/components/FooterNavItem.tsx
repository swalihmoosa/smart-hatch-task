import Link from "next/link";

export default function FooterNavItem({ item }: any) {
	return (
		<div>
			<h6 className="text-[17px] font-bold text-[#fff] mb-[15px]">
				{item?.name}
			</h6>
			{item?.navs?.map((nav: any, index: number) => (
				<Link
					key={index}
					href={nav?.link ?? ""}
					className="text-[#fff] text-[17px] font-normal block text-left mb-[9px] last:mb-0 opacity-[.6]"
				>
					{nav.name}
				</Link>
			))}
			{item.content}
		</div>
	);
}
