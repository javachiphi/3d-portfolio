import React from 'react';
import { arrow } from '../assets/icons';
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain " />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Sophie</span> 👋
      <br />A Software Engineer from Singapore
    </h1>
  ),
  2: (
    <InfoBox
      text="I love thinking about how to create "
      link="/about"
      btnText="Visit Sophie's CV"
    />
  ),
  3: (
    <InfoBox
      text="I enjoy building projects with the latest technologies"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done? or just wanna say hello?"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
