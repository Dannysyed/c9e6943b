import React from "react";

const PhoneCard = ({ time, direction, is_archived }) => {
  return (
    <div className="flex flex-row justify-between p-4 items-center border-2 border-gray-100">
      <div className="flex felx-col gap-5 items-center">
        <div>
          <h1>📞</h1>
        </div>
        <div>
          <h4>+91 999999999</h4>
          <p>Tried to call</p>
        </div>
      </div>
      <div>7:0 PM</div>
    </div>
  );
};

export default PhoneCard;
