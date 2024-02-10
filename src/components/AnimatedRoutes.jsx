import { Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import IntroPage from './IntroPage';
import { AnimatePresence } from 'framer-motion';
import Skills from './Skills';
import Projects from './Projects';
import setTheme from '../SetTheme';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function AnimatedRoutes() {
	const location = useLocation();
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<div className={`${newTheme.background}`}>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<IntroPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default AnimatedRoutes;
