import "./searchstyle.css";

const Search = ({
  searchText,
  setSearchText,
  listofResturant,
  setSearchFilterList,
} = props) => {
  return (
    <>
     <input
        className="search"
        type="text"
        value={searchText}
        placeholder="Search your food..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="submit"
        className="searchbtn"
        onClick={() => {
          const searchList = listofResturant.filter((res) =>
            res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setSearchFilterList(searchList);
        }}
      >
        Search
      </button>
    </>
  );
};

export default Search;