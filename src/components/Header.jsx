import { Link, useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();

	return (
		<div className="pt-6 h-14 w-1/3 font-monda flex items-center justify-around">
			<Link
				to="/about"
				className={location.pathname === '/about' ? 'font-bold' : ''}
			>
				<span>SOBRE MIM</span>
			</Link>
			<Link
				to="/skills"
				className={location.pathname === '/skills' ? 'font-bold' : ''}
			>
				<span>HABILIDADES</span>
			</Link>
			<Link
				to="/projects"
				className={location.pathname === '/projects' ? 'font-bold' : ''}
			>
				<span>PROJETOS</span>
			</Link>
		</div>
	);
}

export default Header;
