import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setSession(session);
    setUser(session?.user || null);

    const {
        data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        setUser(session?.user || null)
    })

    return () => subscription.unsubscribe()
  }, []);

  const value = {
    session,
    user,
    signIn: (email, password) => supabase.auth.signInWithPassword({ email, password }),
    signUp: (email, password) => supabase.auth.signUp({ email, password }),
    signOut: () => supabase.auth.signOut(),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
