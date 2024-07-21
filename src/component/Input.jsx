import React from "react";

function Input({ text, onTextChange }) {
  return (
    <div className="input-container flex flex-col text-black w-full">
      <label htmlFor="text" className="text-white text-2xl">Enter Letter</label>
      <input
        type="text"
        className="h-10 w-4/5 outline-none bg-transparent ml-1 text-white"
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
