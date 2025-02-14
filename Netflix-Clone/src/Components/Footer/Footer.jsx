import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>

            <ul>
              <li>
                <p className="service_code">Service Code</p>
              </li>
              <li>
                <p className="copy-write">&copy; 1997-2024 Netflix, Inc. </p>{" "}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Card</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <div>
              {/* <ul>
                <li><p className="service_code">Service Code</p></li>
                <li><p className="copy-write" >&copy; 1997-2024 Netflix, Inc. </p> </li>
            </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
