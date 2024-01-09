const Search = ({
  searchText,
  setSearchText,
  listofResturant,
  setSearchFilterList,
} = props) => {
  return (
    <>
     <input
        className="border border-black h-10 px-2 w-2/3 rounded-md my-2"
        type="text"
        value={searchText}
        placeholder="Search your food..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="p-1 h-10 bg-green-400 my-2 m-1 w-24 rounded-lg"
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