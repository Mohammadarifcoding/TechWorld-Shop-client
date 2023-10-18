import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
   
    const [dark,setDark] = useState(true)
      const name = 'hello'
    const AuthInfo = { dark , setDark , name }
   
    return (
        <AuthContext.Provider value={AuthInfo}>
           {children}
        </AuthContext.Provider>
            
       
    );
};

export default AuthProvider;