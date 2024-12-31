import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Automatically register chart components

const NewsAnalytics = () => {
  const [newsData, setNewsData] = useState([]);
  const [chartData, setChartData] = useState(null);

  // Fetch news data from an API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-11-30&sortBy=publishedAt&apiKey=cec249148c81412f81ec2821c2da0f4e"
        );
        const data = await response.json();
        setNewsData(data.articles);

        // Prepare data for the chart
        const authors = data.articles.map((article) => article.author || "Unknown");
        const authorCounts = authors.reduce((acc, author) => {
          acc[author] = (acc[author] || 0) + 1;
          return acc;
        }, {});

        setChartData({
          labels: Object.keys(authorCounts),
          datasets: [
            {
              label: "Articles by Author",
              data: Object.values(authorCounts),
              backgroundColor: "hsla(180, 29.00%, 6.10%, 0.60)",
              borderColor: "hsl(120, 25.00%, 96.90%)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-analytics">
      <h2>News Analytics</h2>

      {/* Display a bar chart */}
      {chartData ? (
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}

      {/* Display a list of recent articles */}
      <div className="article-list">
        <h3>Recent Articles</h3>
        <ul>
          {newsData.slice(0, 5).map((article, index) => (
            <li key={index}>
              <strong>{article.title}</strong> by {article.author || "Unknown"} on{" "}
              {new Date(article.publishedAt).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsAnalytics;
