function SearchBar ( { tickerInput, setTickerInput, handleSearch}) {
    return (
        <div className="search-bar">
            <div className="search-row">
                <input
                    className="search-input"
                    placeholder="Enter stock ticker, e.g. 2449"
                    value={tickerInput}
                    onChange={(event)=> setTickerInput(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />

                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div> 

            <p className="typed-text">You typed: {tickerInput}</p>
        </div>
    );
}

export default SearchBar;