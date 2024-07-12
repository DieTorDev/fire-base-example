import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import GoBack from '../GoBack/GoBack';

const Register = () => {
	const navigate = useNavigate();

	return (
		<>
			<h1>REGISTER</h1>
			<GoBack />
			<form onSubmit={e => handleSubmit(e, navigate)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' />
				</div>
				<input type='submit' value='Register' />
			</form>
		</>
	);
};

const handleSubmit = async (event, navigate) => {
	event.preventDefault();
	const { email, password } = event.target;
	try {
		await createUserWithEmailAndPassword(auth, email.value, password.value);
	} catch (err) {
		console.log(err);
	}

	navigate('/');

	console.log(email.value, password.value);
};

export default Register;
