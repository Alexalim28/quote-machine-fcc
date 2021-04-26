import { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";

const url = "https://api.quotable.io/random";

const QuotationWrapper = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuotes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { content, author } = data;
    setText(content);
    setAuthor(author);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    const bg = document.querySelector("html");
    const text = document.querySelector("#text");
    const author = document.querySelector("#author");
    const newQuote = document.querySelector("#new-quote");
    const tweet = document.querySelector("#tweet-quote");

    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    bg.style.backgroundColor = randomColor;
    newQuote.style.backgroundColor = randomColor;
    tweet.style.backgroundColor = randomColor;
    text.style.color = randomColor;
    author.style.color = randomColor;
  }, [text]);

  return (
    <div id="quote-box">
      <p id="text">{text}</p>
      <p id="author">
        <cite>-{author}</cite>
      </p>
      <div className="btn-container">
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          <FaTwitter />
        </a>
        <button type="button" id="new-quote" onClick={fetchQuotes}>
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuotationWrapper;
