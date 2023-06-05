import React from 'react'
import { useSelector } from 'react-redux'
import { selectByName } from './countrySlice'
import { useParams } from 'react-router-dom'

const CountryPage = () => {
  const { countryName } = useParams()
  const countryPost = useSelector((state) => selectByName(state, countryName))
  const backButton = (
    <div className="pb-10">
      <button className="capitalize text-lg bg-white dark:bg-[#2B3743] dark:text-gray-400 border-2 border-gray-200 dark:border-gray-800 shadow-md px-4 py-1 rounded-md">
        back
      </button>
    </div>
  );

  const { name, flags, population, region, subregion, capital, borders, tld, languages, currencies } = countryPost;
  const lang = Object.values(languages)
  const countryBorders = borders.map((item) => (
    <div key={item} className="capitalize bg-white dark:bg-[#2B3743] dark:text-gray-400 border-2 border-gray-200 dark:border-gray-800 shadow-md px-3 py-1 rounded-md">{item}</div>
  ));
  
  return (
    <div className="min-h-screen dark:bg-[#202D36] dark:text-white mx-auto lg:px-20 lg:py-10 md:px-16 md:py-10 sm:p-20 py-14 px-8 font-medium bg-slate-100 ">
      {backButton}
      <div className="py-5 lg:flex grid lg:gap-24 gap-7 sm:text-lg md:text-xl lg:text-base mx-auto">
        <div className=''>
          <img
            className="sm:h-auto h-56 w-full md:h-72 lg:w-[400px]"
            src={flags.png}
            alt={name.common}
          />
        </div>

        <div className="grid gap-7">
          <div className="lg:flex lg:items-center grid gap-7 lg:gap-16 ">
            <div className="mt-2 md:mt-0 grid gap-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl">{name.common}</h2>
              <section className="grid gap-1">
                <p>
                  Native Name  : <span className='text-gray-400 capitalize'>{name.official}</span>
                </p>
                <p>
                  Population  : <span className='text-gray-400 capitalize'>{population.toLocaleString("en-US")}</span>
                </p>
                <p>
                  Region  : <span className='text-gray-400 capitalize'>{region}</span>
                </p>
                <p>
                  Subregion  : <span className='text-gray-400 capitalize'>{subregion}</span>
                </p>
                <p>
                  Capital  : <span className='text-gray-400 capitalize'>{capital}</span>
                </p>
              </section>
            </div>

            <div className="grid gap-1">
              <p>
                Top Level Domain  : <span className='text-gray-400 capitalize'>{tld[0]}</span>
              </p>
              <p>
                currencies  : <span className='text-gray-400 capitalize'></span>
              </p>
              <p>
                Languages  : <span className='text-gray-400 capitalize'>{lang.toString()}</span>
              </p>
            </div>
          </div>

          <div className="md:flex md:items-center grid gap-2 md:-mt-6">
            <p>Border countries</p>
            <div className="flex items-center gap-3">{countryBorders}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPage