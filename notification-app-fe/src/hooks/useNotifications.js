import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notificationApi";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (err) {
        console.log("Error fetching notifications", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { notifications, loading };
};