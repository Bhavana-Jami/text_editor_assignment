import "../styles/ContentBox.css";
export const ContentBox = (props) => {
  return (
    <div
      ref={props.editorRef}
      contentEditable="true"
      id="text_editor_wrapper"
      className=" bg-sky-100 h-85 p-4 text-black overflow-auto flex justify-items-end "
      onInput={props.handleInput}
    ></div>
  );
};
