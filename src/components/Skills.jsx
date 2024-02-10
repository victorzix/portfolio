import { useContext } from 'react';
import setTheme from '../SetTheme';
import Header from './Header';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';

function Skills() {
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: '100%' }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			className={`font-monda overflow-hidden ${newTheme.background} ${newTheme.text} ${newTheme.link} w-screen h-screen flex-col items-center`}
		>
			<Header />
			<div className="h-screen gap-10 w-screen justify-center flex items-center flex-col">
				<h1 className="text-6xl">Habilidades</h1>
				<div className="flex w-2/3 flex-col gap-10 text-center">
					<div className='flex flex-col gap-4'>
						<h2 className="text-4xl">
							Eu sou completamente apaixonado por <b>Backend.</b>
						</h2>
						<span className="text-2xl">
							.NET, C#, ASP.NET, Fluent Validation, WEB API;
						</span>
						<span className="text-2xl">
							Javascript, Typescript, Node, Express, ZOD, Jest;
						</span>
					</div>

					<div className='flex flex-col gap-4'>
						<h2 className="text-4xl">
						Mas também gosto de desenvolver telas e landing pages do <b>Frontend.</b>
						</h2>
						<span className="text-2xl">
						Javascript, React, HTML, CSS, Tailwind, Styled-Components;
						</span>
					</div>

					<div className='flex flex-col gap-4'>
						<h2 className="text-4xl">
						Assim como <b>Banco de Dados</b> e Softwares de <b>Devops.</b>
						</h2>
						<span className="text-2xl">
						Javascript, React, HTML, CSS, Tailwind, Styled-Components;
						</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Skills;
