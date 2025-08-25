import React, { useState, useEffect } from "react";
import "./QuoteGenerator.css";

const QuoteGenerator = ({ setPost }) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      if (!res.ok) throw new Error("API error: " + res.status);
      const data = await res.json();
      console.log("Fetched Quote:", data);
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("⚠️ Failed to fetch quote.");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-card">
      <p className="quote-text">“{quote || "Loading..."}”</p>
      {author && <p className="quote-author">- {author}</p>}
      <div className="button-group">
        <button onClick={fetchQuote} className="btn btn-new">
          🔄 New Quote
        </button>
        <button onClick={() => setPost(`${quote} — ${author}`)} className="btn btn-copy">
          📌 Copy to Post
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
