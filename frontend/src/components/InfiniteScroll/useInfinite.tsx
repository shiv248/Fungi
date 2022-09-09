import React, { useState, useEffect } from "react";

export interface callbackProps {
  (): void;
}

const UseInfiniteScroll = (CallbackFunction: callbackProps) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);


  //runs on every rerender
  useEffect(() => {
    window.addEventListener("scroll", isAtBottom);
    //component did unmount
    return () => window.removeEventListener("scroll", isAtBottom);
  }, []);

  useEffect(() => {
    if (isFetching){
      CallbackFunction();
    }
  }, [isFetching]);

  function isAtBottom() {
    if (window.innerHeight + document.documentElement.scrollTop == document.documentElement.offsetHeight)
      setIsFetching(true);
  }
  return [isFetching, setIsFetching];
};

export default UseInfiniteScroll;
