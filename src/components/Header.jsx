import { Link, useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();

	return (
		<div className="pt-6 max-[762px]:hidden md:w-2/3 h-14 w-1/3 font-monda flex items-center justify-around">
			<Link
				to="/sobre"
				className={location.pathname === '/sobre' ? 'font-bold' : ''}
			>
				<span>SOBRE MIM</span>
			</Link>
			<Link
				to="/habilidades"
				className={location.pathname === '/habilidades' ? 'font-bold' : ''}
			>
				<span>HABILIDADES</span>
			</Link>
			<Link
				to="/projetos"
				className={location.pathname === '/projetos' ? 'font-bold' : ''}
			>
				<span>PROJETOS</span>
			</Link>

			<Link
				to="/contatos"
				className={location.pathname === '/contatos' ? 'font-bold' : ''}
			>
				<span>CONTATOS</span>
			</Link>
		</div>
	);
}

export default Header;
