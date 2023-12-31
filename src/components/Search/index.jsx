import "./searchstyle.css";

export default SearchComponent = ({searchRestruant, setSearchResturant,onSearchHanlder } = props) => {
  return (
    <>
      <div>
        <input
          className="research"
          type="text"
          value={searchRestruant}
          placeholder="Search your food..."
          onChange={(e) => setSearchResturant(e.target.value)}
        />
        <button type="submit" className="searchbtn" onSearchHanlder={onSearchHanlder}>
          Search
        </button>
      </div>
    </>
  );
};
