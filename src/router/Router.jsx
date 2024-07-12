import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import Register from '../components/Register/Register';
import Login from '../components/Login/login';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/Login' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default Router;
