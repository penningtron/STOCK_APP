

from portfolio_app.models import Portfolio
from user_app.models import App_user
from stock_positions_app.models import StockPositions

# Step 1: Create a user instance
user = App_user.objects.create(first_name ='luke', last_name = 'skywalker', email='luke@rebel.com', password="luke", phone_number="12813895644")

# Step 2: Create a portfolio instance associated with the user
portfolio = Portfolio.objects.create(user=user)

# Step 3: Create multiple stock positions associated with the portfolio
stock_positions_data = [
    {'symbol': 'AAPL', 'quantity': 100},
    {'symbol': 'GOOGL', 'quantity': 50},
    {'symbol': 'MSFT', 'quantity': 75},
    
]

for data in stock_positions_data:
    StockPositions.objects.create(portfolio=portfolio, **data)

# Now you have created an example portfolio with stock positions
