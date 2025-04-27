import { Toolbar } from "./Toolbar";
import { ContentBox } from "./ContentBox";
import { useRef, useState, useEffect } from "react";
export const TextEditorContainer = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  const [clicked, setClicked] = useState([]);
  const [, setDropDownValue] = useState("");

  useEffect(() => {
    const editor = editorRef.current;
    const savedContent = localStorage.getItem("textEditorContent");
    if (savedContent) {
      setContent(savedContent);
    }
    const handlePaste = (e) => {
      e.preventDefault();
      const clipboardData = e.clipboardData || window.clipboardData;
      const htmlData = clipboardData.getData("text/html");
      const textData = clipboardData.getData("text/plain");

      if (htmlData) {
        document.execCommand("insertHTML", false, htmlData);
      } else if (textData) {
        document.execCommand("insertText", false, textData);
      }
    };

    if (editor) {
      editor.addEventListener("paste", handlePaste);
    }

    return () => {
      if (editor) {
        editor.removeEventListener("paste", handlePaste);
      }
    };
  }, []);
  const handleInput = () => {
    const newText = editorRef.current.innerHTML;
    setContent(newText);
    localStorage.setItem("textEditorContent", newText);
  };
  const handleFormat = (formatType) => {
    setClicked((prevClicked) =>
      prevClicked.includes(formatType)
        ? prevClicked.filter((item) => item !== formatType)
        : [...prevClicked, formatType]
    );

    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const selectedText = selection.toString();
    if (!selectedText) return;
    let element;

    switch (formatType) {
      case "bold":
        document.execCommand("bold", false, null);
        break;
      case "italic":
        document.execCommand("italic", false, null);
        break;
      case "underline":
        document.execCommand("underline", false, null);
        break;
      case "strikethrough":
        document.execCommand("strikethrough", false, null);
        break;
      case "h1":
        element = document.createElement("h1");
        element.textContent = selectedText;
        range.deleteContents();
        range.insertNode(element);
        break;
      case "h2":
        element = document.createElement("h2");
        element.textContent = selectedText;
        range.deleteContents();
        range.insertNode(element);
        break;
      case "h3":
        element = document.createElement("h3");
        element.textContent = selectedText;
        range.deleteContents();
        range.insertNode(element);
        break;
      case "h4":
        element = document.createElement("h4");
        element.textContent = selectedText;
        range.deleteContents();
        range.insertNode(element);
        break;
      case "p":
        element = document.createElement("p");
        element.textContent = selectedText;
        range.deleteContents();
        range.insertNode(element);
        break;
      default:
        break;
    }

    handleInput();
  };

  return (
    <div
      className="container w-8xl h-100vh"
      style={{ border: "1px solid grey" }}
    >
      <Toolbar
        handleFormat={handleFormat}
        clicked={clicked}
        setDropDownValue={setDropDownValue}
      />
      <ContentBox
        editorRef={editorRef}
        handleInput={handleInput}
        content={content}
        handleFormat={handleFormat}
        setDropDownValue={setDropDownValue}
      />
      <p>{content}</p>
    </div>
  );
};
