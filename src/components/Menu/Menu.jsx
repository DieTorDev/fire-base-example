import { Link } from 'react-router-dom';
import { StyledMenu } from './menu.styles';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';

const Menu = () => {
	const { userLogged } = useContext(AuthContext);

	return (
		<StyledMenu>
			<li>{<Link to='/'>Home</Link>}</li>
			{!userLogged && (
				<>
					<li>{<Link to='/register'>Register</Link>}</li>
					<li>{<Link to='/login'>Login</Link>}</li>
				</>
			)}
			{userLogged && <li>{<Link to='/profile'>Profile</Link>}</li>}
		</StyledMenu>
	);
};

export default Menu;
