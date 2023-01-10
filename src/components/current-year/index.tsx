import { useEffect, useState } from 'react';

export const CurrentYear = (props: { defaultYear: number }) => {
  const [year, setYear] = useState<number>(props.defaultYear);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <span>{year}</span>;
};
