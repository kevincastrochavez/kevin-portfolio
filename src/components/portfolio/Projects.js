import React, { useEffect, useState } from 'react';
import { projects, projectsNav } from './data';
import Project from './Project';

function Projects() {
  const [navItemSelected, setNavItemSelected] = useState(projectsNav[0]);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (navItemSelected?.name === 'all') {
      setVisibleProjects(projects);
    } else {
      const filteredProjects = projects.filter(
        (project) => project.category.toLowerCase() === navItemSelected.name
      );
      setVisibleProjects(filteredProjects);
    }
  }, [navItemSelected]);

  const handleTabClick = (e, index) => {
    setNavItemSelected({ name: e.target.textContent.toLowerCase() });
    setActiveTab(index);
  };

  const navItems = projectsNav?.map((navItem, index) => (
    <span
      onClick={(e) => handleTabClick(e, index)}
      className={`${
        activeTab === index && 'active__project'
      } projects__navItem`}
      key={index}
    >
      {navItem.name}
    </span>
  ));

  const projectItems = visibleProjects?.map((projectItem) => (
    // TODO: Fix cards and customize them
    // TODO: Give more space and better layout

    <Project key={projectItem.id} item={projectItem} />
  ));

  return (
    <>
      <div className='projects__filters'>{navItems}</div>
      <div className='projects__container container grid'>{projectItems}</div>
    </>
  );
}

export default Projects;
