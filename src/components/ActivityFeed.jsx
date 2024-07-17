import React, { useState, useEffect } from "react";
import { getActivities, updateActivity } from "../api";

const ActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    const response = await getActivities();
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Activity Feed</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleArchiveAll}
      >
        Archive All Calls
      </button>
      <ul className="space-y-4">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="p-4 border rounded shadow-sm flex justify-between items-center"
          >
            <div>
              <div className="font-bold">{activity.from}</div>
              <div className="text-gray-500">{activity.to}</div>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleArchive(activity.id)}
            >
              Archive
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
