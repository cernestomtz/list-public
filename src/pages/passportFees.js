import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
/*import Paragraph from "../components/paragraph"*/
import Table from "../components/table/table.js"

////
// Table has an object which contains Array of rows, and array of string keys.
////
const Applicants = {
  keys: [
    "What are you applying for?",
    "Use Form",
    "Application Fee<br /><small>*Paid to the U.S. Department of State</small>",
    "Execution Fee (Acceptance Fee)<br /><small>**Paid to the Acceptance Facility</small>"
  ],
  rows: [
    [
      "First-time Adult Passport Book",
      "<a href='#'>DS-11</a>",
      "$110",
      "$35"
    ],
    [
      "First-time Adult Passport Card <small>Not valid for international air travel. Valid only for travel by land and by sea to Canada, Mexico, Bermuda, and the Caribbean</small>",
      "<a href='#'>DS-11</a>",
      "$30",
      "$35"
    ],
    [
      "First-time Adult Passport Card <small>Not valid for international air travel. Valid only for travel by land and by sea to Canada, Mexico, Bermuda, and the Caribbean</small>",
      "<a href='#'>DS-11</a>",
      "$140",
      "$35"
    ],
    [
      "First-time Adult Passport Card <small>For applicants who currently have a valid passport book.</small>",
      "<a href='#'>DS-82</a>",
      "$30",
      "No Charge"
    ]
  ]
}
const Renewals = {
  keys: [
    "What are you renewing?",
    "Use Form",
    "Application Fee<br /><small>*Paid to the U.S. Department of State</small>"
  ],
  rows: [
    [
      "Adult Passport Book",
      "<a href='#'>DS-82</a>",
      "$110",
    ],
    [
      "Adult Passport Card<br /><small>Not valid for international air travel. Valid only for travel by land and by sea to Canada, Mexico, Bermuda, and the Caribbean</small>",
      "<a href='#'>DS-82</a>",
      "$30",
    ],
    [
      "Adult Passport Book & Card ",
      "<a href='#'>DS-82</a>",
      "$140",
    ]
  ]
}
const Minor = {
  keys: [
    "What are you applying for?",
    "Use Form",
    "Application Fee<br /><small>*Paid to the\n<br />U.S. Department of State</small>",
    "Execution Fee<br />(Acceptance Fee)<br /><small>**Paid to the Acceptance Facility</small>"
  ],
  rows: [
    [
      "Minor Passport Book",
      "<a href='#'>DS-11</a>",
      "$80",
      "$35",
    ],
    [
      "Minor Passport Card<br /><small>A passport card is valid only for travel by land and by sea to the following locations: Canada, Mexico, Bermuda, and the Caribbean.</small>",
      "<a href='#'>DS-11</a>",
      "$15",
      "$35",
    ],
    [
      "Minor Passport Book & Card",
      "<a href='#'>DS-11</a>",
      "$95",
      "$35",
    ]
  ]
}
const Optional = {
  rows: [
    [
      "Expedite Fee",
      "Paid per application, in addition to required fees. Provides faster processing than routine service. Please see <b>Processing Times.</b>",
      "$60"
    ],
    [
      "1-2 Day Delivery",
      "Paid per application for 1-2 day delivery of an issued passport book from the Department of State to the customer. Only applies to mailing addresses within the United States. Not valid for passport cards.",
      "$16.48"
    ],
    [
      "File Search Fee",
      "A file search is necessary when an applicant is unable to present evidence of U.S. citizenship or verification of a previously issued U.S. Passport or Consular Report of Birth Abroad. Applicant must submit <a href='#'>Form DS-11</a> and a written request for a file search. ",
      "$150"
    ]
  ]
}



const PasspotFees = () => (
  <Layout>
    <SEO title="Home" />
    <h1>UNITED STATES PASSPORT FEES</h1>
    <p>
      <b>Payment Instructions</b>: *The application fee is paid directly to the Department of State. **The Execution/Acceptance fee is
      paid directly to the acceptance facility. Two separate payments are required. <small>(Effective 1/28/2019)</small>
    </p>
    <Table
      title="ADULT APPLICANTS (16 Years and Older) Please see <a href='#'>Apply in Person.</a>"
      keys={Applicants.keys}
      rows={Applicants.rows}
    />
    <Table
      title="ADULT RENEWALS Please see <a href='#'>Renewal by Mail.</a>"
      keys={Renewals.keys}
      rows={Renewals.rows}
    />
    <Table
      title="ALL MINOR APPLICANTS (Under 16) Please see <a href='#'>Children Under 16.</a>"
      keys={Minor.keys}
      rows={Minor.rows}
    />
    <Table
      title="OPTIONAL FEES (Paid to the U.S. Department of State)"
      keys={Optional.keys}
      rows={Optional.rows}
    />
    <p>
      <b>Submitting incorrect passport fees could delay the processing of your application</b>. For more information regarding passport
      application fees, please visit <Link to="/page-2/">travel.state.gov/fees</Link> or call 1-877-487-2778, TDD/TTY: 1-888-874-7793.
    </p>
  </Layout>
)

export default PasspotFees
