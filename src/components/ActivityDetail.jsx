import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getActivity } from "../api";
import CircularProgress from "@mui/material/CircularProgress";

const ActivityDetail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActivity();
  }, [id]);

  const fetchActivity = async () => {
    try {
      const response = await getActivity(id);
      setActivity(response.data);
    } catch (err) {
      setError("Failed to fetch activity details");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-full">
        <CircularProgress />
      </div>
    );
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Activity Detail</h1>
      <div className="border p-4 rounded-lg shadow-md space-y-4 h-[60vh] overflow-y-auto">
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
