import CommentForm from "../CommentForm/CommentForm";
import CommentCard from "../CommentCard/CommentCard";
import style from "./CommentList.module.css";

import { useCommentControl } from "../../hooks/useCommentControl";

export const CommentList = () => {
  const [comments, addComment, removeComment, loading] = useCommentControl();

  return (
    <section className={style.wrapper}>
      {loading ? (
        <p style={{ fontSize: "40px" }}>Loading...</p>
      ) : (
        <>
          {comments.map((comment) => (
            <CommentCard
              comment={comment}
              key={comment.id}
              removeComment={removeComment}
            />
          ))}
          <CommentForm addComment={addComment} />
        </>
      )}
    </section>
  );
};
