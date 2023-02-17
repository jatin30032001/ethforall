import { useContext } from "react";
import AddressContext from "../context/UserProvider";
const useUser = () => {
  return useContext(AddressContext);
}

export default useUser;