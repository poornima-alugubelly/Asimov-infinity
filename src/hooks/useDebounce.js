import { useEffect, useState } from "react";

export const useDebounce = (searchVal, delay) => {
	const [debouncedSearchVal, setDebouncedSearchVal] = useState(searchVal);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearchVal(searchVal);
		}, delay);

		return () => {
			// return runs whenever dependencies change
			// if a user enter another letter before the delay
			// then then timer will be cleared , debouncedSearch value will not change
			clearTimeout(handler);
		};
	}, [searchVal, delay]);

	return debouncedSearchVal;
};
