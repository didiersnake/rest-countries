import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CountryList from "./feature/CountryList";
import SearchBar from "./feature/SearchBar";
import { allPosts } from "./feature/countrySlice";
import { useSelector } from "react-redux";
import DropFilter from "./feature/DropFilter";

function App() {
  const data = useSelector(allPosts);
  // sorted data from SearchBar
  const [searchResult, setSearchResult] = useState([]);

  // init searchresult data for first render
  useEffect(() => {
    setSearchResult(data);
  }, [data]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen dark:bg-[#202D36] dark:text-white mx-auto md:px-32 px-6 md:pb-12 pb-5 font-medium bg-slate-100 ">
        <div className="flex justify-between items-center py-6 px-5">          
          <SearchBar post={data} searchResult={setSearchResult} />
          <DropFilter post={data} searchResult={setSearchResult} />
        </div>
        <CountryList searchResult={searchResult} />
      </main>
    </>
  );
}

export default App;
