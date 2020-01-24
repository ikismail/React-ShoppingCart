import React from "react";

const skills = [
  { color: "warning", title: "Angular" },
  { color: "primary", title: "Vuejs" },
  { color: "secondary", title: "React" },
  { color: "success", title: "Github" }
];

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='modal-content text-center'>
          <div className='modal-header'>
            <h4 className='modal-title' style={{ margin: "0 auto" }}>
              More About
              <span style={{ color: "crimson" }} className='ml-1'>
                ikismail
              </span>
            </h4>
          </div>
          <div className='modal-body'>
            <img
              src='https://avatars1.githubusercontent.com/u/17190913?s=460&v=4'
              alt='avatar'
              width='140'
              height='140'
              className='avatar'
            />
            <h3 className='media-heading'>Mohammed Ismail</h3>
            <h6>
              <strong>ikismail7@gmail.com</strong>
            </h6>
            <h6>
              <a href='https://ikismail.github.io/' target='_blank'>
                ikismail.github.io
              </a>
            </h6>

            {skills.map(skill => (
              <span className={`badge badge-${skill.color} p-2 m-1`}>
                {skill.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
