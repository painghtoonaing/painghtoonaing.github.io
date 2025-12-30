import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faServer } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "AWS",
    "Azure",
    "GCP",
    "Ansible",
    "Terraform",
    "Docker",
    "Istio",
    "Argo CD",
    "Jenkins",
    "Kubernetes",
    "GitHub Actions",
    "CI/CD",
    "Bash Scripting",
];

const labelsSecond = [
    "Servers",
    "Firewalls",
    "VPN",
    "Virtualization",
    "Storage",
    "Linux",
    "NAC",
    "Monitoring",
    "Backup Solutions",
    "Active Directory",
    "Networking",
    "Microsoft 365",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>I work with cloud platforms and automation tools to build, deploy, and manage applications efficiently. Automating infrastructure, creating CI/CD pipelines, and managing containers for consistent and scalable environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Infrastructure & System Administration</h3>
                    <p>Implementing, maintaining and supporting IT infrastructure, including servers, storages, networks, Microsoft 365, firewalls, endpoints, NAC and virtualization systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;