import { useState } from "react";

export function useInput(
  initialValue: string,
  regex?: RegExp,
  errorMessage?: string
) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setInputValue(inputText);

    if (regex && errorMessage) {
      if (regex.test(inputText)) {
        setError(null); //정규식이 맞을 땐 에러 제거
      } else {
        setError(errorMessage);
      }
    }
  };

  return [inputValue, handleChange, error] as const;
}
