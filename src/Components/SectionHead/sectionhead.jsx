import React from "react";
import "./sectionhead.css";
const SectionHead = ({ title, description, className, id }) => {
  return (
    <>
      <div className={`Section-heading `}>
        <h4 className={`${className}`}>{description}</h4>
        <h1 className={`${id}`}>{title}</h1>
      </div>
    </>
  );
};

export default SectionHead;
