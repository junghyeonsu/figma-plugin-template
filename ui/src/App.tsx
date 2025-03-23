import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event.data);
    });
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "red" }}>
      <button type="button" onClick={() => window.parent.postMessage("hello", "*")}>
        hello
      </button>
    </div>
  );
}

export default App;
