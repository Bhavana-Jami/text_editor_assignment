import { useState } from "react";

export const Toolbar = ({ handleFormat, clicked }) => {
  return (
    <div className="flex align-middle justify-start gap-2">
      <div className="mb-2">
        <button
          onClick={() => handleFormat("bold")}
          style={{ fontWeight: clicked ? "bold" : "normal" }}
          className="text-2xl cursor-pointer hover:text-black-700  text-black  py-2 px-4 rounded formatButtonStyle"
        >
          Heading
        </button>
        <button
          onClick={() => handleFormat("bold")}
          className="text-2xl hover:bg-sky-700 text-black  py-2 px-4 rounded formatButtonStyle"
        >
          B
        </button>
        <button
          onClick={() => handleFormat("italic")}
          className="text-2xl hover:bg-sky-700 text-black  py-2 px-4 rounded formatButtonStyle"
        >
          I
        </button>
        <button
          onClick={() => handleFormat("")}
          className="text-2xl hover:bg-sky-700 text-black  py-2 px-4 rounded formatButtonStyle"
        >
          U
        </button>
        <button
          onClick={() => handleFormat("")}
          className="text-2xl hover:bg-sky-700 text-black  py-2 px-4 rounded formatButtonStyle"
        >
          S
        </button>
      </div>
    </div>
  );
};
