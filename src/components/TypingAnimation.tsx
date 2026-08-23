import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  typingSpeed?: number;
  delay?: number;
  className?: string;
}

const TypingAnimation = ({
  text,
  typingSpeed = 100,
  delay = 0,
  className = "",
}: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      setIsTyping(true);

      let currentIndex = 0;

      intervalId = window.setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex += 1;
        } else {
          window.clearInterval(intervalId);
          setIsTyping(false);
        }
      }, typingSpeed);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);

      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [text, typingSpeed, delay]);

  return (
    <span
      className={`typing-text ${isTyping ? "is-typing" : ""} ${className}`}
    >
      {displayedText}
    </span>
  );
};

export default TypingAnimation;