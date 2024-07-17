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

    setActivities(
      response.data.filter((activity) => !activity.is_archived).reverse()
    );
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
    <div className="">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={handleArchiveAll}
      >
        Archive All Calls
      </button>
      <div className="space-y-4 overflow-scroll  h-[60vh] p-4">
        {activities.map((activity) => (
          <PhoneCard
            from={activity.from}
            key={activity.id}
            id={activity.id}
            direction={activity.direction}
            time={activity.created_at}
            is_archived={activity.is_archived}
            callType={activity.call_type}
            handleArchive={handleArchive}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
