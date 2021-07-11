import type { LabelHTMLAttributes, FC } from "react";

type LabelAttributes = LabelHTMLAttributes<HTMLLabelElement>;
type LabelProps = Omit<LabelAttributes, "className">;

const Label: FC<LabelProps> = (props) => {
  return <label {...props} className="font-medium text-sm text-gray-600" />;
};

export default Label;
