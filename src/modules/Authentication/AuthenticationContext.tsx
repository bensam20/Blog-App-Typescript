import React, {createContext, useMemo, useState} from 'react'

type authDataType = {
  id: string;
  password: string;
}

type authProps = {
  authData: authDataType;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialAuthData = localStorage.getItem("isLoggedIn") ? true : false;

export const AuthContext = createContext<authProps | null>(null);

function AuthenticationContext(props:any) {
    const authData = {"id": "admin", "password": "12345"};
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(initialAuthData);

    const contextPayload = useMemo(
      () => ({
        authData,
        isLoggedIn,
        setIsLoggedIn
      }), [
        authData,
        isLoggedIn
      ])
  return <AuthContext.Provider value={contextPayload} {...props}/>;
}

export default AuthenticationContext;