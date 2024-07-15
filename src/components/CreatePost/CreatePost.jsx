import { addDoc } from 'firebase/firestore';
import { blogCollectionReference } from '../../config/firebase.config';

const CreatePost = () => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='title'>Title</label>
				<input type='text ' name='title' />
			</div>
			<div>
				<label htmlFor='text'>Text</label>
				<textarea name='text' />
			</div>
			<input type='submit' value='Send Post' />
		</form>
	);
};

const handleSubmit = async event => {
	event.preventDefault();

	const { title, text } = event.target;

	const newPostInfo = {
		title: title.value,
		text: text.value,
		date: new Date().toLocaleString()
	};

	try {
		await addDoc(blogCollectionReference, newPostInfo);
	} catch (error) {
		console.log(error);
	}
};

export default CreatePost;
