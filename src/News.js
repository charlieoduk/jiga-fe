import React from "react";
import { List } from "semantic-ui-react";

const News = (props) => {

  return (
    <List divided style={{ maxWidth: 900, margin: "0 auto" }}>
      {props.articles.map((article, index) => (
        <List.Item key={article.title + index}>{article.title}</List.Item>
      ))}
    </List>
  );
};

export default News;
