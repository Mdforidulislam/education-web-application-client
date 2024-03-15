import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const names = { first: "Foyez", second: "Konok" }
     
    const authInfo = {
        names,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;