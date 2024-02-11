import { useContext } from 'react';
import setTheme from '../SetTheme';
import Header from './Header';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';

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
			<div className="h-screen xl:gap-10 lg:gap-8 md:gap-6 smallPhone:gap-4 w-screen justify-center flex items-center flex-col">
				<h1 className="xl:text-6xl md:text-5xl smallPhone:text-4xl">Habilidades</h1>
				<div className="flex xl:w-2/3 lg:w-3/4 flex-col xl:gap-10 lg:gap-8 md:gap-6 smallPhone:gap-4 text-center">
					<div className='flex flex-col xl:gap-4 lg:gap-3 smallPhone:gap-2'>
						<h2 className="xl:text-4xl md:text-3xl smallPhone:text-sm">
							Eu sou completamente apaixonado por <b>Backend.</b>
						</h2>
						<span className="xl:text-2xl md:text-xl smallPhone:text-xs">
							.NET, C#, ASP.NET, Fluent Validation, WEB API;
						</span>
						<span className="xl:text-2xl md:text-xl smallPhone:text-xs">
							Javascript, Typescript, Node, Express, ZOD, Jest;
						</span>
					</div>

					<div className='flex flex-col xl:gap-4 lg:gap-3 md:gap-2 smallPhone:gap-2'>
						<h2 className="xl:text-4xl md:text-3xl smallPhone:text-sm">
						Mas também gosto de desenvolver telas e landing pages do <b>Frontend.</b>
						</h2>
						<span className="xl:text-2xl md:text-xl smallPhone:text-xs">
						Javascript, React, HTML, CSS, Tailwind, Styled-Components;
						</span>
					</div>

					<div className='flex flex-col xl:gap-4 lg:gap-3 smallPhone:gap-2'>
						<h2 className="xl:text-4xl md:text-3xl smallPhone:text-sm">
						Assim como <b>Banco de Dados</b> e Softwares de <b>Devops.</b>
						</h2>
						<span className="xl:text-2xl md:text-xl smallPhone:text-xs">
						MySQL, PostgreSQL, MongoDB, Docker;
						</span>
					</div>
				</div>
				<Link to='/about'>
					<HiArrowLongLeft className="smallPhone:max-md:flex md:hidden absolute bottom-6 left-6 text-3xl " />
				</Link>
				<Link to='/projects'>
					<HiArrowLongRight className="smallPhone:max-md:flex md:hidden absolute bottom-6 right-6 text-3xl " />
				</Link>
			</div>
		</motion.div>
	);
}

export default Skills;
