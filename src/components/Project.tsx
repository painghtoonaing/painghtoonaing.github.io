import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import mock11 from "../assets/images/mock11.png";
import mock12 from "../assets/images/mock12.png";
import "../assets/styles/Project.scss";

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Hands-On Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Deploying-MongoDB-Replica-Set-and-a-Web-App-on-Kubernetes-26b9ad0996aa80f3b0e4eb76c0338aa5?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock01}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Deploying-MongoDB-Replica-Set-and-a-Web-App-on-Kubernetes-26b9ad0996aa80f3b0e4eb76c0338aa5?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>
                            Deploying MongoDB Replica Set and a Web App on
                            Kubernetes
                        </h2>
                    </a>
                    <p>
                        We’ll walk through deploying a MongoDB replica set in a
                        Kubernetes cluster using StatefulSet , and then deploy a
                        simple web app that connects to the MongoDB cluster. All
                        running locally on Minikube.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Jenkins-CI-CD-Pipeline-for-an-AI-Assistant-Application-26b9ad0996aa805ab4b0fdc17f5f8fb5?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock02}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Jenkins-CI-CD-Pipeline-for-an-AI-Assistant-Application-26b9ad0996aa805ab4b0fdc17f5f8fb5?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>
                            Jenkins CI/CD Pipeline for an AI Assistant
                            Application
                        </h2>
                    </a>
                    <p>
                        This document outlines the complete process for setting
                        up a Continuous Integration and Continuous Deployment
                        (CI/CD) pipeline for a containerized AI assistant web
                        application. The primary tools used are Jenkins, Docker,
                        and GitHub.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Deploying-an-app-with-HTTPS-enabled-in-Kubernetes-using-the-Istio-service-mesh-26b9ad0996aa802ea15bf8716faae743?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock03}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Deploying-an-app-with-HTTPS-enabled-in-Kubernetes-using-the-Istio-service-mesh-26b9ad0996aa802ea15bf8716faae743?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>
                            Deploying an app with HTTPS enabled in Kubernetes
                            using the Istio service mesh
                        </h2>
                    </a>
                    <p>
                        We’ll walk through deploying a sample application in a
                        Kubernetes cluster with HTTPS enabled using the Istio
                        service mesh, including configuring TLS termination,
                        setting up a Gateway and VirtualService, and securing
                        traffic with Istio’s ingress gateway. All demonstrated
                        using a local Kubernetes environment like Minikube.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Deploy-a-Highly-Available-Nginx-Web-Server-Cluster-on-AWS-Using-Terraform-26b9ad0996aa808f9c38eeb5699d573e?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock04}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Deploy-a-Highly-Available-Nginx-Web-Server-Cluster-on-AWS-Using-Terraform-26b9ad0996aa808f9c38eeb5699d573e?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>
                            Deploy a Highly Available Nginx Web Server Cluster
                            on AWS Using Terraform
                        </h2>
                    </a>
                    <p>
                        This post walks you through the process of deploying
                        a highly available, scalable Nginx web server cluster on
                        AWS using Terraform. It’s designed for DevOps engineers,
                        cloud architects, and tech enthusiasts who want a
                        reusable, production-grade infrastructure-as-code setup.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Deploying-MongoDB-and-Mongo-Express-on-K8s-using-Minikube-including-secret-configmap-service-and--26b9ad0996aa80088a15db63eb14bee2?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock05}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Deploying-MongoDB-and-Mongo-Express-on-K8s-using-Minikube-including-secret-configmap-service-and--26b9ad0996aa80088a15db63eb14bee2?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>
                            Deploying MongoDB and Mongo-Express on K8s using
                            Minikube, including secret, configmap, service and
                            ArgoCD
                        </h2>
                    </a>
                    <p>
                        This project outlines a GitOps workflow where Terraform
                        provisions a Kubernetes namespace, and ArgoCD then
                        automates the deployment of the MongoDB and
                        Mongo-Express stack from a Git repository. This
                        comprehensive setup includes all required objects like
                        Secrets, ConfigMaps, and services.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Deploying-a-Static-Website-with-AWS-and-Firebase-Authentication-26b9ad0996aa802eb389eb9d21886186?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock06}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Deploying-a-Static-Website-with-AWS-and-Firebase-Authentication-26b9ad0996aa802eb389eb9d21886186?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>
                            Deploying a Static Website with AWS and Firebase
                            Authentication
                        </h2>
                    </a>
                    <p>
                        This project outlines how to host a static website using
                        AWS S3, deliver it securely via CloudFront with HTTPS
                        enabled by AWS Certificate Manager, connect your domain
                        with Route 53, and use Firebase OAuth 2.0 for user
                        authentication. Following the step-by-step instructions,
                        you’ll achieve a secure, authenticated, and
                        custom-domain static site powered by modern AWS and
                        Firebase features.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Deploying-a-Static-Website-with-AWS-S3-CloudFront-ACM-Route-53-and-Google-OAuth-26b9ad0996aa80c9a5feed1e1c7b3ccf?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock07}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Deploying-a-Static-Website-with-AWS-S3-CloudFront-ACM-Route-53-and-Google-OAuth-26b9ad0996aa80c9a5feed1e1c7b3ccf?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>
                            Deploying a Static Website with AWS S3, CloudFront,
                            ACM, Route 53, and Google OAuth
                        </h2>
                    </a>
                    <p>
                        This project explains how to host a static website on
                        AWS S3, serve it via CloudFront with HTTPS using AWS
                        Certificate Manager, configure custom DNS with Route 53,
                        and implement user authentication with Google OAuth.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Static-Website-Deployment-on-AWS-S3-using-GitHub-Actions-26b9ad0996aa80508210f2996e48e2c2?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock08}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Static-Website-Deployment-on-AWS-S3-using-GitHub-Actions-26b9ad0996aa80508210f2996e48e2c2?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>
                            Static Website Deployment on AWS S3 using GitHub
                            Actions
                        </h2>
                    </a>
                    <p>
                        This project demonstrates how to host a static website
                        on Amazon S3 and automatically deploy using GitHub
                        Actions on every push to the main branch (or any branch
                        you choose).
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Provisioning-Virtual-Machines-on-Proxmox-using-Terraform-26b9ad0996aa80bda1aef7dcf1c26b48?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock09}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Provisioning-Virtual-Machines-on-Proxmox-using-Terraform-26b9ad0996aa80bda1aef7dcf1c26b48?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>
                            Provisioning Virtual Machines on Proxmox using
                            Terraform
                        </h2>
                    </a>
                    <p>
                        This project demostrate the process of provisioning
                        virtual machines on Proxmox using Terraform, beginning
                        with preparing an Ubuntu cloud image and creating a VM
                        template. It then details setting up a dedicated
                        Terraform user with specific permissions on Proxmox to
                        automate VM deployment.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/Building-A-Three-Tier-Web-App-on-AWS-26b9ad0996aa80bf8998e75926a26baf?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock10}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/Building-A-Three-Tier-Web-App-on-AWS-26b9ad0996aa80bf8998e75926a26baf?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Building A Three-Tier Web App on AWS</h2>
                    </a>
                    <p>
                        This project demonstrates how to build a Three-Tier Web
                        Application using a variety of AWS services. It
                        integrates Lambda, DynamoDB, CloudFront, API Gateway,
                        and S3 to create a fully functional, scalable web
                        application with dynamic data processing.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/KodeKloud-100-Days-of-DevOps-2889ad0996aa80d68698d28f4d84a059?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock11}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/KodeKloud-100-Days-of-DevOps-2889ad0996aa80d68698d28f4d84a059?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>KodeKloud - 100 Days of DevOps</h2>
                    </a>
                    <p>
                        This repo documents my progress through the KodeKloud
                        100 Days of DevOps challenge, featuring hands-on
                        solutions to real-world DevOps tasks. It includes
                        detailed notes, shell scripts, and configuration files
                        covering core tools like Linux, Git, Docker, Kubernetes,
                        Jenkins, Ansible, Nginx, Tomcat, and Terraform.
                    </p>
                </div>
                <div className="project">
                    <a
                        href="https://painghtoo.notion.site/KodeKloud-100-Days-of-Cloud-2d29ad0996aa8033a36bd9dc69250452?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={mock12}
                            className="zoom"
                            alt="thumbnail"
                            width="100%"
                        />
                    </a>
                    <a
                        href="https://painghtoo.notion.site/KodeKloud-100-Days-of-Cloud-2d29ad0996aa8033a36bd9dc69250452?pvs=25"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>KodeKloud - 100 Days of Cloud</h2>
                    </a>
                    <p>
                        This repository documents my hands-on progress through
                        the KodeKloud 100 Days of Cloud challenge, focused on
                        building strong fundamentals in AWS and Azure. It
                        includes practical labs on virtual machines, networking
                        (VPC/VNet, subnets, routing, load balancers), storage
                        services, IAM and security, databases, containers, and
                        basic automation using cloud CLIs.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Project;
