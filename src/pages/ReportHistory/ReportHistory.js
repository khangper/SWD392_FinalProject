import React from 'react'
import "./ReportHistory.css"

import RPH from "../../assets/RPH.png";

export default function ReportHistory() {
  return (
<div class="RH-container">
    <h2 class="RH-st_title"><img src={RPH} alt='' className="Check-iocn"  /> Report history</h2>
    <div class="RH-grid-container">
        <div class="RH-report_history">
            <h4>Thanks for reporting</h4>
            <p>Any member of the Cursus community can flag content to us that they believe violates our Community Guidelines. When something is flagged, it’s not automatically taken down. Flagged content is reviewed in line with the following guidelines:</p>
            <ul>
                <li><p>Content that violates our <a href="#">Community Guidelines</a> is removed from Edututs+.</p></li>
                <li><p>Content that may not be appropriate for all younger audiences may be age-restricted.</p></li>
            </ul>
            <a href="#" class="RH-lnk586">Learn more about reporting content on Cursus.</a>
            <span>You haven't submitted any reports.</span>
        </div>
    </div>
</div>

  )
}
