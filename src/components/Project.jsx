import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import setTheme from "../SetTheme";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
function Project({ name, language, deploy, repository, description, techs }) {
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<div className="font-monda flex flex-col xl:gap-3.5 md:gap-3 smallPhone:gap-1 md:w-full">
			<div className="flex smallPhone:text-start items-center text-center lg:gap-2 md:gap-1 smallPhone:gap-2">
				<h2 className="font-bold xl:text-4xl md:text-3xl smallPhone:text-2xl">{name} -</h2>
        <h3 className="xl:text-4xl md:text-3xl">{language}</h3>

        <div className={`xl:ml-3 flex flex-col items-start xl:text-sm md:text-xs smallPhone:text-xs ${newTheme.link}`}>
          {deploy ? <Link target="blank" to={`https://${deploy}.victoraphael.com.br`}>Deploy</Link> : <p>O deploy ainda não foi feito</p>}
          <Link target="blank" to={`https://github.com/victorzix/${repository}`}>Repositório</Link>
        </div>
			</div>
      <p className="w-5/6 md:max-xl:text-sm">
        {description}
      </p>
      <p className="text-sm font-bold">{techs}</p>
		</div>
	);
}

export default Project;
