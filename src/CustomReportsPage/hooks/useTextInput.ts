import { useState } from "react";

export const useTextInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      type: 'text',
      value,
      onChange: (event: {target: {value: string}}) => {
        setValue(event.target.value);
      }
    }
  };
};