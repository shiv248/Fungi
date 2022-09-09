import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  const [isInfiFetching, setIsInfiFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isScrolling);
    return () => window.removeEventListener("scroll", isScrolling);
  }, []);

  useEffect(() => {
    if (!isInfiFetching) return;
    callback();
  }, [isInfiFetching]);

  function isScrolling() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isInfiFetching
    )
      return;
    setIsInfiFetching(true);
  }
  return [isInfiFetching, setIsInfiFetching];
};

export default useInfiniteScroll;
