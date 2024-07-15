import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef } from 'react';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';

const UploadFile = () => {
	const inputFile = useRef(null);

	return (
		<>
			<h1>Upload</h1>
			<form onSubmit={e => handleSubmit(e, inputFile)}>
				<input type='file' ref={inputFile} />
				<input type='submit' value='Upload Photo' />
			</form>
		</>
	);
};

const handleSubmit = async (event, inputFile) => {
	event.preventDefault();

	const file = inputFile.current.files[0];

	const nameWithoutExtension = file.name.substring(0, file.name.indexOf('.'));
	const finalName = `${nameWithoutExtension}-${v4()}`;
	const storageRef = ref(storage, finalName);

	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
		console.log(upload, imageURL);
	} catch (error) {
		console.error(error);
	}
};

export default UploadFile;
