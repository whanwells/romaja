import type { LabelHTMLAttributes, FC } from "react";

type LabelAttributes = LabelHTMLAttributes<HTMLLabelElement>;
type LabelProps = Omit<LabelAttributes, "className">;

const Label: FC<LabelProps> = (props) => {
  return <label {...props} className="text-sm font-medium text-gray-600" />;
};

export default Label;
