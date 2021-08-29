import React, { useState, useEffect } from 'react';
import { Container, Header } from "semantic-ui-react";
import './App.css';
import News from './News';

import axios from "axios";


function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/news").then((response) => {
      setArticles(response.data)
    });
  }, [])
  
  
  return (
    <Container>
      <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
        News Articles
        {articles.length > 0 && <News articles={articles} />}
      </Header>
    </Container>
  );
}

export default App;
