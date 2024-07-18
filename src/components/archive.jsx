import React, { useState, useEffect } from "react";
import { getActivities, updateActivity } from "../api";
import PhoneCard from "./PhoneCard";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

const Archive = () => {
  const [archivedActivities, setArchivedActivities] = useState([]);

  useEffect(() => {
    fetchArchivedActivities();
  }, []);

  const fetchArchivedActivities = async () => {
    const response = await getActivities();
    setArchivedActivities(
      response.data.filter((activity) => activity.is_archived)
    );
  };

  const handleUnarchive = async (id) => {
    await updateActivity(id, { is_archived: false });
    fetchArchivedActivities();
  };

  const handleUnarchiveAll = async () => {
    const archived = archivedActivities.map((activity) =>
      updateActivity(activity.id, { is_archived: false })
    );
    await Promise.all(archived);
    fetchArchivedActivities();
  };

  return (
    <div className="">
      <button
        className="bg-green-500 text-white  px-4 py-2 rounded m-4 left-0"
        onClick={handleUnarchiveAll}
      >
        <UnarchiveIcon className="mr-2" />
        Unarchive All Calls
      </button>
      <div className="space-y-4 overflow-scroll  h-[60vh] p-4">
        {archivedActivities.length === 0 ? (
          <p className="text-center text-2xl">No calls Found</p>
        ) : (
          archivedActivities.map((activity) => (
            <PhoneCard
              from={activity.from}
              key={activity.id}
              id={activity.id}
              direction={activity.direction}
              time={activity.created_at}
              is_archived={activity.is_archived}
              callType={activity.call_type}
              handleArchive={handleUnarchive}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Archive;
