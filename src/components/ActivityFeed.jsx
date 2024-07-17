import React, { useState, useEffect } from "react";
import { getActivities, updateActivity } from "../api";
import PhoneCard from "./PhoneCard";

const ActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);
  const fetchActivities = async () => {
    const response = await getActivities();
    console.log(response);

    setActivities(response.data.filter((activity) => !activity.is_archived));
  };

  const handleArchive = async (id) => {
    await updateActivity(id, { is_archived: true });
    fetchActivities();
  };

  const handleArchiveAll = async () => {
    const activeCalls = activities.map((activity) =>
      updateActivity(activity.id, { is_archived: true })
    );
    await Promise.all(activeCalls);
    fetchActivities();
  };

  return (
    <div className="p-4 border-red-600 border-2">
      <h1 className="text-2xl font-bold mb-4">Activity Feed</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleArchiveAll}
      >
        Archive All Calls
      </button>
      <div className="space-y-4 ">
        {["1", "12"].map((activity) => (
          <PhoneCard />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
