import "./App.scss";
import { useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

function App() {
  const [html, setHtml] = useState("");

  function handleText(e) {
    e.preventDefault();
    const parsedHtml = DOMPurify.sanitize(marked.parse(e.target.value));
    setHtml(parsedHtml);
  }

  return (
    <main className="main">
      <header>
        <h1 className="primary-header">Markdown Previewer</h1>
      </header>
      <textarea id="editor" onChange={handleText} />
      <section
        id="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      ></section>
    </main>
  );
}

export default App;
