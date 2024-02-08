import IntroPage from './components/IntroPage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<IntroPage />
		</ThemeProvider>
	);
}

export default App;
