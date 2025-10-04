import {createContext, useContext, useState} from 'react';

/*
 * For the sake of simplicity for PoC we hold the role in state instead of creating
 * the whole authentication system.
 */

const RoleContext = createContext(null);

export const useRole = () => useContext(RoleContext);

export const RoleProvider = ({children}) => {
    const [role, setRole] = useState(null);
    return (
        <RoleContext.Provider value={{ role, setRole }}>
            {children}
        </RoleContext.Provider>
    );
};