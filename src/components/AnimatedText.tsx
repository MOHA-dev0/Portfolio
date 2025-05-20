import { useState, useEffect, useRef } from 'react';
interface AnimatedTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}
const AnimatedText: React.FC<AnimatedTextProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const currentTextRef = useRef(texts[0]);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 400);
    return () => clearInterval(cursorInterval);
  }, []);
  useEffect(() => {
    currentTextRef.current = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTextRef.current.length) {
          setDisplayText(currentTextRef.current.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTextRef.current.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, typingSpeed, deletingSpeed, texts, delayBetween]);
  return (
    
    <div className="inline-flex items-center">
      <span className="text-primary font-semibold">{displayText}</span>
      <span 
        className={`w-0.5 h-6 bg-primary ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} 
        style={{ transition: 'opacity 0.2s' }}
      ></span>
    </div>
  );
};
export default AnimatedText;
