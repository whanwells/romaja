import type { TextareaHTMLAttributes, VFC } from "react";

type TextAreaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;
type TextAreaProps = Omit<TextAreaAttributes, "className" | "rows" | "cols">;

const TextArea: VFC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className="h-full w-full p-4 border border-gray-300 rounded"
    />
  );
};

export default TextArea;
