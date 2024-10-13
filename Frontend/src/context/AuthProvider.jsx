import React, { createContext, useContext, useState } from 'react'
export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const initialAthUser = localStorage.getItem("Users");
    const [authUser, setAuthUser] = useState(
        initialAthUser? JSON.parse(initialAthUser) : undefined

    )

    return(
        <AuthContext.Provider value ={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext)