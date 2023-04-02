import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = "e476cbd0b7324f68b7972cbda630aab0";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.log(error);
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
