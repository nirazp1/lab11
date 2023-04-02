import React, { useState, useEffect } from "react";
import request from "browser-request";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = "e476cbd0b7324f68b7972cbda630aab0";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    request(apiUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        const data = JSON.parse(body);
        setArticles(data.articles);
      } else {
        console.log(error);
      }
    });
  }, []);

  return (
    <div>
      <h1>Top Headlines</h1>
      <ul>
        {articles.map(article => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noreferrer">{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
