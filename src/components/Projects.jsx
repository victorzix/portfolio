import { useContext } from 'react';
import setTheme from '../SetTheme';
import Header from './Header';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import Project from './Project';
import { Link } from 'react-router-dom';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import { SiCsharp } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

function Projects() {
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: '100%' }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			className={`font-monda smallPhone:max-lg:pt-8 overflow-auto ${newTheme.background} ${newTheme.text} ${newTheme.link} w-screen h-svh flex-col flex gap-10 smallPhone:max-lg:gap-4`}
		>
			<Header />
			<div className="pl-12 smallPhone:max-lg:pl-4 flex-col flex justify-center h-auto gap-10 smallPhone:max-lg:gap-3">
				<h1 className="text-7xl smallPhone:max-lg:text-2xl">Projetos</h1>
				<div className="grid md:grid md:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 pb-5 flex-wrap xl:gap-6 lg:gap-4 md:gap-4 smallPhone:max-lg:flex smallPhone:max-lg:gap-8">
					<Project
						name="Cloth Store"
						language={<SiCsharp/>}
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui."
						techs="C#, ASP.NET Core, Web API, .NET, Fluent Validation, JWT"
					/>
					<Project
						name="Task Manager"
						language={<BiLogoTypescript/>}
						repository="task_manager"
						description="Uma API de gerenciamento de tarefas para organizar trabalhos e atividades diárias. Essa foi uma das minhas primeiras aplicações ponta a ponta e onde eu diria que aprimorei mais a minha lógica"
						techs="TypeScript, Node.Js, ZOD, Prisma, JWT, Express"
					/>
					<Project
						name="Stock"
						language={<BiLogoTypescript/>}
						repository="stock"
						description="Esse foi meu primeiro projeto em que utilizei typescript, aproveitei também nesse mesmo projeto, para entender sobre testes com jest e validações de dados. Aqui foi onde aprendi que nem tudo é CRUD."
						techs="TypeScript, Node.Js, Sequelize, JWT, Express"
					/>
					<Link to='/habilidades'>
					<HiArrowLongLeft className="smallPhone:max-md:flex md:hidden absolute bottom-6 left-6 text-3xl " />
				</Link>
				<Link to='/contatos'>
					<HiArrowLongRight className="smallPhone:max-md:flex md:hidden absolute bottom-6 right-6 text-3xl " />
				</Link>
				</div>
			</div>
		</motion.div>
	);
}

export default Projects;
