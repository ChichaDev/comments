import { getInitialLetter } from "../../helpers/getInitialLetter";
import { CommentItem } from "../../types/comment";
import style from "./CommentCard.module.css";

type CommentProps = {
  comment: CommentItem;
  removeComment: (id: number) => void;
};

function CommentCard({ comment, removeComment }: CommentProps) {
  const username = comment.user?.username;
  const initialLetter = getInitialLetter(username);

  return (
    <article key={comment.id} className={style.card}>
      <div className={style.wrapper}>
        <span className={style.initials}>{username ? initialLetter : "U"}</span>
        <h2 className={style.title}>{username ? username : "Unknown User"}</h2>
      </div>

      <p className={style.description}>{comment.body}</p>
      <button
        type="button"
        className={style.closeIcon}
        onClick={() => removeComment(comment.id)}
      >
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </button>
    </article>
  );
}

export default CommentCard;
