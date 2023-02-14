import React from "react";

const Recepient = () => {
  return (
    <div className="border-t-4 border-indigo-600 overflow-hidden rounded shadow-lg">
      <h3 className="text-xl text-center mt-8 mb-8">Let's be honest!</h3>
      <div className="px-4 mb-4">        
        <input
          id="name"
          type="text"
          className="border border-gray rounded w-full p-3 text-center"
          placeholder="Full Name"
          autoComplete="off"
        />
      </div>
      <div className="px-4 mb-4">
      <input
          id="name"
          type="text"
          className="border border-gray rounded w-full p-3 text-center"
          placeholder=""
          autoComplete="off"
        />
      </div>
      <div className="px-4 mb-4">
      <input
          id="name"
          type="text"
          className="border border-gray rounded w-3/12 p-3 text-center"
          placeholder="+91"
          autoComplete="off"
        /> 
      <input
          id="number"
          type="text"
          className="border border-gray rounded p-3 w-9/12 text-center"
          placeholder="Contact"
          autoComplete="off"
        />
      </div>
      <div className="px-4 mb-6 text-red-600">
        Recepient has to provide complete details for transparency
      </div>
    </div>
  );
};

export default Recepient;
