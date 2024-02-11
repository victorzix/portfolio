import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const currentTime = new Date().getHours();
		if (currentTime >= 18 || currentTime < 6) {
			setTheme('dark');
		} else if (currentTime >= 6 && currentTime < 12) {
			setTheme('light');
		} else {
			setTheme('sunset');
		}
	}, []);

	return (
		<ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
	);
};
