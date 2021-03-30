import "./HamburgerIcon.css";
import { Link } from "react-router-dom";

function HamburgerIcon() {
  return (
    <div className="HamburgerIcon">
      <label>
        <input type="checkbox" />
        <span class="menu">
          <span class="hamburger"></span>
        </span>
        <ul>
          <Link to="/report">
            <li>
              <p>Report a case</p>
            </li>
          </Link>
          <Link to="/help">
            <li>
              <p>Find help</p>
            </li>
          </Link>
          <Link to="/learn-more">
            <li>
              <p>Learn More</p>
            </li>
          </Link>
          <Link to="/statistics">
            <li>
              <p>Statistics</p>
            </li>
          </Link>
          <Link to="/risk">
            <li>
              <p>Am I at risk</p>
            </li>
          </Link>
        </ul>
      </label>
    </div>
  );
}

export default HamburgerIcon;
