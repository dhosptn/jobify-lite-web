import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth'; // ✅ pakai type saja

import { auth } from '../lib/firebase';

interface AuthUser {
  uid: string;
  email: string | null;
  name: string | null;
}

const AuthContext = createContext<{
  user: AuthUser | null;
  logout: () => void;
}>({
  user: null,
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName ?? 'User',
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
