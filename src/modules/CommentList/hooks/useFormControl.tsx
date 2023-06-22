import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";

import useDebounce from "../../../hooks/useDebounce";
import {
  getSavedCommentText,
  saveCommentText,
} from "../helpers/commentStorageHelpers";

type useFormControlProps = (value: string) => void;

export const useFormControl = (addComment: useFormControlProps) => {
  const [userInput, setUserInput] = useState("");
  const debouncedUserInput = useDebounce(userInput, 200);

  useEffect(() => {
    const savedCommentText = getSavedCommentText();
    if (savedCommentText) {
      setUserInput(savedCommentText);
    }
  }, []);

  useEffect(() => {
    saveCommentText(debouncedUserInput);
  }, [debouncedUserInput]);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newText = e.currentTarget.value;
    setUserInput(newText);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addComment(debouncedUserInput);
    setUserInput("");
  };

  return {
    userInput,
    handleChange,
    handleSubmit,
  };
};
