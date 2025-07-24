import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Exploring Financial Predictions with Python: A Deep Dive into Autodesk&apos;s Stock</h1>
      <p className="text-sm text-gray-500 mb-4 text-center">Publicado el 5 de febrero de 2024</p>
      <p className="mb-4">In the realm of financial analysis and prediction, Python emerges as a powerful tool, offering clarity and precision in navigating the complexities of stock market data. This post delves into a comprehensive Python script designed to analyze and predict Autodesk&apos;s stock prices, leveraging a variety of data science and machine learning techniques.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">The Problem at Hand</h2>
      <p className="mb-4">Why Autodesk, and why now? As a leader in design software, Autodesk&apos;s stock (ADSK) is a reflection of its innovative capabilities and market position. However, like all stocks, it is subject to the ebb and flow of market forces. Investors seeking to optimize their portfolios need to look ahead, beyond current trends, to anticipate the potential growth or decline in stock value. This is where predictive modeling comes into play, offering a window into the future based on historical data patterns.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">The Importance of Prediction</h2>
      <p className="mb-4">The task at hand is two-fold: to demonstrate the potential of Python in extracting actionable insights from historical price data and to provide a 10-day forecast that could guide investment strategies. But the implications extend beyond Autodesk. The models and methods employed here are transferable to other stocks, enabling analysts to apply similar techniques to a broad spectrum of investment opportunities. Whether for individual stock selection, portfolio management, or risk assessment, the ability to project future price movements is invaluable.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Broader Applications</h2>
      <p className="mb-4">The linear regression model we&apos;ll explore is not confined to the world of finance. Its applications span across various domains where forecasting is crucial—be it weather prediction, supply chain management, or even sports analytics. Anywhere that historical data can be harnessed to predict future events, linear regression can be a key player in the analytical toolkit.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Data Acquisition and Preparation</h2>
      <p className="mb-4">The journey begins with the yfinance library, a Python package that allows users to download historical stock price data. By specifying a ticker symbol, such as Autodesk&apos;s &quot;ADSK&quot;, and a date range, we can retrieve a dataset comprising open, high, low, close, and volume information. The initial step involves augmenting this dataset with daily returns and the next day&apos;s price, enriching the data for more insightful analysis.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Visual Analytics</h2>
      <p className="mb-4">Visualization plays a crucial role in financial analysis. The script employs matplotlib to craft three distinct types of charts: daily returns, stock price movements (open, high, low), and trading volume. These visualizations offer a multifaceted view of Autodesk&apos;s stock performance, highlighting trends and patterns that might not be immediately evident from raw data alone.</p>
      <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-xs mb-4"><code>{`def plot_stock_data(data, colors):
    plt.style.use('dark_background')
    fig, axs = plt.subplots(3, 1, figsize=(12, 8))
    # ...
`}</code></pre>
      <p className="mb-4 font-semibold">[Aqu&iacute; ir&iacute;a una imagen de los gr&aacute;ficos de las acciones]</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Predictive Modeling with Linear Regression</h2>
      <p className="mb-4">At the core of this analysis is the linear regression model, a fundamental tool in predictive analytics. By training this model on Autodesk&apos;s historical stock data, we can uncover relationships between various features (such as opening price, highest price of the day, and daily returns) and the next day&apos;s closing price. The model&apos;s predictions, alongside metrics like mean squared error (MSE) and R-squared (R&sup2;), provide insights into its accuracy and efficacy.</p>
      <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-xs mb-4"><code>{`def linear_regression_model(data, colors):
    X = data[['Open', 'High', 'Low', 'Volume', 'Daily_Return']]
    y = data['Next_Day_Price']
    # ...
`}</code></pre>
      <p className="mb-4 font-semibold">[Aqu&iacute; ir&iacute;a una imagen de los resultados de la regresi&oacute;n]</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Future Price Predictions</h2>
      <p className="mb-4">The script takes a bold step forward by forecasting Autodesk&apos;s stock prices for the next 10 business days. It cleverly extrapolates future prices based on the average percentage change of the last five days, offering a glimpse into potential future trends. This predictive feature is not only a testament to the power of Python and linear regression in financial analysis but also a valuable asset for investors and analysts looking to make informed decisions.</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Visualization of Predictions</h2>
      <pre className="bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto text-xs mb-4"><code>{`def predict_future_prices(model, data, colors):
    last_day = data.index[-1]
    new_dates = [last_day + BDay(i) for i in range(1, 11)]
    # ...
`}</code></pre>
      <p className="mb-4 font-semibold">[Aqu&iacute; ir&iacute;a una imagen de la proyecci&oacute;n de precios]</p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Conclusion</h2>
      <p className="mb-4">In conclusion, this Python script embodies the intersection of data science and financial analysis, offering a robust framework for stock price prediction. Through meticulous data preparation, insightful visualization, and sophisticated predictive modeling, it paves the way for data-driven investment strategies and financial insights.</p>
      <div className="flex justify-center mt-10">
        <Link href="/" legacyBehavior>
          <a className="px-6 py-2 rounded-full bg-[#b22222] text-white font-semibold shadow-md hover:bg-[#a11d1d] transition-all border border-[#b22222]">Regresar al inicio</a>
        </Link>
      </div>
    </section>
  );
}
