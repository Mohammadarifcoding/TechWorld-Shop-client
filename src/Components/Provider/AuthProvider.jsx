import React, { createContext, useState } from 'react';

 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
   
    const [dark,setdark] = useState(false)

    const AuthInfo = { dark }
   
    return (
        <AuthContext.Provider value={AuthInfo}>
           {children}
        </AuthContext.Provider>
            
       
    );
};

export default AuthProvider;