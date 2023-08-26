import { Link } from "react-router-dom";

import React from "react";
import PSyklogo from "../Images/psyk jpegArtboard 1 copy 3@300x-100 2.png";
import Arrow from "../Images/Vector.svg";
import WaitlistButton from "../Forms/forms";
import BigImage from "../Images/Frame 44731.png";
import "./header.css";
// import FormPage from "./Formpage";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={PSyklogo} alt="" srcSet="" />
      <div className="header-content">
        <div className="header-headline">
          <h1 className="title">
            Providing Mental health care for undergraduates in Nigeria
          </h1>
          <p className="description">
            Psyk provides a safe and confidential space where you can access
            valuable resources, connect with professionals, and develop
            effective strategies to enhance your mental resilience as a student.
          </p>

          <button className="join-button">
            Join Waitlist
            <img src={Arrow} alt="" srcSet="" />
          </button>
          <WaitlistButton />
        </div>
        <div className="image-container">
          <img className="psky-image" src={BigImage} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

// import { Link } from "react-router-dom";
// import React from "react";
// import PSyklogo from "../Images/psyk jpegArtboard 1 copy 3@300x-100 2.png";
// import Arrow from "../Images/Vector.svg";
// import "./header.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <img className="logo" src={PSyklogo} alt="" srcSet="" />
//       <div className="header-content">
//         <div className="header-headline">
//           <h1 className="title">
//             Providing Mental health care for undergraduates in Nigeria
//           </h1>
//           <p className="description">
//             {/* ... */}
//           </p>
//           {/* Corrected import and path */}
//           <Link to="/form">
//             <button className="join-button">
//               Join Waitlist
//               <img src={Arrow} alt="" srcSet="" />
//             </button>
//           </Link>
//         </div>
//         {/* ... */}
//       </div>
//     </div>
//   );
// };

// export default Header;
