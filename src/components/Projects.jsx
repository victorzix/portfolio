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
			className={`font-monda overflow-auto ${newTheme.background} ${newTheme.text} ${newTheme.link} w-screen h-screen flex-col flex gap-10`}
		>
			<Header />
			<div className="pl-12 flex-col flex justify-center h-auto gap-10">
				<h1 className="text-7xl">Projetos</h1>
				<div className='flex flex-col gap-6'>
					<Project
						name="Stock"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui. Acredito que de todas as coisas que aprendi com esse projeto, as principais foram: C# (Síntaxe e bibliotecas) e ASP.NET (Frameworks e suas utilizações). Também pude utilizar dos meus conhecimentos para tratar do banco de dados e validações no backend."
						techs='C#, ASP.NET Core, Web API, .NET'
					/>
					<Project
						name="Stock"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui. Acredito que de todas as coisas que aprendi com esse projeto, as principais foram: C# (Síntaxe e bibliotecas) e ASP.NET (Frameworks e suas utilizações). Também pude utilizar dos meus conhecimentos para tratar do banco de dados e validações no backend."
						techs='C#, ASP.NET Core, Web API, .NET'
					/>
					<Project
						name="Stock"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui. Acredito que de todas as coisas que aprendi com esse projeto, as principais foram: C# (Síntaxe e bibliotecas) e ASP.NET (Frameworks e suas utilizações). Também pude utilizar dos meus conhecimentos para tratar do banco de dados e validações no backend."
						techs='C#, ASP.NET Core, Web API, .NET'
					/>
					<Project
						name="Stock"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui. Acredito que de todas as coisas que aprendi com esse projeto, as principais foram: C# (Síntaxe e bibliotecas) e ASP.NET (Frameworks e suas utilizações). Também pude utilizar dos meus conhecimentos para tratar do banco de dados e validações no backend."
						techs='C#, ASP.NET Core, Web API, .NET'
					/>
					<Project
						name="Stock"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui. Acredito que de todas as coisas que aprendi com esse projeto, as principais foram: C# (Síntaxe e bibliotecas) e ASP.NET (Frameworks e suas utilizações). Também pude utilizar dos meus conhecimentos para tratar do banco de dados e validações no backend."
						techs='C#, ASP.NET Core, Web API, .NET'
					/>
					<Project
						name="Stock"
						language="C#"
						deploy="studies"
						repository="Cloth_Store"
						description="Esse é o primeiro projeto que faço utilizando C# e ASP.NET, porém utilizando os conhecimentos que possuo em Backend consegui absorver bastante coisa e aplicar esses conhecimentos aqui. Acredito que de todas as coisas que aprendi com esse projeto, as principais foram: C# (Síntaxe e bibliotecas) e ASP.NET (Frameworks e suas utilizações). Também pude utilizar dos meus conhecimentos para tratar do banco de dados e validações no backend."
						techs='C#, ASP.NET Core, Web API, .NET'
					/>
				</div>
			</div>
		</motion.div>
	);
}

export default Projects;
