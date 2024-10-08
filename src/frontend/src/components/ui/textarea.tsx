import * as React from "react";
import { cn } from "../../utils/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  password?: boolean;
  editNode?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, password, editNode, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(
            "nopan nodelete nodrag noflow textarea-primary",
            className,
            password ? "password" : "",
          )}
          ref={ref}
          {...props}
          value={props.value as string}
          onChange={props.onChange}
        />
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
