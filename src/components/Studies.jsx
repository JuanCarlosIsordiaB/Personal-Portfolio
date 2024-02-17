import React from "react";
import SectionTitle from "./SectionTitle";
import studies from "../data/studies";
import StudyComponent from "./StudyComponent";

const Studies = () => {
  return (
    <div className="py-12 ">
      <SectionTitle title="Studies" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {studies.map((study) => (
          <StudyComponent
            key={study.title}
            title={study.title}
            career={study.career}
            status={study.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Studies;
