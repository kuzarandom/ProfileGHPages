import { useState } from "react";

type ValueToggle<T extends string, U extends string> = [T, U];

interface Params<T extends string, U extends string> {
	valueToggle: ValueToggle<T, U>;
	defaultValue: T | U;
}

export const useToggle = <T extends string, U extends string>({
	valueToggle,
	defaultValue,
}: Params<T, U>): [T | U, () => void, () => void, () => void] => {
	const [returnValue, setReturnValue] = useState(defaultValue);
	const toggle = () => {
		if (returnValue === valueToggle[0]) {
			setReturnValue(valueToggle[1]);
		} else {
			setReturnValue(valueToggle[0]);
		}
	};

	const fnSetValueFirst = () => {
		setReturnValue(valueToggle[0]);
	};
	const fnSetValueSecond = () => {
		setReturnValue(valueToggle[1]);
	};

	return [returnValue, toggle, fnSetValueFirst, fnSetValueSecond];
};
