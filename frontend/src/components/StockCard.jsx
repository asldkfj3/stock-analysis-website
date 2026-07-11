function StockCard({ stock }) {
    return (
        <div className="stock-card">
            <div className="stock-header">
                <h3>
                    {stock.ticker} {stock.name}
                </h3>

                <span className="stock-trend"> {stock.trend}</span>
            </div>

            <div className="stock-state">
                <p>
                    <span>Price</span>
                    <strong>{stock.price}</strong>
                </p>
                <p>
                    <span>Change</span>
                    <strong>{stock.changePercent}%</strong>
                </p>
            </div>
        </div>
    );
}

export default StockCard;