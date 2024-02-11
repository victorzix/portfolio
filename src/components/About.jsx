import { useContext } from 'react';
import setTheme from '../SetTheme';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from './Header';
import { motion } from 'framer-motion';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function About() {
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
			<div className="h-screen lg:gap-8 xl:gap-10 md:gap-6 smallPhone:gap-6 w-screen justify-center flex items-center flex-col">
				<h1 className="xl:text-6xl lg:text-5xl md:text-4xl smallPhone:text-4xl">
					Sobre mim
				</h1>
				<div className="flex w-2/3 xl:text-3xl lg:text-2xl md:text-xl smallPhone:text-sm flex-col gap-4 text-center">
					<p>Olá, eu sou o Victor, como você está? Espero que bem 😊.</p>
					<p>
						Sou um desenvolvedor de 21 anos que atualmente mora em Duque de
						Caxias - RJ, à procura de minha primeira experiência na área.
					</p>
					<p>
						Você verá a seguir as minhas habilidades e experiências, e, já
						adianto que, gosto bastante de Frontend, porém a minha paixão está
						na criação de sistemas e Backend.
					</p>
					<p>
						Espero que sua estadia em meu portfólio lhe gere uma boa
						experiência e, quem sabe, até mesmo trabalhemos juntos não é mesmo?
					</p>
					<p>Bom, até daqui a pouco!</p>
				</div>

				<Link to='/'>
					<HiArrowLongLeft className="smallPhone:max-md:flex md:hidden absolute bottom-6 left-6 text-3xl " />
				</Link>
				<Link to='/habilidades'>
					<HiArrowLongRight className="smallPhone:max-md:flex md:hidden absolute bottom-6 right-6 text-3xl " />
				</Link>
			</div>
		</motion.div>
	);
}

export default About;
