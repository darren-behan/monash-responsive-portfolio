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
          <h3 className="vertical-timeline-element-title" style={{ color: '#fff' }}>ERP Support Coordinator</h3>
        </Button>
        <Collapse in={openOne}>
          <div id="collapse-one">
            <h5 className="vertical-timeline-element-subtitle">REA Group</h5>
            <p>
              Developing Javascript scripts along with test
              scripts using Jasmine to deliver business
              requirements. 
              Translating business requirements into clear,
              concise, testable and accurate user stories &
              process flows.
              Ensuring that requirements are understood
              through story kickoffs and constant
              communication using a variety of analysis and
              documentation techniques including the
              application of visualization techniques to
              underpin a joint understanding of processes and
              data.
              Coordinate Netsuite upgrades including,
              development and execution of test cases to
              ensure upgrades occur without any business
              disruption.
              Maintain/Update Netsuite/Adaptive account and
              organization structures, workflows and processes
              Supporting internal stakeholders as the main
              contact for all requests and enhancements for
              the companies ERP system (NetSuite).
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
          <h3 className="vertical-timeline-element-title">Accounts Payable Officer</h3>
        </Button>
        <Collapse in={openTwo}>
          <div id="collapse-two">
            <h5 className="vertical-timeline-element-subtitle">REA Group</h5>
            <p>
              Process all new & existing invoices requiring
              payment by directing these to the relevant
              requisitioners.
              Performing weekly domestic and international pay
              runs for an international organization.
              Generating data for the processing of monthly
              accruals throughout the organization.
              Daily receipting tasks of all payments received.
              General support for the accounts receivables
              department.
              Supporting the various vendors and internal
              stakeholders on a daily basis.
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
          <h3 className="vertical-timeline-element-title">Customer Credit Controller</h3>
        </Button>
        <Collapse in={openThree}>
          <div id="collapse-three">
            <h5 className="vertical-timeline-element-subtitle">REA Group</h5>
            <p style={{ textAlign: 'right' }}>
              Overseen a ledger of 3,000+ accounts.
              Timely and effective collection of all debts and
              customers payments.
              Negotiating payment plans.
              Resolving queries both internally and externally
              around outstanding invoices.
              Posting and allocating daily receipts.
              Checking customer’s credit ratings with our
              external partners.
              Process Improvement by delivering a new CRM
              (Zendesk) to increase our level of service with
              our customers and provide reporting on customer
              behaviours.
              Weekly Project catch ups and reporting to ensure
              implemented changes are successfully impacting
              our customers and internal stakeholders.
              Communication with internal & external
              stakeholders for process changes, requirements
              for further development and any assistance
              required within the credit process.
              Process and user journey mapping to enable
              further discovery for process improvement and
              automation.
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
          <h3 className="vertical-timeline-element-title">Customer Experience Consultant</h3>
        </Button>
        <Collapse in={openFour}>
          <div id="collapse-four">
            <h5 className="vertical-timeline-element-subtitle">REA Groups</h5>
            <p>
              Assisting in the development of current
              processes like implementing Zendesk and a
              Salesforce CRM.
              Process and User Journey Mapping.
              Internal stakeholder interviews translated into
              data and further workshopping.
              Communicate findings to wider team and
              management.
              Knowledge Sharing across Digital Marketing,
              Products, Programming, Accounts.
              Maintaining 48 hour SLA's.
              Delivering high levels of customer service to
              internal and external stakeholders.
              Day-to-day tasks such as Resourcing & assisting
              all queues.
            </p>
          </div>
        </Collapse>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Career