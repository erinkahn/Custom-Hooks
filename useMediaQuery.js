import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => setMatches(mediaQueryList.matches);
    updateMatch();

    mediaQueryList.addEventListener('change', updateMatch);
    return () => mediaQueryList.removeEventListener('change', updateMatch);
  }, [query]);

  return matches;
}

export default useMediaQuery;


// usage

const isMobile = useMediaQuery('(max-width: 768px)');

return <p>{isMobile ? 'Mobile View' : 'Desktop View'}</p>;
