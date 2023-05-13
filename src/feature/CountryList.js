import React from 'react'
import { allPosts, error, status } from './countrySlice'
import {useSelector} from "react-redux"

const CountryList = () => {
    const data = useSelector(allPosts);
    const fetchStatus = useSelector(status);
    console.log(data);
    const countryCards = data.map((item) => {
        const {name, flags, population, region, capital} = item
        return (
          <div key={name.common} className="border-2 border-gray-200 dark:border-gray-800">
                <div><img className='' src={flags.svg} alt={name.common} /></div>            
                <div>{name.common}</div>            
                <div>Population: {population}</div>            
                <div>Region: {region}</div>            
                <div>Capital: {capital}</div>            
          </div>
        );
    })
  return (
    <div className="h-full dark:bg-[#202D36] dark:text-white mx-auto md:px-16 px-6 font-medium bg-slate-100 sm:text-sm md:text-base">
      <div className="py-6">Hello</div>
      <div className="lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 sm:gap-5 grid max-w-5xl mx-auto">
        {countryCards}
      </div>
    </div>
  );
}

export default CountryList