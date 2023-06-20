import { API_URL } from "../constant/apiURL";
import { CommentItem } from "../types/comment";

export const fetchComments = async (): Promise<CommentItem[]> => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.comments;
  } catch (error) {
    console.error(error);
    return [];
  }
};
