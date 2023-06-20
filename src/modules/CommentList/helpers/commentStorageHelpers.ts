export function getSavedCommentText(): string | null {
  return localStorage.getItem("commentText");
}

export function saveCommentText(text: string): void {
  localStorage.setItem("commentText", text);
}
