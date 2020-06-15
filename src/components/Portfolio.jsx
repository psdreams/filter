import React, { useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

const Portfolio = () => {
  const projects = [
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
      category: "Flayers",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
      category: "Business Cards",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
      category: "Websites",
    },
    {
      img:
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
      category: "Flayers",
    },
  ];

  const [filteredProjects, setFilter] = useState(projects);
  const [selectedClass, setClass] = useState("All");

  const onSelectFilter = (filter) => {
    filter === "All"
      ? setFilter(projects)
      : setFilter(projects.filter((p) => p.category === filter));

    setClass(filter);
    //console.log(filteredProjects);
  };

  return (
    <div>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selectedClass}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={filteredProjects} />
    </div>
  );
};

export default Portfolio;
