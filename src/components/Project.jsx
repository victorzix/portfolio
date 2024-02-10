import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import setTheme from "../SetTheme";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
function Project({ name, language, deploy, repository, description, techs }) {
	const { theme } = useContext(ThemeContext);
	const newTheme = setTheme(theme);

	return (
		<div className="font-monda flex flex-col gap-3.5">
			<div className="flex items-center text-center gap-2">
				<h2 className="font-bold text-4xl">{name} -</h2>
        <h3 className="text-4xl">{language}</h3>

        <div className={`ml-3 flex flex-col items-start text-sm ${newTheme.link}`}>
          <Link target="blank" to={`https://${deploy}.victoraphael.com.br`}>Deploy</Link>
          <Link target="blank" to={`https://github.com/victorzix/${repository}`}>Repositório</Link>
        </div>
			</div>
      <p className="w-5/6">
        {description}
      </p>
      <p className="text-sm font-bold">{techs}</p>
		</div>
	);
}

export default Project;
