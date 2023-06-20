import React, {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";
import style from "./CommentForm.module.css";
import useDebounce from "../../hooks/useDebounce";
import {
  getSavedCommentText,
  saveCommentText,
} from "../../helpers/commentStorageHelpers";

type CommentFormProps = {
  addComment: (value: string) => void;
};

const CommentForm: React.FC<CommentFormProps> = ({ addComment }) => {
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

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <textarea
        value={userInput}
        onChange={handleChange}
        placeholder="Enter a task..."
        className={style.textarea}
      ></textarea>
      <button type="submit" className={style.btn}>
        Send
      </button>
    </form>
  );
};

export default CommentForm;
