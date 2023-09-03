import React, { useState, useRef } from "react";
import ChevronClosed from "../icons/ChevronClosed.svg";
import ChevronOpen from "../icons/ChevronOpen.svg";
const Accordion = ({ title, content }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  };
  return (
    <div onClick={HandleOpening} className="border border-indigo-400">
      <div className={"bg-indigo-300 p-4 flex justify-between text-white"}>
        <h4 className="font-semibold">{title}</h4>
        {isOpened ? <ChevronOpen /> : <ChevronClosed />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-gray-200 overflow-hidden transition-all duration-200"
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
