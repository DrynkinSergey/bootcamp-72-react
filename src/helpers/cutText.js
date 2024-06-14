export const cutText = (text, length = 60) => (text.length > length ? `${text.slice(0, length)}...` : text);
