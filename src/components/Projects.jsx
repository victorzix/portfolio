import { useContext } from 'react';
import setTheme from '../SetTheme';
import Header from './Header';
import { motion } from 'framer-motion';
import { ThemeContext } from '../contexts/ThemeContext';
import Project from './Project';

function Projects() {
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: '100%' }}
			exit={{ opacity: 0, transition: { duration: 0.2 } }}
			className={`font-monda smallPhone:pt-8 overflow-auto ${newTheme.background} ${newTheme.text} ${newTheme.link} w-screen h-svh flex-col flex gap-10 smallPhone:gap-4`}
		>
			<Header />
			<div className="pl-12 smallPhone:pl-4 flex-col flex justify-center h-auto gap-10 smallPhone:gap-3">
				<h1 className="text-7xl smallPhone:text-2xl">Projetos</h1>
				<div className="2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 pb-5 flex-wrap xl:gap-6 lg:gap-4 md:gap-4 smallPhone:flex smallPhone:gap-8">
					<Project
						name="Cloth Store"
						language="C#"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui."
						techs="C#, ASP.NET Core, Web API, .NET"
					/>
					<Project
						name="Cloth Store"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui."
						techs="C#, ASP.NET Core, Web API, .NET"
					/>
					<Project
						name="Cloth Store"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui."
						techs="C#, ASP.NET Core, Web API, .NET"
					/>
					<Project
						name="Cloth Store"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui."
						techs="C#, ASP.NET Core, Web API, .NET"
					/>
					<Project
						name="Cloth Store"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui."
						techs="C#, ASP.NET Core, Web API, .NET"
					/>
					<Project
						name="Cloth Store"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui."
						techs="C#, ASP.NET Core, Web API, .NET"
					/>
					<Project
						name="Cloth Store"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui."
						techs="C#, ASP.NET Core, Web API, .NET"
					/>
					<Project
						name="Cloth Store"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui."
						techs="C#, ASP.NET Core, Web API, .NET"
					/>
				</div>
			</div>
		</motion.div>
	);
}

export default Projects;
