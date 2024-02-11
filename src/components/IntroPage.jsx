import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { HiArrowLongRight, HiArrowLongDown } from 'react-icons/hi2';
import setTheme from '../SetTheme';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function IntroPage() {
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<motion.div
			className={`overflow-auto ${newTheme.background} ${newTheme.text} xl:gap-10 lg:gap-6 md:gap-4 h-screen flex flex-col items-center justify-center`}
			initial={window.innerWidth < 768 ? { opacity: 0, translateY: 50 } : { opacity: 0, translateX: -50 }}
    animate={window.innerWidth < 768 ? { opacity: 1, translateY: 0 } : { opacity: 1, translateX: 0 }}
    exit={window.innerWidth < 768 ? { opacity: 0, translateY: -window.innerHeight, transition: { duration: 0.5 } } : {
        opacity: 0,
        translateX: -window.innerWidth,
        transition: { duration: 0.5 },
    }}
		>
			<div className="presentation xl:text-7xl lg:text-5xl md:text-3xl">
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

			<div className="welcome font-monda xl:text-3xl lg:text-2xl md:text-xl">
				<p>Bem vindo(a) ao meu mundo</p>
			</div>

			<Link to="/about" className="w-full justify-center flex">
			<HiArrowLongDown className='smallPhone:max-md:flex md:hidden absolute bottom-2 text-3xl '/>
				<button
					className={`smallPhone:max-md:hidden md:flex w-1/3 md:w-2/4 ${newTheme.button} xl:h-20 lg:h-16 md:h-14 rounded-full font-inter
				 xl:text-2xl md:text-xl items-center hover:bg-[#39B55C] hover:text-[#F9FBFF] text-light-text
				 duration-300 `}
				>
					<div className="w-2/3 h-auto text-end">AVANÇAR</div>
					<HiArrowLongRight className="w-1/2 xl:text-4xl lg:text-3xl md:text-2xl"/>
				</button>
			</Link>
		</motion.div>
	);
}
