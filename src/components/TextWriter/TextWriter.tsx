import { useState, useEffect, useRef } from 'react';

export default function TypeWriter(props) {
  const [displayedContent, setDisplayedContent] = useState('');
  const [index, setIndex] = useState(0);
  const dataFetchedRef = useRef(false);

  let old_index = -1;

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= props.content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, props.speed);
  }, []);

  useEffect(() => {
    if (old_index == index) return;
    old_index = index;

    setDisplayedContent(
      (displayedContent) => displayedContent + props.content[index]
    );

    props.box_ref.current.scrollTop = props.box_ref.current.scrollHeight;
  }, [index]);

  return <p>{displayedContent}</p>;
}
