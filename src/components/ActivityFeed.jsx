import React, { useState, useEffect } from "react";
import { getActivities, updateActivity } from "../api";

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

  return (
    <div className="p-4 border-red-600 border-2">
      <h1 className="text-2xl font-bold mb-4">Activity Feed</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleArchiveAll}
      >
        Archive All Calls
      </button>
      <div className="space-y-4 border-red-600 border-2">
        {activities.map((activity) => (
          <h1>phone</h1>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
