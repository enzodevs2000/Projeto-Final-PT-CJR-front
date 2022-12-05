import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

function LongInput({ name, ...rest }) {
  const inputRef = useRef();
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
        clearValue: ref => {
        ref.current.value = '';
        },
    });
  }, [fieldName, registerField]);

  return (
    <input
      name={name}
      ref={inputRef}
      type="text"
      placeholder="Test"
      {...rest}
      className="border border-black p-2 pb-10 rounded-sm mt-1"
    />
  );
}

export default LongInput;
