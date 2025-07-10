import Image from "next/image";

export default function Download() {
	return (
		<div className="wrapper py-[49px]">
			<div className="bg-[#00426A] flex justify-between items-center pt-[51px] px-[85px] rounded-2xl">
				<Image
					src={"/assets/Group-1.png"}
					alt="Phone"
					width={100}
					height={100}
					className="w-[370px]"
				/>
				<div>
					<h6 className="text-[24px] text-[#fff] font-bold">
						Download App Now!
					</h6>
					<span className="text-[19px] text-[#fff] font-medium">
						gestas eget auctor pretium dictum.
					</span>
				</div>
				<div className="flex items-center gap-[23px]">
					<div className="flex gap-[17px] flex-col">
						<Image
							src={"/assets/Group.png"}
							alt="Phone"
							width={100}
							height={100}
							className="w-[180px]"
						/>
						<Image
							src={"/assets/Frame 83.png"}
							alt="Phone"
							width={100}
							height={100}
							className="w-[180px]"
						/>
					</div>
					<Image
						src={"/assets/Frame 1707481746.png"}
						alt="Phone"
						width={100}
						height={100}
						className="w-[116px]"
					/>
				</div>
			</div>
		</div>
	);
}
