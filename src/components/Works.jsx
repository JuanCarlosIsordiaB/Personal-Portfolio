import React from "react";
import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import worksData from "../data/worksData";

const Works = () => {
  return (
    <div id="works" className="py-12">
      <SectionTitle title="Recent Works" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {worksData.map((work) => (
          <WorkItem
            key={work.title}
            imgURL={work.imgURL}
            title={work.title}
            tech={work.tech}
            link={work.link}
            className="w-full h-36 md:h-48 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
