import { motion } from 'framer-motion';
import Header from './Header';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import setTheme from '../SetTheme';
import { Link } from 'react-router-dom';
import { HiArrowLongLeft } from 'react-icons/hi2';

function Contacts() {
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
			<div className="h-svh w-screen flex flex-col lg:gap-16 md:gap-12 smallPhone:gap-8 justify-center items-center">
				<h1 className="lg:text-6xl md:text-5xl smallPhone:text-4xl">
					Contatos
				</h1>
				<div className="text-center lg:text-3xl md:text-2xl smallPhone:text-xl">
					<p>Eai? Se interessou no meu trabalho?</p>
					<p>
						Você pode me encontrar em minhas redes, e também olhar meu currículo
						no link abaixo
					</p>
				</div>
				<div
					className={`flex lg:gap-3 md:gap-2 smallPhone:gap-2 lg:text-2xl md:text-xl ${newTheme.link}`}
				>
					<Link target='blank' to="https://www.linkedin.com/in/victorphael/" className="hover:scale-105 transition-all">Linkedin</Link>
					<span className={`${newTheme.text}`}> | </span>
					<Link target='blank' to="https://github.com/victorzix" className="hover:scale-105 transition-all">Github</Link>
					<span className={`${newTheme.text}`}> | </span>
					<Link target='blank' to="../victorcurr.pdf" className="hover:scale-105 transition-all">Currículo</Link>
				</div>
			</div>
			<Link to="/projetos">
				<HiArrowLongLeft className="smallPhone:max-md:flex md:hidden absolute bottom-6 left-6 text-3xl " />
			</Link>
		</motion.div>
	);
}

export default Contacts;
