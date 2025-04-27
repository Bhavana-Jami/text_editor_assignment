//formats content kept outside to keep it away from re-rendering
const formats = [
  { label: "Heading", format: "heading" },
  { label: "B", format: "bold" },
  { label: "I", format: "italic" },
  { label: "U", format: "underline" },
  { label: "S", format: "strikethrough" },
];
export const Toolbar = ({ handleFormat, clicked }) => {
  return (
    <div className="flex align-middle justify-start gap-2 h-15">
      <div className="mb-2">
        {formats.map((item, index) => (
          <button
            key={index}
            onClick={() => handleFormat(item.format)}
            style={{
              fontWeight: clicked.includes(item.format) ? "bold" : "normal",
            }}
            className="text-2xl cursor-pointer hover:bg-sky-100 text-black py-4 px-4 rounded formatButtonStyle"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};
