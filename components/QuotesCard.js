import React from "react";

const QuotesCard = ({ quote, author }) => {
  return (
    <div className="overflow-hidden bg-dark rounded-md shadow-md text-slate-500 p-4 w-64 border border-slate-800">
      <p className="text-slate-600 italic">"{quote}"</p>
      <p className="mt-2 text-right text-slate-500 font-medium">- {author}</p>
    </div>
  );
};

export default QuotesCard;
