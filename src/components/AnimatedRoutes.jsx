import { Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import IntroPage from './IntroPage';
import { AnimatePresence } from 'framer-motion';
import Skills from './Skills';
import Projects from './Projects';
import setTheme from '../SetTheme';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Contacts from './Contacts';

function AnimatedRoutes() {
	const location = useLocation();
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<div className={`${newTheme.background}`}>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<IntroPage />} />
					<Route path="/sobre" element={<About />} />
					<Route path="/habilidades" element={<Skills />} />
					<Route path="/projetos" element={<Projects />} />
					<Route path="/contatos" element={<Contacts />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default AnimatedRoutes;
