import type { TextareaHTMLAttributes, VFC } from "react";

type TextAreaAttributes = TextareaHTMLAttributes<HTMLTextAreaElement>;
type TextAreaProps = Omit<TextAreaAttributes, "className" | "rows" | "cols">;

const TextArea: VFC<TextAreaProps> = (props) => {
  return (
    <textarea
      {...props}
      className="h-full w-full rounded border border-gray-300 p-4"
    />
  );
};

export default TextArea;
