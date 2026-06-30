function NotificationCard({ item }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{item.Type}</h3>
      <p>{item.Message}</p>
      <small>{item.Timestamp}</small>
    </div>
  );
}

export default NotificationCard;
