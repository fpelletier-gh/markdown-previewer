import "./App.scss";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleText(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <main className="main">
      <header>
        <h1 className="primary-header">Markdown Previewer</h1>
      </header>
      <textarea id="editor" onChange={handleText} />
      <section id="preview">{text}</section>
    </main>
  );
}

export default App;
