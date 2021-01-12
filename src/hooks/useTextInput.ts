import { useCallback, useState } from "react";

export const useTextInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event: {target: {value: string}}) => {
        setValue(event.target.value);
  }, []);

  const reset = useCallback(() => setValue(''), []);

  return {
    value,
    setValue,
    reset,
    bind: {
      type: 'text',
      value,
      onChange,
    }
  };
};