import React, {createContext, useMemo} from 'react'

type authDataType = {
  id: string;
  password: string;
}

type authProps = {
  authData: authDataType;
}

export const AuthContext = createContext<authProps | null>(null);

function AuthenticationContext(props:any) {
    const authData = {"id": "admin", "password": "12345"};

    const contextPayload = useMemo(
      () => ({authData}), [authData])
  return <AuthContext.Provider value={contextPayload} {...props}/>;
}

export default AuthenticationContext;