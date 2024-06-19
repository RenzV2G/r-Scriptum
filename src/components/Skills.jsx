import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <div className="skills__container">
      {skills.map(({ title, logo }, index) => (
        <div className="skill__box" key={index}>
          <div className="logo__container">
            <img src={logo} alt={`${title} logo`} className="skill__logo" />
          </div>
          <h3 className="skills__title">{title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Skills;
