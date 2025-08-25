import React, { useState } from "react";
import QuoteGenerator from "./components/QuoteGenerator";
import NewPost from "./components/NewPost";
import "./App.css";

function App() {
  const [post, setPost] = useState("");

  return (
    <div className="app-container">
      <h1 className="app-title">✨ Random Quotes Generator ✨</h1>
      <QuoteGenerator setPost={setPost} />
      {post && <NewPost post={post} />}
    </div>
  );
}

export default App;
