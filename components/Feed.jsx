"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";
// import Weather from "./weather/Weather";

const PrompCardList = ({ data, handleUserClick, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          handleUserClick={handleUserClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  // implementing search
  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.prompt) ||
        regex.test(item.tag)
    );

  }

  // const handleSearchChange = (e) => { }
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
        setTimeout(() => {
          const searchResult = filterPrompts(e.target.value);
          setSearchResults(searchResult);
        }, 500)
    )
  }

  const handleUserClick = (userName) => {
    setSearchText(userName);

    const searchResult = filterPrompts(userName);
    setSearchResults(searchResult);
  }

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchResults(searchResult);
  }

  // GET request from local API
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();

      setAllPosts(data);
    }

    // console.log(posts);
    // is this a proper cleaner?

    fetchPosts();
  }, []);

  useEffect(() => {
    console.log("See allPost: ", allPosts);
  
  }, [allPosts]);
  
  
  // console.log("See allPost: ", allPosts);
  // console.log("See Post: ", allPosts[0] && allPosts[0].creator._id);

  
  return (
    <>
      <form className="z-0 relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a prompt, tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PrompCardList
        data={searchResults}
        handleUserClick={handleUserClick}
        handleTagClick={handleTagClick}
      />
    </>
  )
}

export default Feed