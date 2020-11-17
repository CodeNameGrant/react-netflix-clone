import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCxdYSy8Vms3nYLIe-Ol_ViIFTSjshbOSY',
  authDomain: 'react-netflix-clone-b0153.firebaseapp.com',
  databaseURL: 'https://react-netflix-clone-b0153.firebaseio.com',
  projectId: 'react-netflix-clone-b0153',
  storageBucket: 'react-netflix-clone-b0153.appspot.com',
  messagingSenderId: '497256985240',
  appId: '1:497256985240:web:32bee03778c46c02d196ed',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
