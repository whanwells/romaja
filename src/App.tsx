import { useState } from "react";
import type { ChangeEvent, VFC } from "react";
import romanize from "./romanize";
import TextArea from "./TextArea";

const App: VFC = () => {
  const [source, setSource] = useState("");
  const [result, setResult] = useState("");

  function onSourceChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setSource(event.target.value);
    setResult(romanize(event.target.value));
  }

  return (
    <>
      <div>
        <label htmlFor="hangeul" className="sr-only">
          Korean Text
        </label>
        <TextArea
          id="hangeul"
          value={source}
          onChange={onSourceChange}
          placeholder="Enter Korean text here..."
        />
      </div>
      <div>
        <label htmlFor="romanization" className="sr-only">
          Romanization
        </label>
        <TextArea
          id="romanization"
          value={result}
          readOnly
          placeholder="Get romanization here!"
        />
      </div>
    </>
  );
};

export default App;
