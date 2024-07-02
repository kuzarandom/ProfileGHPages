import React from "react";
import Img404 from "@/assets/image-404.jpg";

interface ImageType extends React.HTMLAttributes<HTMLDivElement> {
	src?: string;
}

const Image = React.forwardRef<HTMLDivElement, ImageType>(
	({ src, ...props }, ref) => {
		return (
			<div
				ref={ref}
				style={{
					backgroundImage: src ? `url(${src})` : `url(${Img404})`,
				}}
				{...props}
			/>
		);
	}
);

export default Image;
