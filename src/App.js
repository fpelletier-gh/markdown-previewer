import "./App.scss";
import {
  useDefaultEditorValue,
  useParseHtml,
} from "./hooks/useDefaultEditorValue";

function App() {
  const { defaultEditorValue } = useDefaultEditorValue();
  const [html, setHtml] = useParseHtml(defaultEditorValue);

  function handleText(e) {
    e.preventDefault();
    setHtml(e.target.value);
  }

  return (
    <main className="main">
      <header>
        <h1 className="primary-heading">Markdown Previewer</h1>
      </header>
      <article className="main-section">
        <section className="editor-container">
          <div className="editor-heading">
            <h2 className="secondary-heading">Editor</h2>
          </div>
          <section className="editor-section">
            <textarea
              id="editor"
              defaultValue={defaultEditorValue}
              onChange={handleText}
              onLoad={handleText}
            ></textarea>
          </section>
        </section>
        <section className="preview-container">
          <div className="preview-heading">
            <h2 className="secondary-heading">Previewer</h2>
          </div>
          <section
            id="preview"
            dangerouslySetInnerHTML={{ __html: html }}
          ></section>
        </section>
      </article>
      <footer id="footer">Created by Francis Pelletier</footer>
    </main>
  );
}

export default App;
