import { useEffect, useRef, useState } from "react";

export const TypeAnimation = ({ text, frame, setFlag, startTime = 0 }) => {
  const [typeText, setTypeText] = useState("");
  const textIndex = useRef(0);
  const lastTimeStamp = useRef(null);

  const animationCallback = (timeStamp) => {
    if (lastTimeStamp.current === null) {
      lastTimeStamp.current = timeStamp;
    }

    const elapsedTime = timeStamp - lastTimeStamp.current;

    // timeStamp를 측정해서, frame만큼 시간이 지날 경우 코드를 실행
    if (elapsedTime > frame) {
      lastTimeStamp.current = timeStamp;
      setTypeText((state) => {
        const newState = state + text[textIndex.current];
        textIndex.current += 1;
        return newState;
      });
    }

    if (textIndex.current >= text.length) {
      if (setFlag !== undefined) setFlag(false);
      return;
    }
    requestAnimationFrame(animationCallback);
  };

  const delayAnimation = (timestamp) => {
    if (lastTimeStamp.current === null) {
      lastTimeStamp.current = timestamp;
    }

    const elapsedTime = timestamp - lastTimeStamp.current;

    if (elapsedTime > startTime) {
      lastTimeStamp.current = null;
      requestAnimationFrame(animationCallback);
    } else {
      requestAnimationFrame(delayAnimation);
    }
  };

  useEffect(() => {
    let animatedId = requestAnimationFrame(delayAnimation);

    return () => cancelAnimationFrame(animatedId);
  }, [text]);

  const formattedText = typeText.length >= 1 && typeText.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index < text.split('\n').length - 1 && <br />}
    </span>
  ));

  return <>{formattedText}</>;
};
