import React from "react";
import "./sectionSubTitle.scoped.scss";

interface SectionSubTitleProps {
  value: string;
  classnames?: string;
}

const SectionSubTitle = ({ value, classnames = "" }: SectionSubTitleProps) => {
  return <p className={`section-subtitle mx-auto ${classnames}`}>{value}</p>;
};

export default SectionSubTitle;
