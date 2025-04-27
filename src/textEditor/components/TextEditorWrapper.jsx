import { Toolbar } from "./Toolbar";
import { ContentBox } from "./ContentBox";
import { useRef, useState, useEffect } from "react";
export const TextEditorContainer = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  const [clicked, setClicked] = useState([]);
  // Load saved content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem("textEditorContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  // Save to localStorage on input
  const handleInput = () => {
    const newText = editorRef.current.innerHTML;
    setContent(newText);
    localStorage.setItem("textEditorContent", newText);
  };
  // Bold the selected text
  const handleFormat = (formatType) => {
    //making formattype bold, toggling on and off for identification
    setClicked((prevClicked) =>
      prevClicked.includes(formatType)
        ? prevClicked.filter((item) => item !== formatType)
        : [...prevClicked, formatType]
    );
    switch (formatType) {
      case "bold":
        document.execCommand("bold", false, null);
        // break;
      case "italic":
        document.execCommand("italic", false, null);
        // break;
      case "underline":
        document.execCommand("underline", false, null);
        // break;
      case "strikethrough":
        document.execCommand("strikethrough", false, null);
        break;
      default:
        break;
    }
    handleInput(); // Save after making bold
  };

  return (
    <div
      className="container w-8xl h-100vh"
      style={{ border: "1px solid grey" }}
    >
      <Toolbar handleFormat={handleFormat} clicked={clicked} />
      <ContentBox
        editorRef={editorRef}
        handleInput={handleInput}
        content={content}
      />
    </div>
  );
};
