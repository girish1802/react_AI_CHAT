import React from "react";
import Answers from "./Answers";

export default function QuestionAns({item ,index}) {
  return (
    <>
      <div 
        key={index + Math.random()}
        className={item.type == "q" ? "flex justify-end" : ""}
      >
        {item.type == "q" ? (
          <li
            key={index + Math.random()}
            className=" text-right border-5  font-bold rounded-tl-2xl dark:text-white text-zinc-700 dark:bg-zinc-700 bg-red-100  border-red-100 rounded-tr-2xl  rounded-br-2xl dark:border-zinc-700 p-1"
          >
            <Answers ans={item.text} totalResult={1} index={index} />
          </li>
        ) : (
          item.text.map((ansItem, ansIndex) => (
            <li key={ansIndex + Math.random()} className="   text-zinc-700  dark:text-white  text-left p-1">
              <Answers ans={ansItem} totalResult={item.length} index={index}/>
              
            </li>
          ))
        )}
      </div>
    </>
  );
}
