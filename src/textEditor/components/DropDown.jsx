const options = [
  { value: "normal", label: "Normal" },
  { value: "h1", label: "Heading 1" },
  { value: "h2", label: "Heading 2" },
  { value: "h3", label: "Heading 3" },
  { value: "h4", label: "Heading 4" },
];

export const DropDown = ({ setDropDownValue, handleFormat }) => {
  const handleDropDownChange = (e) => {
    const val = e.target.value;
    setDropDownValue(val);
    switch (val) {
      case "h1":
        handleFormat("h1");
        break;
      case "h2":
        handleFormat("h2");
        break;
      case "h3":
        handleFormat("h3");
        break;
      case "h4":
        handleFormat("h4");
        break;
      default:
        handleFormat("p");
        break;
    }
  };

  return (
    <form>
      <select
        onChange={handleDropDownChange}
        label="select the font size"
        className="bg-gray-50 py-3 px-4 text-gray-900 text-xl focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};
