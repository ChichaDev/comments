import { useEffect, useState } from "react";
import { CommentItem } from "../types/comment";
import { fetchComments } from "../api/fetchCommentList";

export const useCommentControl = (): [
  CommentItem[],
  (userInput: string) => void,
  (id: number) => void
] => {
  const [comments, setComments] = useState<CommentItem[]>([]);

  useEffect(() => {
    fetchComments().then((comments) => {
      setComments(comments);
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

  return [comments, addComment, removeComment];
};
