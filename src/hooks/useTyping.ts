'use client';

import { useEffect, useState } from 'react';

// ✏️ Typing effect: mengetik kata berulang dengan delete.
export function useTyping(words: string[], typingSpeed = 90, deletingSpeed = 45, pause = 1600) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] ?? '');
      return;
    }
    const word = words[wordIndex] ?? '';
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === word) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) => (isDeleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1)));
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
