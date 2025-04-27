import { DropDown } from "./DropDown";

//formats content kept outside to keep it away from re-rendering
const formats = [
  { label: "B", format: "bold" },
  { label: "I", format: "italic" },
  { label: "U", format: "underline" },
  { label: "S", format: "strikethrough" },
];

export const Toolbar = ({ handleFormat, clicked, setDropDownValue }) => {
  return (
    <div className="flex items-center justify-start gap-2  flex-wrap m-3.5">
      {/* Dropdown */}
      <DropDown
        setDropDownValue={setDropDownValue}
        handleFormat={handleFormat}
      />
      
      {/* Format buttons */}
      {formats.map((item, index) => (
        <button
          key={index}
          onClick={() => handleFormat(item.format)}
          style={{
            fontWeight: clicked.includes(item.format) ? "bold" : "normal",
          }}
          className="text-2xl cursor-pointer hover:bg-sky-100 text-black py-2 px-4 sm:text-base sm:px-2 sm:py-2 md:text-lg md:px-4 md:py-3 lg:text-xl lg:px-5 lg:py-3"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
