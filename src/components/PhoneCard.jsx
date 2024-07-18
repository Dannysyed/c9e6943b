import React from "react";
import { format } from "date-fns";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import { useNavigate } from "react-router-dom";

import UnarchiveIcon from "@mui/icons-material/Unarchive";
const PhoneCard = ({
  from,
  time,
  direction,
  is_archived,
  callType,
  handleArchive,
  id,
}) => {
  const formattedTime = format(new Date(time), "hh:mm a");
  const navigate = useNavigate();
  let handleNext = () => {
    navigate(`/activity/${id}`);
  };
  const handleArchiveClick = (e) => {
    e.stopPropagation();
    handleArchive(id);
  };
  return (
    <div
      className={`flex flex-row justify-between p-4 items-center border-2  rounded-lg hover:bg-slate-200 cursor-pointer`}
      onClick={handleNext}
    >
      <div className="flex gap-3 items-center">
        <div className="text-xl">
          {callType == "answered" ? (
            <CallIcon className="text-blue-500" />
          ) : (
            <PhoneMissedIcon className="text-red-500" />
          )}
        </div>
        <div>
          <h4 className="text-lg font-semibold">{from}</h4>
          <p className="text-gray-500">{callType}</p>
        </div>
      </div>
      <div className="text-gray-500 flex items-center gap-3">
        <p>{formattedTime}</p>
        {!is_archived ? (
          <ArchiveIcon onClick={handleArchiveClick} className="text-red-800" />
        ) : (
          <UnarchiveIcon
            onClick={handleArchiveClick}
            className="text-red-800"
          />
        )}
      </div>
    </div>
  );
};

export default PhoneCard;
