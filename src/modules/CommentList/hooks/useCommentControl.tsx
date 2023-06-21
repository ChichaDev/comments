import { useEffect, useState } from "react";
import { CommentItem } from "../types/comment";
import { fetchComments } from "../api/fetchCommentList";

export const useCommentControl = (): [
  CommentItem[],
  (userInput: string) => void,
  (id: number) => void,
  boolean
] => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchComments().then((comments) => {
      setComments(comments);
      setLoading(false);
    });
  }, []);

  const addComment = (userInput: string) => {
    if (userInput) {
      const newItem: CommentItem = {
        id: Math.random() * 1000,
        body: userInput,
      };
      setComments([...comments, newItem]);
    }
  };

  const removeComment = (id: number) => {
    setComments([...comments.filter((com) => com.id !== id)]);
  };

  return [comments, addComment, removeComment, loading];
};
