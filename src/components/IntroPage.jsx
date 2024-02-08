import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import setTheme from '../SetTheme';

export default function IntroPage() {
	const {theme} = useContext(ThemeContext);
	const newTheme = setTheme(theme);

  function clicknew() {
    console.log(theme)
  }

	return (
		<div className={`${newTheme.background} ${newTheme.text} ${newTheme.link} h-screen`}>
      <span>{theme === 'light' ? <>BOM DIA</> : theme === 'dark' ? <>BOA NOITE</> : <>BOA TARDE</>}</span>
    </div>
	);
}
