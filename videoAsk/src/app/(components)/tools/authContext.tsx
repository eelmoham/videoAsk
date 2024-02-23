// AuthContext.tsx
'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { createContext, useState, useContext, FC, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    axios.get('http://localhost:5000/auth/logout').then((response) => {
      // console.log(response);
    }, (error) => {
    });
    localStorage.removeItem('jwt');
  };
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:5000/auth/authenticated').then((response) => {
      if (response.status === 200) {
        setIsLoggedIn(true)
        router.push('/create')
      }
    }).catch((error) => {
      setIsLoggedIn(false)
      console.log(error);
    });
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};