import { useNotifications } from "./hooks/useNotifications";
import NotificationCard from "./components/NotificationCard";

function App() {
  const { notifications, loading } = useNotifications();

  if (loading) return <h2>Loading..</h2>;
if (notifications.length === 0) return <h2>No notifications found</h2>;
  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      {notifications.map((item) => (
        <NotificationCard key={item.ID} item={item} />
      ))}
    </div>
  );
}

export default App;