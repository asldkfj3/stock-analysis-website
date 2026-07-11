import { useState } from "react";
import StockCard from "./components/StockCard";
import SearchBar from "./components/SearchBar";
import {stocks} from "./data/stocks";
import Watchlist from "./components/Watchlist";
import TechnicalSummary from "./components/TechnicalSummary";
import WatchlistRanking from "./components/WatchlistRanking";
import StockScreener from "./components/StockScreener";
import "./App.css";

function App() {
  const [tickerInput, setTickerInput] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [filterMode, setFilterMode] = useState("all");

  const watchlist = ["2449", "8039", "3005"];

  function handleSearch(){
    const stock = stocks[tickerInput.trim()];

    if (stock) {
      setSelectedStock(stock);
      setErrorMessage(null);
    }
    else{
      setSelectedStock(null);
      setErrorMessage("Stock not found.")
    }
  }

function handleSelectFromWatchlist(ticker) {

  const stock = stocks[ticker];

  setSelectedStock(stock);
  setTickerInput(ticker);
  setErrorMessage("");
}

  return (
    <div className="app">
      <div className="dashboard">
        <h1>Taiwan Stock Analysis Website</h1>

        <p>This is my personal stock analysis project.</p>

        <h2>Search Stock</h2>

        <SearchBar
          tickerInput={tickerInput}
          setTickerInput={setTickerInput}
          handleSearch={handleSearch}
        />

        <h2>Stock Result</h2>

        {selectedStock ? (
          <>
          <StockCard stock={selectedStock} />
          <TechnicalSummary stock={selectedStock} />
          </>

        ) : errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <p>Please search for a stock.</p>
        )}

        <Watchlist
          watchlist={watchlist}
          stocks={stocks}
          selectedTicker={selectedStock ? selectedStock.ticker : null}
          onSelectStock={handleSelectFromWatchlist}
        />

        <WatchlistRanking
          watchlist={watchlist}
          stocks={stocks}
          selectedTicker={selectedStock ? selectedStock.ticker : null}
          onSelectStock={handleSelectFromWatchlist}
        />

        <StockScreener
          watchlist={watchlist}
          stocks={stocks}
          filterMode={filterMode}
          setFilterMode={setFilterMode}
          onSelectStock={handleSelectFromWatchlist}
        />
      </div>
    </div>
  );
}

export default App;