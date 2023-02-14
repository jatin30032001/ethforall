import React, { useState } from "react";
import Recepient from "../components/Recepient";
import User from "../components/User";

const SignUp = () => {
  const [ctr, setCtr] = useState(0);
  const [user, setUser] = useState();

  console.log(ctr);
  return (
    <div className="max-w-md m-auto mt-6">
      {ctr === 0 ? <User setUser={setUser} setCtr={setCtr} /> : ctr===1?(user===0?<Recepient/>: <></>):<></>}
    </div>
  );
};

export default SignUp;
