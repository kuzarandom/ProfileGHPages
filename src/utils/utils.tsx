import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import CssFilterConverter from "css-filter-converter";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cn(...inputs: any[]) {
	return twMerge(clsx(inputs));
}

export function fnConvertFilter(color: string): string {
	const hex = color.includes("#");
	const rgb = color.includes("rgb");
	if (hex) {
		const filter = CssFilterConverter?.hexToFilter(color).color;
		if (filter) {
			return filter;
		}
	} else if (rgb) {
		const filter = CssFilterConverter.rgbToFilter(color).color;
		if (filter) {
			return filter;
		}
	}
	return "";
}
