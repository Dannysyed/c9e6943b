import React from "react";
import { format } from "date-fns";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";

const PhoneCard = ({ from, time, direction, is_archived, callType }) => {
  const formattedTime = format(new Date(time), "hh:mm a");

  return (
    <div
      className={`flex flex-row justify-between p-4 items-center border-2  rounded-lg`}
    >
      <div className="flex gap-3 items-center">
        <div className="text-xl">
          {direction == "inbound" ? <CallIcon /> : <PhoneMissedIcon />}
        </div>
        <div>
          <h4 className="text-lg font-semibold">{from}</h4>
          <p className="text-gray-500">{callType}</p>
        </div>
      </div>
      <div className="text-gray-500 flex items-center gap-3">
        <p>{formattedTime}</p>
        <ArchiveIcon />
      </div>
    </div>
  );
};

export default PhoneCard;
