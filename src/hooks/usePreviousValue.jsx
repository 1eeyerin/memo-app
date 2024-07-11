import { useEffect, useRef } from 'react';

const usePreviousValue = (value) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePreviousValue;
