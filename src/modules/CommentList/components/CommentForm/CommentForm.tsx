import { useFormControl } from "../../hooks/useFormControl";
import style from "./CommentForm.module.css";

type CommentFormProps = {
  addComment: (value: string) => void;
};

const CommentForm = ({ addComment }: CommentFormProps) => {
  const { userInput, handleChange, handleSubmit } = useFormControl(addComment);

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
