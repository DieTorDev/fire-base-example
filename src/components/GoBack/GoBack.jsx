import { useNavigate } from 'react-router-dom';

const GoBack = () => {
	const navigate = useNavigate();
	return <button onClick={() => handleClick(navigate)}>Go Back</button>;
};

const handleClick = navigate => {
	navigate('/');
};

export default GoBack;
