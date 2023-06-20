import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";
import style from "./CommentList.module.css";

import { useCommentControl } from "../../hooks/useCommentControl";

export const CommentList = () => {
  const [comments, addComment, removeComment] = useCommentControl();

  return (
    <section className={style.wrapper}>
      {comments.map((comment) => {
        return (
          <CommentCard
            comment={comment}
            key={comment.id}
            removeComment={removeComment}
          />
        );
      })}
      <CommentForm addComment={addComment} />
    </section>
  );
};
