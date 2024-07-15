import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { blogCollectionReference } from '../../config/firebase.config';
import CreatePost from '../CreatePost/CreatePost';

const Blog = () => {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		const subscribeToData = onSnapshot(blogCollectionReference, snapshot => {
			getPosts(setPosts, snapshot);
		});

		return () => subscribeToData();
	}, []);

	if (!posts) return <h1>No posts</h1>;
	return (
		<>
			<h1>Blog</h1>
			<CreatePost />
			{posts.map(post => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.text}</p>
				</div>
			))}
		</>
	);
};

const getPosts = async (setPosts, snapshot) => {
	const { docs } = snapshot;
	const dataInfo = docs.map(doc => {
		return {
			id: doc.id,
			...doc.data()
		};
	});

	if (dataInfo.length > 0) setPosts(dataInfo);
	else setPosts(null);
};

export default Blog;
