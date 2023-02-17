import React, { useState } from "react";

const UploadFiles = ({ setCtr }) => {
  const [files, setFiles] = useState([]);
  const handleFile = (e) => {
    const newFiles = Array.from(e.target.files);
    newFiles.forEach((file) => {
      // const reader = new FileReader();
      // reader.onload = () => {
      //   if (reader.readyState === 2) {
      setFiles((old) => {
        return [...old, file];
      });
      //   }
      // };
      // reader.readAsDataURL(file);
    });
    console.log(files);
  };
  const remove = (name) => {
    setFiles(files.filter(file => file.name !== name))
  }
  function handleSubmit() {}
  return (
    <div className="border-t-4 border-indigo-600 overflow-hidden rounded shadow-lg">
      <h3 className="text-xl text-center mt-8 mb-8">Well last thing!</h3>
      <div className="px-4 mb-4">
        <input
          type="file"
          multiple
          onChange={handleFile}
          className="rounded w-full p-3 text-center"
        />
      </div>
      <div className="w-full flex px-4">
        {files.map((file, idx) => {
          return (
            <div className="w-1/3 h-[100px] rounded relative flex-wrap" key={idx}>
              <img className="w-full object-center max-h-full rounded object-contain" src={URL.createObjectURL(file)} alt={idx}  />
              <div className="absolute top-0 right-0 " onClick={() => remove(file.name)}>X</div>
            </div>
          );
        })}
      </div>
      <div className="px-4 text-center mb-6 text-red-600">
        <button
          onClick={() => handleSubmit()}
          className="w-3/4 p-3 rounded bg-indigo-600 text-white"
        >
          Finish
        </button>
        <div className="m-2">Let's make them trust you</div>
      </div>
    </div>
  );
};

export default UploadFiles;
