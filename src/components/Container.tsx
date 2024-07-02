import React from "react";
import { twMerge } from "tailwind-merge";

const Container = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	return (
		<div
			className={twMerge("mx-0 xl:mx-40 box-border", className)}
			ref={ref}
			{...props}
		/>
	);
});

export default Container;
