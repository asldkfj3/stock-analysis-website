function Watchlist({ watchlist, stocks, selectedTicker, onSelectStock }) {
  return (
    <div className="watchlist">
        <h2> My Watchlist</h2>

        <div className="watchlist-itmes">
            {watchlist.map((ticker) => {
                const stock = stocks[ticker];

                return (
                    <button
                    key={ticker}
                    className={
                        selectedTicker === ticker
                        ? "watchlist-button active"
                        : "watchlist-button"
                    }
                    onClick={()=> onSelectStock(ticker)}
                    >
                        {stock.ticker} {stock.name}
                    </button>
                )
            })}
        </div>
    </div>
  );
}

export default Watchlist;