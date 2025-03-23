import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("message", (event) => {
      console.log(event.data);
    });
  }, []);

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
      hello world
    </div>
  );
}

export default App;
