import React from 'react'
import SearchBar from './feature/SearchBar';
import DropFilter from './feature/DropFilter';
import CountryList from './feature/CountryList';

const Home = ({data, setSearchResult, searchResult}) => {
  return (
    <main className="min-h-screen dark:bg-[#202D36] dark:text-white mx-auto md:px-32 px-6 md:pb-12 pb-5 font-medium bg-slate-100 ">
      <div className="md:flex md:justify-between md:items-center grid py-6">
        <SearchBar post={data} searchResult={setSearchResult} />
        <DropFilter post={data} searchResult={setSearchResult} />
      </div>
      <CountryList searchResult={searchResult} />
    </main>
  );
}

export default Home