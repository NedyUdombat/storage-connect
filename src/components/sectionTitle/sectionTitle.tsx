import React from "react";
import "./sectionTitle.scoped.scss";

interface SectionTitleProps {
  value: string;
  bolder?: boolean;
  classnames?: string;
}

const SectionTitle = ({ value, bolder, classnames }: SectionTitleProps) => {
  return (
    <h1 className={`section-title${bolder ? " bolder" : ""} ${classnames}`}>
      {value}
    </h1>
  );
};

export default SectionTitle;
