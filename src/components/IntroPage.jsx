import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { HiArrowLongRight } from 'react-icons/hi2';
import setTheme from '../SetTheme';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function IntroPage() {
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<motion.div
			className={`overflow-auto ${newTheme.background} ${newTheme.text} gap-10 h-screen flex flex-col items-center justify-center`}
			initial={{ width: 0, opacity: 0 }}
			animate={{ width: '100%', opacity: 1 }}
			exit={{
				x: -window.innerWidth,
				opacity: 0,
				transition: { duration: 0.5 },
			}}
		>
			<div className="presentation text-7xl ">
				<span className="font-monda">
					{theme === 'light' ? (
						<>BOM DIA</>
					) : theme === 'dark' ? (
						<>BOA NOITE</>
					) : (
						<>BOA TARDE</>
					)}
				</span>
				<span className="font-inter">, EU SOU O VICTOR</span>
			</div>

			<div className="welcome font-monda text-3xl">
				<p>Bem vindo(a) ao meu mundo</p>
			</div>

			<Link to="/about" className="w-full justify-center flex">
				<button
					className={`w-1/3 ${newTheme.button} h-20 rounded-full font-inter
				 text-2xl flex items-center hover:bg-[#39B55C] hover:text-[#F9FBFF] text-light-text
				 duration-300`}
				>
					<div className="w-2/3 h-auto text-end">AVANÇAR</div>
					<HiArrowLongRight className="w-1/2 text-4xl" />
				</button>
			</Link>
		</motion.div>
	);
}
