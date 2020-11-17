import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

const AUTH_USER_KEY = 'netflix.user';

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(AUTH_USER_KEY)));
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem(AUTH_USER_KEY);
        setUser(null);
      }
    });

    return () => listener;
  }, []);

  return { user };
}
