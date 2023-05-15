import React, { useState } from 'react'
import search from "../images/magnifying-glass-solid.svg"

const SearchBar = ({ post, searchResult }) => {
    
    const [input, setInput] = useState("")
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = e => {
      setInput(e.target.value);

      //filter post item and return array
      const resultArray = post.filter((item) => {
        return item.name.common.toLowerCase().includes(e.target.value.toLowerCase());
      });
      //if search bar empty display all
    // else display filtered data
      !e.target.value ? searchResult(post) : searchResult(resultArray);
    }

  return (
    <header>
      <form
        className="flex items-center py-4 px-5 max-w-sm rounded-md border-2 dark:bg-[#2B3743] dark:border-gray-800 text-sm text-black"
        onSubmit={handleSubmit}
      >
        <button>
          <img className="h-4  w-4" src={search} alt="" />
        </button>
        <input
          type="text"
          onChange={handleSearchChange}
          value={input}
          placeholder="search for a country..."
          className="bg-transparent pl-5 focus:outline-none dark:text-slate-300"
        />
      </form>
    </header>
  );
}

export default SearchBar