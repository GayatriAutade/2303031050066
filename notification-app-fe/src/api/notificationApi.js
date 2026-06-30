export const fetchNotifications = async () => {
  try {
    const res = await fetch(
      "http://4.224.186.213/evaluation-service/notifications"
    );

    const data = await res.json();

    console.log("API RESPONSE:", data);

    return data?.notifications || [];
  } catch (error) {
    console.log("API ERROR:", error);
    return [
        {
    ID: 1,
    Type: "Test Notification",
    Message: "Frontend is working",
    Timestamp: "2026-01-01"
  }
    ];
  }
};