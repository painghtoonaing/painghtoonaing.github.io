import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sept 2015 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior IT Technical Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Yip In Tsoi Myanmar</h4>
            <ul>
              <li>
                Leverage my expertise in storage, servers, networks, firewalls, security, virtualization, VPNs, and more to resolve IT challenges for customers.
              </li>
              <li>
                Collaborate with customers to plan and design firewalls, storage solutions, backups, and networks optimized for peak performance.
              </li>
              <li>
                Create and maintain detailed plans, procedures, and technical documentation, such as network diagrams, tailored to customer requirements.
              </li>
              <li>
                Work closely with customers and partners to develop cost-effective strategies for deploying or migrating IT systems on-site.
              </li>
              <li>
                Deliver technical training to both customers and colleagues.
              </li>
              <li>
                Responsible for all tech support for customers, including predicting system needs, installations, upgrades, and improvements.
              </li>
              <li>
                Solution-oriented Technical Engineer with over 9 years of experience turning complex IT ideas into real benefits for customers. I’ve worked with sales teams to build custom solutions for telecom, banking, and healthcare companies.
              </li>
              <li>
                Great at presenting, communicating, training, and building strong, lasting customer relationships.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2013 - Jun 2015"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sony VAIO Engineer/ IT Support Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">TMW Enterprise Limited</h4>
            <ul>
              <li>
                Diagnosed and resolved hardware, software, and network issues for VAIO laptops and related devices.
              </li>
              <li>
                Performed hardware repairs/replacements (RAM, HDD, displays) and configured operating systems and applications.
              </li>
              <li>
                Provided on-site and remote technical support for end-users, including WindowsOS, MacOS, Linux, LAN/WAN, Wi-Fi, and VPN troubleshooting.
              </li>
              <li>
                Installed and maintained network infrastructure (firewalls, routers, switches, WAPs) and supported printing services/shared drives.
              </li>
              <li>
                Monitored system performance, conducted daily checks, and prepared technical reports for management.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2011 - Dec 2012"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Network Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Micropeacock Company Limited</h4>
            <ul>
              <li>
                Designing and implementing computer networks, including LANs, WANs, and intranets
              </li>
              <li>
                Configuring and managing network devices, such as routers, switches, and firewalls
              </li>
              <li>
                Troubleshooting network and system issues, identifying and resolving hardware and software problems
              </li>
              <li>
                Installing and configuring servers, software applications, and operating systems
              </li>
              <li>
                Providing technical support to end-users and resolving issues reported by them
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;