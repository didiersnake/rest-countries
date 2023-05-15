import React from 'react'
import { allPosts, error, status } from './countrySlice'
import {useSelector} from "react-redux"

const CountryList = () => {
    const data = useSelector(allPosts);
    const fetchStatus = useSelector(status);
    const errorCheck = useSelector(error)
    console.log(data);
    const countryCards = data.map((item) => {
        const {name, flags, population, region, capital} = item
        return (
          <div
            key={name.common}
            className="border-2 shadow-md dark:bg-[#2B3743] dark:border-gray-800 text-sm text-black dark:text-slate-300"
          >
            <div>
              <img
                className="sm:h-32 h-36 w-full "
                src={flags.png}
                alt={name.common}
              />
            </div>
            <div className="px-4 pb-8">
              <div className="py-3 text-base text-black dark:text-white">
                {name.common}
              </div>
              <div className="flex gap-1">
                Population :
                <p className="dark:text-gray-400 text-slate-500 ">
                  {population.toLocaleString("en-US")}
                </p>
              </div>
              <div className="flex gap-1">
                Region : <p className="dark:text-gray-400 text-slate-500 ">{region}</p>
              </div>
              <div className="flex gap-1">
                Capital : <p className="dark:text-gray-400 text-slate-500 ">{capital}</p>
              </div>
            </div>
          </div>
        );
    })
  return (
      <div className="h-full dark:bg-[#202D36] dark:text-white mx-auto md:px-16 px-6 font-medium bg-slate-100 ">
          { errorCheck !== null ? <div className='h-screen item-center text-center'>something went wrong</div> :
              fetchStatus !== "succeeded" ? <div className='text-center items-center h-screen'>Loading...</div> :
      <><div className="py-6">Hello</div>
      <div className="lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-8 grid sm:px-0 px-12 ">
        {countryCards}
      </div></> }
    </div>
  );
}

export default CountryList