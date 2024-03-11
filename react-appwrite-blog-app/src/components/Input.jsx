import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="inline-block mb-1 pl-1">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className={`w-full px-3 py-2 text-black outline-none border border-gray-200 rounded-lg focus:bg-gray-50 duration-200 ${className}`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
