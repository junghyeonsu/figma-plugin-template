import { events } from "../shared/event";

function App() {
  const notify = () => events("notify").emit({ message: "hello world" });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button type="button" onClick={notify}>
        hello world
      </button>
    </div>
  );
}

export default App;
