import { Toolbar } from "./Toolbar";
import { ContentBox } from "./ContentBox";
import { useRef, useState, useEffect } from "react";
export const TextEditorContainer = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  const [clicked, setClicked] = useState(false);
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
    setClicked(!clicked);
    switch (formatType) {
      case "bold":
        document.execCommand("bold", false, null);
        break;
      case "italic":
        document.execCommand("italic", false, null);
        break;
      default:
        break;
    }
    handleInput(); // Save after making bold
  };

  return (
    <div className="container w-8xl " style={{ border: "1px solid grey" }}>
      <Toolbar handleFormat={handleFormat} clicked={clicked} />
      <ContentBox
        editorRef={editorRef}
        handleInput={handleInput}
        content={content}
      />
    </div>
  );
};
