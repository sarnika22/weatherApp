export default function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        placeholder="Enter city name"
        name="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)} //5.27.58
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
