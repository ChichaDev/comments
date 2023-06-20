export type User = {
  id: number;
  username: string;
};

export type CommentItem = {
  id: number;
  body: string;
  postId?: number;
  user?: User;
};
