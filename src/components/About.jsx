import { useContext } from 'react';
import setTheme from '../SetTheme';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from './Header';
import { motion } from 'framer-motion';

function About() {
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: '100%'}}
			exit={{ opacity: 0, transition: { duration: 0.2 }}}
			className={`font-monda overflow-hidden ${newTheme.background} ${newTheme.text} ${newTheme.link} w-screen h-screen flex-col items-center`}
		>
			<Header />
			<div className="h-screen gap-10 w-screen justify-center flex items-center flex-col">
				<h1 className="text-6xl">Sobre mim</h1>
				<div className="flex w-2/3 text-3xl flex-col gap-4 text-center">
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
						Espero que sua estadia em meu portifólio lhe gere uma boa
						experiência e, quem sabe, até mesmo trabalhemos juntos não é mesmo?
					</p>
					<p>Bom, até daqui a pouco!</p>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
