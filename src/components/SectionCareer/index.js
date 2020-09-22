import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button, Collapse } from 'react-bootstrap';

function Career() {
  const [openOne, setButtonOneOpen] = useState(false);
  const [openTwo, setButtonTwoOpen] = useState(false);
  const [openThree, setButtonThreeOpen] = useState(false);
  const [openFour, setButtonFourOpen] = useState(false);
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#fbfbfb' }}
        contentArrowStyle={{ borderRight: '7px solid #fbfbfb' }}
        date="March 2019 - present"
        iconStyle={{ background: '#0bc2c9', color: '#fff' }}
      >
        
        <Button
          onClick={() => setButtonOneOpen(!openOne)}
          aria-controls="collapse-one"
          aria-expanded={openOne}
        >
          <h4 className="vertical-timeline-element-title" style={{ color: '#fff' }}>ERP Support Coordinator</h4>
        </Button>
        <Collapse in={openOne}>
          <div id="collapse-one">
            <h5 className="vertical-timeline-element-subtitle">REA Group</h5>
            <p>
              <ul>
                <li>
                  Developing Javascript scripts along with test
                  scripts using Jasmine to deliver business
                  requirements.
                </li>
                <li>
                  Translating business requirements into clear,
                  concise, testable and accurate user stories &
                  process flows.
                </li>
                <li>
                  Ensuring that requirements are understood
                  through story kickoffs and constant
                  communication using a variety of analysis and
                  documentation techniques including the
                  application of visualization techniques to
                  underpin a joint understanding of processes and
                  data.
                </li>
                <li>
                  Coordinate Netsuite upgrades including,
                  development and execution of test cases to
                  ensure upgrades occur without any business
                  disruption.
                </li>
                <li>
                  Maintain/Update Netsuite/Adaptive account and
                  organization structures, workflows and processes
                  Supporting internal stakeholders as the main
                  contact for all requests and enhancements for
                  the companies ERP system (NetSuite).
                </li>
              </ul>
            </p>
          </div>
        </Collapse>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August 2018 - March 2019"
        iconStyle={{ background: '#0bc2c9', color: '#fff' }}
      >
        <Button
          onClick={() => setButtonTwoOpen(!openTwo)}
          aria-controls="collapse-two"
          aria-expanded={openTwo}
        >
          <h4 className="vertical-timeline-element-title">Accounts Payable Officer</h4>
        </Button>
        <Collapse in={openTwo}>
          <div id="collapse-two">
            <h5 className="vertical-timeline-element-subtitle">REA Group</h5>
            <p>
              <ul>
                <li>
                  Process all new & existing invoices requiring
                  payment by directing these to the relevant
                  requisitioners.
                </li>
                <li>
                  Performing weekly domestic and international pay
                  runs for an international organization.
                </li>
                <li>
                  Generating data for the processing of monthly
                  accruals throughout the organization.
                </li>
                <li>
                  Daily receipting tasks of all payments received.
                  General support for the accounts receivables
                  department.
                </li>
                <li>
                  Supporting the various vendors and internal
                  stakeholders on a daily basis.
                </li>
              </ul>
            </p>
          </div>
        </Collapse>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August 2017 - August 2018"
        iconStyle={{ background: '#0bc2c9', color: '#fff' }}
      >
        <Button
          onClick={() => setButtonThreeOpen(!openThree)}
          aria-controls="collapse-three"
          aria-expanded={openThree}
        >
          <h4 className="vertical-timeline-element-title">Customer Credit Controller</h4>
        </Button>
        <Collapse in={openThree}>
          <div id="collapse-three">
            <h5 className="vertical-timeline-element-subtitle">REA Group</h5>
            <p>
              <ul>
                <li>
                  Overseen a ledger of 3,000+ accounts.
                  Timely and effective collection of all debts and
                  customers payments.
                </li>
                <li>
                  Negotiating payment plans.
                  Resolving queries both internally and externally
                  around outstanding invoices.
                </li>
                <li>
                  Posting and allocating daily receipts.
                  Checking customer’s credit ratings with our
                  external partners.
                </li>
                <li>
                  Process Improvement by delivering a new CRM
                  (Zendesk) to increase our level of service with
                  our customers and provide reporting on customer
                  behaviours.
                </li>
                <li>
                  Weekly Project catch ups and reporting to ensure
                  implemented changes are successfully impacting
                  our customers and internal stakeholders.
                </li>
                <li>
                  Communication with internal & external
                  stakeholders for process changes, requirements
                  for further development and any assistance
                  required within the credit process.
                </li>
                <li>
                  Process and user journey mapping to enable
                  further discovery for process improvement and
                  automation.
                </li>
              </ul>
            </p>
          </div>
        </Collapse>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August 2016 - August 2017"
        iconStyle={{ background: '#0bc2c9', color: '#fff' }}
      >
        <Button
          onClick={() => setButtonFourOpen(!openFour)}
          aria-controls="collapse-four"
          aria-expanded={openFour}
        >
          <h4 className="vertical-timeline-element-title">Customer Experience Consultant</h4>
        </Button>
        <Collapse in={openFour}>
          <div id="collapse-four">
            <h5 className="vertical-timeline-element-subtitle">REA Group</h5>
            <p>
              <ul>
                <li>
                  Assisting in the development of current
                  processes like implementing Zendesk and a
                  Salesforce CRM.
                </li>
                <li>
                  Process and User Journey Mapping.
                </li>
                <li>
                  Internal stakeholder interviews translated into
                  data and further workshopping.
                </li>
                <li>
                  Communicate findings to wider team and
                  management.
                </li>
                <li>
                  Knowledge Sharing across Digital Marketing,
                  Products, Programming, Accounts.
                </li>
                <li>
                  Maintaining 48 hour SLA's.
                </li>
                <li>
                  Delivering high levels of customer service to
                  internal and external stakeholders.
                </li>
                <li>
                  Day-to-day tasks such as Resourcing & assisting
                  all queues.
                </li>
              </ul>
            </p>
          </div>
        </Collapse>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Career