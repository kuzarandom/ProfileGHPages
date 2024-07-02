import clsx from "clsx";
import React from "react";

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(() => {
	return (
		<div
			className={clsx(
				"bg-white border max-w-[300px] w-full rounded-lg p-4 max-h-[400px]"
			)}
		>
			Card
		</div>
	);
});

export default Card;
