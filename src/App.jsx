import { GlobalStyles } from './styles/GlobalStyles';
import AuthProvider from './provider/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<AuthProvider>
				<Router />
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
