function WatchlistRanking({ watchlist, stocks, selectedTicker, onSelectStock }) {
   console.log("selectedTicker in ranking:", selectedTicker);
  const sortedWatchlist = [...watchlist].sort((a, b) => {
    return stocks[b].changePercent - stocks[a].changePercent;
  });

  return (
    <div className="watchlist-ranking">
      <h2>Watchlist Ranking</h2>

      <div className="ranking-list">
        {sortedWatchlist.map((ticker, index) => {
          const stock = stocks[ticker];

          return (
            <div
              key={ticker}
              className={
                selectedTicker === ticker
                  ? "ranking-item active"
                  : "ranking-item"
              }
              onClick={() => onSelectStock(ticker)}
            >
              <span className="ranking-position">{index + 1}</span>

              <div className="ranking-info">
                <strong>
                  {stock.ticker} {stock.name}
                </strong>
                <span>{stock.trend}</span>
              </div>

              <strong
                className={
                  stock.changePercent >= 0
                    ? "ranking-change positive"
                    : "ranking-change negative"
                }
              >
                {stock.changePercent}%
              </strong>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WatchlistRanking;