import React from "react";
import "./features.css";
import Articon from "../Images/arcticons_digital-wellbeing.svg";
import CommunityIcon from "../Images/fluent_people-community-16-regular.svg"
import LibraryIcon from "../Images/guidance_library.svg"
import MoodIcon from "../Images/tabler_mood-plus.svg"
import ResoursesIcon from "../Images/solar_library-broken.svg"
import { Link } from "react-router-dom";
// import LinkdlnIcon from "../Images/mdi_linkedin.svg";
import Arrowup from "../Images/Vector.svg"

import {AiFillFacebook,AiOutlineTwitter, AiFillLinkedin, AiFillYoutube, AiFillInstagram, BiRightArrowAlt} from "react-icons/ai";
import {FaArrowRight} from "react-icons/fa"
import {FiArrowUpRight} from "react-icons/fi"


const FeaturesLayout = () => {
  return (
    <div className="featuresLayout">
      <div className="featuresLayout-header">
        <p className="featuresLayout-header-title">Features</p>
      </div>
      <h1 className="featuresLayout-heading">Your Mental Health Companion</h1>
      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <img src={Articon} alt="ArticonImg" srcSet="" />
          </div>
          <h2 className="feature-title">Well-being Assessment</h2>
          <p className="feature-description">
            Evaluate and monitor your mental well-being through personalized
            assessments and progress tracking.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={CommunityIcon} alt="ArticonImg" srcSet="" />
          </div>
          <h2 className="feature-title">Professional Support</h2>
          <p className="feature-description">
          Connect with licensed therapists, counselors, or psychologists for virtual sessions and professional guidance.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={ResoursesIcon} alt="ResoursesIconImg" srcSet="" />
          </div>
          <h2 className="feature-title">Resource Library</h2>
          <p className="feature-description">
          Access a comprehensive collection of educational materials, self-help articles, and tools curated by mental health experts.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={MoodIcon} alt="MoodIconImg" srcSet="" />
          </div>
          <h2 className="feature-title">Mood Tracking</h2>
          <p className="feature-description">
          Monitor and analyze your emotions over time using mood tracking features, helping you gain insights into your mental state
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={LibraryIcon} alt="LibraryImg" srcSet="" />
          </div>
          <h2 className="feature-title">Journaling</h2>
          <p className="feature-description">
          Engage in journaling exercises to reflect on your thoughts, emotions, and experiences, promoting self-awareness and personal growth.
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={CommunityIcon} alt="ArticonImg" srcSet="" />
            
          </div>
          <h2 className="feature-title">Community Support</h2>
          <p className="feature-description">
          Interact with a supportive community of individuals who understand and empathize with your mental health journey.
          </p>
        </div>
      </div>
      {/*===== FOOTER========= */}
      <div className="footer">
        <div className="footer-heading">
          <p className="footer-text">
            Become a Psyk Insider by Joining our waitlist.
          </p>
          <div>
            {/* <Link to="/form"> */}
          <button className="footer-button">
            Tap to Join
            <FiArrowUpRight style={{  marginLeft: '5px', alignItems:"center" }}/>
            </button>
            {/* </Link> */}
          </div>
        </div>
        {/* #========social media links======= */}
        <div className="footer-connect">
          <h1 className="footer-connect-heading">Connect with us</h1>
          <div className="social-media">
          <a href="" target="_blank" className="social-media-icon">
            <AiOutlineTwitter/>
          </a>
          <a href="" target="_blank" className="social-media-icon">
            <AiFillLinkedin/>
          </a>
          <a href="" target="_blank" className="social-media-icon">
            <AiFillYoutube/>
          </a>
          <a href="" target="_blank" className="social-media-icon">
            <AiFillInstagram/>
          </a>
          <a href="" target="_blank" className="social-media-icon">
            <AiFillFacebook/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesLayout;
