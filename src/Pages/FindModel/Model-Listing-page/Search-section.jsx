import { useState } from "react";
import FilterItem from "./FilterItem";
import "./Search-section.css";

import { FaSearchLocation, FaUser } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
function AllSearch({
  filterGender,
  filterCategory,
  handleSearch,
  handleData,
  gender,
  category,
  search,
  searchResult,
}) {
  const [toggleGender, setToggleGender] = useState(false);
  const [toggleCategory, setToggleCategory] = useState(false);

  const categoryList = [
    "all category",
    "child",
    "petite",
    "fashion",
    "pageant",
    "fitness",
    "glamour",
    "runway",
    "editorial",
    "swimsuit",
    "plus size",
    "body part",
    "commercial",
    "promotional",
  ];

  const genderList = ["Gender", "Male", "Female"];

  function handleGender() {
    setToggleGender((prevGender) => !prevGender);
  }
  function handleCategory() {
    setToggleCategory((prevCategory) => !prevCategory);
  }

  return (
    <>
      <section className="search-container container mtop">
        <div className="filter-section">
          <h4 className="filter__text">Filter by Category & Gender</h4>

          <div className="filter">
            <div className="filter-container category__dropdown">
              <div onClick={handleCategory} className=" dropdown-btn">
                <BiCategoryAlt />
                {category ? category : "Category"}
              </div>
              {toggleCategory && (
                <div
                  className="dropdown-option active-bt"
                  onClick={handleCategory}
                >
                  {categoryList.map((item, index) => (
                    <FilterItem
                      key={index}
                      itemText={item}
                      handleFilter={filterCategory}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="filter-container category__dropdown">
              <div onClick={handleGender} className="dropdown-btn">
                <FaUser />
                {gender ? gender : "Gender"}
              </div>
              {toggleGender && (
                <div
                  className="dropdown-option active-bt"
                  onClick={handleGender}
                >
                  {genderList.map((item, index) => (
                    <FilterItem
                      key={index}
                      itemText={item}
                      handleFilter={filterGender}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="input-section ">
          <h4 className="filter__text">Search by Country & State</h4>

          <div className="search">
            <label className="input-box" htmlFor="search">
              <div className="search-box-container">
                <input
                  onChange={handleSearch}
                  type="search"
                  id="search"
                  value={search}
                  placeholder="Atlanta, Usa"
                  spellCheck="false"
                  autoFocus
                  autoComplete="NO"
                  className="search-box"
                />
                <button className="searchButton" onClick={handleData}>
                  <span></span>
                </button>
              </div>
            </label>
          </div>
        </div>
      </section>
      <section className="result-container container">
        <span className="result"> Showing {searchResult} Results </span>
      </section>
    </>
  );
}

export default AllSearch;
