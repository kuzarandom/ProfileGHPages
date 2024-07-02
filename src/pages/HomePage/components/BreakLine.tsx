import clsx from "clsx";
import React from "react";

const BreakLine: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	className,
	...props
}) => {
	return (
		<section>
			<div
				className={clsx("h-[90px] w-full bg-[#f5f4f0]", className)}
				{...props}
			/>
		</section>
	);
};

export default BreakLine;
