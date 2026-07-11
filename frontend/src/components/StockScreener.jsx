function StockScreener({ watchlist, stocks, filterMode, setFilterMode, onSelectStock }) {
  const filteredWatchlist = watchlist.filter((ticker) => {
    const stock = stocks[ticker];

    if (filterMode === "gainers") {
      return stock.changePercent > 0;
    }

    if (filterMode === "losers") {
      return stock.changePercent < 0;
    }

    return true;
  });

  return (
    <div className="stock-screener">
      <h2>Stock Screener</h2>

      <div className="screener-buttons">
        <button
          className={filterMode === "all" ? "screener-button active" : "screener-button"}
          onClick={() => setFilterMode("all")}
        >
          All
        </button>

        <button
          className={filterMode === "gainers" ? "screener-button active" : "screener-button"}
          onClick={() => setFilterMode("gainers")}
        >
          Gainers
        </button>

        <button
          className={filterMode === "losers" ? "screener-button active" : "screener-button"}
          onClick={() => setFilterMode("losers")}
        >
          Losers
        </button>
      </div>

      <div className="screener-results">
        {filteredWatchlist.map((ticker) => {
          const stock = stocks[ticker];

          return (
            <div
                key={ticker}
                className="screener-item"
                onClick={() => {
                    onSelectStock(ticker);
                }}
            >
              <strong>
                {stock.ticker} {stock.name}
              </strong>

              <span
                className={
                  stock.changePercent >= 0
                    ? "screener-change positive"
                    : "screener-change negative"
                }
              >
                {stock.changePercent}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StockScreener;