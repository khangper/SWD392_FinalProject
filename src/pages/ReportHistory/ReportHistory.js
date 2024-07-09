import React from "react";
import "./ReportHistory.css";

import RPH from "../../assets/RPH.png";

export default function ReportHistory() {
  return (
    <div className="RH-container">
      <h2 className="RH-st_title">
        <img src={RPH} alt="" className="Check-iocn" /> Report history
      </h2>
      <div className="RH-grid-container">
        <div className="RH-report_history">
          <h4>Thanks for reporting</h4>
          <p>
            Any member of the Cursus community can flag content to us that they
            believe violates our Community Guidelines. When something is
            flagged, it’s not automatically taken down. Flagged content is
            reviewed in line with the following guidelines:
          </p>
          <ul className="RH-Content">
            <li>
              <p>
                Content that violates our <a href="#">Community Guidelines</a>{" "}
                is removed from Edututs+.
              </p>
            </li>
            <li>
              <p>
                Content that may not be appropriate for all younger audiences
                may be age-restricted.
              </p>
            </li>
          </ul>
          <a href="#" className="RH-lnk586">
            Learn more about reporting content on Cursus.
          </a>
          <span>You haven't submitted any reports.</span>
        </div>
      </div>
    </div>
  );
}
