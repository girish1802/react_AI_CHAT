import React, { useEffect, useState } from "react";
import { checkHeadig, replacestar } from "../heading";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Answers({ ans, totalResult, index }) {
  const [Heading, setHeading] = useState(false);
  const [Answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeadig(ans)) {
      setHeading(true);
      setAnswer(replacestar(ans));
    }
  }, []);
  const renderer={
    code({node, inline,className,children,...props })
    {
      const match=/language-(\w+)/.exec(className ||'');
      return !inline && match?(
        <SyntaxHighlighter
        {...props}
        children={String(children).replace(/\n$/,'')}
        language={match[1]}
        style={dark}
        pretag="div"
        
        />
      ):(
        <code {...props} className={className} >
          {children}

        </code>
      )
    }
  }
  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className="text-3xl text-white">{Answer}</span>
      ) : Heading ? (
        <span
          className={
            index == 0
              ? "text-4xl"
              : "pt-2 block dark:text-white  text-zinc-800 text-lg"
          }
        >
          {" "}
          {Answer}
        </span>
      ) : (
        <span className="pl-5 text-sm">
          <ReactMarkdown components={renderer}>
            {Answer}
          </ReactMarkdown>
        </span>
      )}
    </>
  );
}
