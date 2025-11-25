import React from 'react'

export default function RecentSearch({QuestionHistory,SetQuestionHistory,SetselectedHistory}) {
  const clearHistory = () => {
    localStorage.clear();
    SetQuestionHistory([]);
  };

  return (
    <>
      <div
        className="
          col-span-1 
          dark:bg-zinc-700 dark:text-white 
          bg-red-100 text-zinc-700 p-4 
          w-full 
          h-auto md:h-screen 
          overflow-auto
        "
      >
        <h1 className="text-xl font-semibold mb-4 border-b border-zinc-600 pb-2 flex justify-center">
          <span> Recent Search</span>
          <button className="cursor-pointer" onClick={clearHistory}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </h1>

        <ul className="space-y-2">
          {QuestionHistory &&
            QuestionHistory.map((item, index) => (
              <li
                key={index}
                onClick={() => SetselectedHistory(item)}
                className="
                  text-left truncate px-3 
                  dark:bg-zinc-700 rounded-lg 
                  dark:hover:bg-zinc-600 hover:bg-red-200 
                  cursor-pointer transition-all
                "
              >
                {item}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
