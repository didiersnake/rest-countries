import { useEffect, useState } from "react";
import { allPosts } from "./feature/countrySlice";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import CountryPage from "./feature/CountryPage";

function App() {
  const data = useSelector(allPosts);
  // sorted data from SearchBar
  const [searchResult, setSearchResult] = useState([]);

  // init searchresult data for first render
  useEffect(() => {
    setSearchResult(data);
  }, [data]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              data={data}
              setSearchResult={setSearchResult}
              searchResult={searchResult}
            />
          }
        />
        <Route path=":countryName" element={<CountryPage />} />
        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Route>
    </Routes>
  );
}

export default App;
