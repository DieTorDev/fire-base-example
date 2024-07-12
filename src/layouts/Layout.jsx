import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { StyledMainContainer } from './layout.styles';

const Layout = () => {
	return (
		<StyledMainContainer>
			<Header />
			<Outlet />
		</StyledMainContainer>
	);
};

export default Layout;
