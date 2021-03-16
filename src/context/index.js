import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from 'components/styles/GlobalStyle';

const AppProviders = ({ children }) => {
	return (
		<Router>
			<GlobalStyle />
			{children}
		</Router>
	);
};
export default AppProviders;
