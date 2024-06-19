import axios from "axios";
import React, { useState, useEffect } from "react";
import { searchCourse } from "../services/course-service";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  // console.log("🚀 ~ SearchBar ~ results:", results._id)

  useEffect(() => {
    let source = axios.CancelToken.source();
    if (query.length > 0) {
      const fetchCourses = async () => {
        searchCourse(query, { cancelToken: source.token })
          .then(({ data: { courses } }) => setResults(courses))
          .catch((error) => console.error("Error fetching data:", error));
      };
      fetchCourses();

      return () => {
        source.cancel("Component unmounted or query changed");
      };
    } else {
      setResults([]); // Clear results when query is empty
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const navigate = useNavigate();
  const handleExploreClick = (courseId) => {
    console.log("🚀 ~ handleExploreClick ~ courseId:", courseId)
    setQuery("");
    setResults([]);
    navigate(`/course-details/${courseId}`);
    
  };


  return (
    <>
      <form className=" relative flex border-b-2 border-cyan-800 items-center justify-center">
        <input
          type="search"
          name=""
          id=""
          className=" focus:outline-none"
          placeholder="Search..."
          required=""
          value={query}
          onChange={handleInputChange}
        />
        <AiOutlineSearch className=""/>
      </form>
      {results.length > 0 && (
        <div className="absolute bg-inputBgColor w-[15rem] top-[4.5rem] shadow-md">
          {results.map((result) => (
            // console.log(result)
            <p
            onClick={() => handleExploreClick(result._id)}
              key={result.id}
              className="py-2 px-4 hover:bg-hoverBgColor border-b-4"
            >
              {result.name}
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchBar;
