import type { TextareaHTMLAttributes, VFC } from "react";

type TextAreaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;
type TextAreaProps = Omit<TextAreaAttributes, "className" | "rows" | "cols">;

const TextArea: VFC<TextAreaProps> = (props) => {
  return (
    <textarea {...props} className="p-2 w-full h-72 border border-gray-300" />
  );
};

export default TextArea;
