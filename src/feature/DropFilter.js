import React, { useState } from 'react'
import "react-dropdown/style.css";
import "./dropFilter.css"

const DropFilter = ({post, searchResult}) => {
    const options = [
        "Africa", "Americas", "Asia", "Europe", "Oceania"
    ]

    const [input, setInput] = useState();

    const handleDropButton = (e) => {
        // setInput
        setInput(e.target.value)
        // filter regions === input
        const resultArray = post.filter(
          (post) => post.region.toLowerCase() === e.target.value.toLowerCase()
        );
        // set display Data
        !e.target.value ? searchResult(post):searchResult(resultArray);
    }

  return (
    <div>
      <select
        placeholder="Filter by Region"
        className="py-4 px-5 max-w-sm rounded-md border-2 dark:bg-[#2B3743] dark:border-gray-800 focus:outline-none text-sm"
        value={input}
        onChange={handleDropButton}
      >
        <option value={"default"}>Filter by Region</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropFilter