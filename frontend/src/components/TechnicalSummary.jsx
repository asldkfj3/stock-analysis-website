import { calculateMA } from "../utils/calculateMA";

function TechnicalSummary({ stock }) {
    const ma5 = calculateMA(stock.priceHistory, 5);
    const ma10 = calculateMA(stock.priceHistory, 10);

    const trend =
    ma5 !== null && ma10 !== null
        ? stock.price > ma5 && ma5 > ma10
        ? "Bullish"
        : stock.price < ma5 && ma5 < ma10
            ? "Bearish"
            : "Neutral"
        : "Not enough data";

    const trendClass =
    trend === "Bullish"
        ? "bullish"
        : trend === "Bearish"
        ? "bearish"
        : trend === "Neutral"
            ? "neutral"
            : "unavailable";

  return (
    <div className="technical-summary">
      <h2>Technical Summary</h2>

      <p>
        Current Price: <strong>{stock.price}</strong>
      </p>

      <p>
        MA5:{" "}
        <strong>
          {ma5 !== null ? ma5.toFixed(2) : "Not enough data"}
        </strong>
      </p>

      <p>
        {ma5 !== null
          ? stock.price > ma5
            ? "Above MA5"
            : "Below MA5"
          : "Cannot compare with MA5"}
      </p>

      <p>
        MA10:{" "}
        <strong>
          {ma10 !== null ? ma10.toFixed(2) : "Not enough data"}
        </strong>
      </p>

      <p>
        {ma10 !== null
          ? stock.price > ma10
            ? "Above MA10"
            : "Below MA10"
          : "Cannot compare with MA10"}
      </p>

      <h3>Overall Trend</h3>
      <p className={trendClass}>{trend}</p>

    </div>
  );
}

export default TechnicalSummary;