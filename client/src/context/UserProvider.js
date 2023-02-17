import { useState } from "react";
import { createContext } from "react";
const UserContext = createContext({});
export const UserProvider = ({children}) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{address: user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;