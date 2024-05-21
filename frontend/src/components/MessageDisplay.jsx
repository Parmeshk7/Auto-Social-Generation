import React from "react";

const MessageDisplay = ({message}) => {
  return (
    <div
      className="flex items-center py-10 px-20 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <div className="font-medium">{message}</div>
    </div>
  );
};

export default MessageDisplay;
