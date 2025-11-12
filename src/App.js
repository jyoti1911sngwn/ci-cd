import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Mini Status Board</h2>

      <input
        placeholder="Update your status..."
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)} style={{ marginLeft: 10 }}>
        Like {count}
      </button>

      <p style={{ marginTop: 20 }}>Current Status: {status || "Nothing yet"}</p>
    </div>
  );
}
