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
      text="worked with many companies & picked up multiple skills"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="worked with many companies & picked up multiple skills"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="need a project done or looking for a dev?"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
