from alpaca.data.timeframe import TimeFrame
from alpaca.data.requests import StockBarsRequest
from alpaca.data.historical import StockHistoricalDataClient# Create stock historical data client
import os
api_key = os.environ.get('ALPACA_API_KEY')
secret_key = os.environ.get('ALPACA_SECRET_KEY')

client = StockHistoricalDataClient(api_key, secret_key)
request_params = StockBarsRequest(
                        symbol_or_symbols=["TSLA"],
                        timeframe=TimeFrame.Day,
                        start="2022-01-01 00:00:00"
                 )
bars = client.get_stock_bars(request_params)
bars_df = bars.df
print(bars_df)