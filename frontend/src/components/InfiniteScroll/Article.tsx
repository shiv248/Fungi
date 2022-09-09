import React, { useState, useEffect } from "react";
import axios from "axios";
import UseInfiniteScroll from "./useInfinite";
import PostCard from "../PostCard/PostCard";

const Article = () => {
  const [data, setData] = useState<Array>([]);
  const [page, setPage] = useState<number>(1);
  const [isFetching, setIsFetching] = UseInfiniteScroll(moreData);

  const loadData = () =>{
    let url = "https://medrum.herokuapp.com/articles";
    axios.get(url).then(res => {
      setData(res.data);
    });
  }
  function moreData() {
    let url = `https://medrum.herokuapp.com/feeds/?source=5718e53e7a84fb1901e05971&page=${page}&sort=latest`;
    axios.get(url).then(res => {
      setData([...data, ...res.data]);
      setPage(page+1)
      setIsFetching(false)
    });
  }

  useEffect(()=>{
    loadData()
  }, [])

  if (data.length==0) {
    return (
      <div style={{color: "black"}}>
        <h1>Loading...</h1>
      </div>);
  }

  return (
    <div>
        {data.map((article, key) => (
          <div key={key}>
            <PostCard title={article.title} url="https://source.unsplash.com/1600x900?apple" thumbnailUrl="https://source.unsplash.com/1600x900?apple"/>
            </div>
        ))};
    </div>
  );
};

export default Article;
