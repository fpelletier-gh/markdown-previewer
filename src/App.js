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
        <h1 className="primary-header">Markdown Previewer</h1>
      </header>
      <textarea
        id="editor"
        defaultValue={defaultEditorValue}
        onChange={handleText}
        onLoad={handleText}
      ></textarea>
      <section
        id="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      ></section>
    </main>
  );
}

export default App;
