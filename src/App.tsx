import { useState } from "react";
import type { ChangeEvent, VFC } from "react";
import Label from "./Label";
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
      <div className="text-center">
        <Label htmlFor="hangeul">Korean Text</Label>
        <TextArea
          id="hangeul"
          value={source}
          autoFocus
          onChange={onSourceChange}
        />
      </div>
      <div className="text-center">
        <Label htmlFor="results">Results</Label>
        <TextArea id="results" value={result} readOnly tabIndex={-1} />
      </div>
    </>
  );
};

export default App;
