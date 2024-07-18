import React, { useState, useEffect } from "react";
import { getActivity } from "../api";

const ActivityDetail = ({ match }) => {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    const response = await getActivity("6685a0df24a7a79ae0c50f8f");
    setActivity(response.data);
  };

  if (!activity) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Activity Detail</h1>
      <div className="border space-y-4 overflow-scroll  h-[60vh] p-4">
        <p>
          <span className="font-bold">From:</span> {activity.from}
        </p>
        <p>
          <span className="font-bold">To:</span> {activity.to}
        </p>
        <p>
          <span className="font-bold">Via:</span> {activity.via}
        </p>
        <p>
          <span className="font-bold">Duration:</span> {activity.duration}{" "}
          seconds
        </p>
        <p>
          <span className="font-bold">Type:</span> {activity.call_type}
        </p>
        <p>
          <span className="font-bold">Direction:</span> {activity.direction}
        </p>
        <p>
          <span className="font-bold">Date:</span>{" "}
          {new Date(activity.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ActivityDetail;
