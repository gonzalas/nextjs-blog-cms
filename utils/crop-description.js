export const setNoteDescription = (content) => {
  const maxCharacters = 70;
  return content.length >= maxCharacters
    ? content.slice(0, maxCharacters).concat("...")
    : content;
};
