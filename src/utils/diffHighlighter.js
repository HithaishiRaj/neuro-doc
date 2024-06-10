/// src/utils/diffHighlighter.js
import { diffChars } from 'diff';

export const getHighlightedDifferences = (text1, text2) => {
  const diff = diffChars(text1, text2);
  return diff.map((part, index) => {
    const className = part.added ? 'added' : part.removed ? 'removed' : '';
    return (
      <span key={index} className={className}>
        {part.value}
      </span>
    );
  });
};