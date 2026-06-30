import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";
import { getTopNotifications } from "../utils/priorityInbox";

const AUTH_TOKEN = "YOUR_TOKEN_HERE"; 
const TOP_N = 10;

export default function PriorityInbox() {
  const [topNotifs, setTopNotifs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const all = await fetchNotifications(AUTH_TOKEN);
        const top = getTopNotifications(all, TOP_N);
        setTopNotifs(top);
      } catch (err) {
        setError(err.message);
      }
    }
    load();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Priority Inbox (Top {TOP_N})</h1>
      <ul>
        {topNotifs.map((n) => (
          <li key={n.ID}>
            <strong>[{n.Type}]</strong> {n.Message}{" "}
            <em>— {new Date(n.Timestamp).toLocaleString()}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}