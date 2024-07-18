import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getActivity } from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  if (error)
    return <div className="text-red-500 text-center mt-4">{error}</div>;

  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button className="mr-2" onClick={() => navigate("/")}>
          <ArrowBackIcon fontSize="large" />
        </button>
        <h1 className="text-2xl font-bold">Activity Detail</h1>
      </div>
      <div className="border p-4 rounded-lg shadow-md space-y-4 h-[60vh] overflow-y-auto">
        <p className="flex items-center">
          <PersonIcon className="mr-2" />
          <span className="font-bold">From:</span> {activity.from}
        </p>
        <p className="flex items-center">
          <PersonIcon className="mr-2" />
          <span className="font-bold">To:</span> {activity.to}
        </p>
        <p className="flex items-center">
          <PhoneIcon className="mr-2" />
          <span className="font-bold">Via:</span> {activity.via}
        </p>
        <p className="flex items-center">
          <AccessTimeIcon className="mr-2" />
          <span className="font-bold">Duration:</span> {activity.duration}{" "}
          seconds
        </p>
        <p className="flex items-center">
          <PhoneIcon className="mr-2" />
          <span className="font-bold">Type:</span> {activity.call_type}
        </p>
        <p className="flex items-center">
          {activity.direction === "outbound" ? (
            <CallMadeIcon className="mr-2" />
          ) : (
            <CallReceivedIcon className="mr-2" />
          )}
          <span className="font-bold">Direction:</span> {activity.direction}
        </p>
        <p className="flex items-center">
          <EventIcon className="mr-2" />
          <span className="font-bold">Date:</span>{" "}
          {new Date(activity.created_at).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ActivityDetail;
