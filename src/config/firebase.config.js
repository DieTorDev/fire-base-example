import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBzTgmHsbE3S1OQ6EW4L04odcf7Axh0h88',
	authDomain: 'users-firebase-51d43.firebaseapp.com',
	projectId: 'users-firebase-51d43',
	storageBucket: 'users-firebase-51d43.appspot.com',
	messagingSenderId: '10443468222',
	appId: '1:10443468222:web:9ad95f6df66f4ccd329def'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
