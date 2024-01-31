"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";
import Weather from "./weather/Weather";

const PrompCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  // implementing search
  // const filterPrompts = (searchtext) => {
  //   const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
  //   return allPosts.filter(
  //     (item) =>
  //       regex.test(item.creator.username) ||
  //       regex.test(item.prompt) ||
  //       regex.test(item.tag)
  //   );

  // }

  const handleSearchChange = (e) => { }
  // const handleSearchChange = (e) => {
  //   clearTimeout(searchTimeout);
  //   setSearchText(e.target.value);

  //   // debounce method
  //   setSearchTimeout(
  //       setTimeout(() => {
  //         const searchResult = filterPrompts(e.target.value);
  //         setSearchResults(searchResult);
  //       }, 500)
  //   )
  // }

  // const handleTagClick = (tagname) => {
  //   setSearchText(tagName);

  //   const searchResult = filterPrompts(tagName);
  //   setSearchResults(searchResult);
  // }

  // GET request from local API
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setPosts(data);
    }

    // console.log(posts);

    fetchPosts();
  }, []);


  return (
    <section className="feed">
      <Weather />
      <form className="z-0 relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PrompCardList
        data={posts}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed