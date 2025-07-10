"use client";

import { useReducer } from "react";
import { createContext } from "vm";

const intialState = {
	theme: "dark",
};

const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "TOGGLE_THEME":
			return {
				...state,
				theme: action.payload,
			};
	}
};

export const ThemeContext = createContext();

export default function ThemeProvider(children: any) {
	const [state, dispatch] = useReducer(reducer, intialState);

	return (
		<ThemeContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
