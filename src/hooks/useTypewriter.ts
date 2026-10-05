"use client";

import { useEffect, useState } from "react";

export interface UseTypewriterOptions {
  words: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 85,
  deletingSpeed = 45,
  pauseDelay = 1200,
}: UseTypewriterOptions) {
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[index];
    const isComplete = typedText === currentWord;
    const isEmpty = typedText.length === 0;

    const delay = isDeleting
      ? deletingSpeed
      : isComplete
        ? pauseDelay
        : typingSpeed;

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting && !isComplete) {
        setTypedText(currentWord.slice(0, typedText.length + 1));
        return;
      }

      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isEmpty) {
        setTypedText(currentWord.slice(0, typedText.length - 1));
        return;
      }

      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }, delay);

    return () => window.clearTimeout(timeoutId);
  }, [deletingSpeed, index, isDeleting, pauseDelay, typedText, typingSpeed, words]);

  return { typedText, activeIndex: index };
}
