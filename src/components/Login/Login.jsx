import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup
} from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import GoBack from '../GoBack/GoBack';

const Login = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>LOGIN</h1>
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
				<button onClick={() => loginWithGoogle(navigate)}>
					Login with Google
				</button>
				<input type='submit' value='Login' />
			</form>
		</>
	);
};

const handleSubmit = async (event, navigate) => {
	event.preventDefault();
	const { email, password } = event.target;
	try {
		await signInWithEmailAndPassword(auth, email.value, password.value);
		navigate('/');
	} catch (err) {
		console.log(err);
	}

	console.log(email.value, password.value);
};

const loginWithGoogle = async navigate => {
	const provider = new GoogleAuthProvider();

	try {
		await signInWithPopup(auth, provider);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
};

export default Login;
