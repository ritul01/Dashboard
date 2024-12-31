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
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=cec249148c81412f81ec2821c2da0f4e"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.articles || data.articles.length === 0) {
          console.error("No articles found.");
          return;
        }

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
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
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
        <div style={{ maxWidth: "1000px", margin: "0 auto", height: "400px" }}>
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}

      {/* Display a list of recent articles */}
      <div className="article-list">
        <h3>Recent Articles</h3>
        <ul>
          {newsData && newsData.length > 0 ? (
            newsData.slice(0, 5).map((article, index) => (
              <li key={index}>
                <strong>{article.title || "No title available"}</strong> by {article.author || "Unknown"} on{" "}
                {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : "Unknown date"}
              </li>
            ))
          ) : (
            <p>No articles to display.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NewsAnalytics;
