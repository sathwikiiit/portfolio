import { Code, GitBranch, Database, Bot, Cpu, Wrench, Wind } from "lucide-react";
import type { ComponentType } from "react";

export const profile = {
  name: "Sathwik Vadla",
  initials: "SV",
  title: "Full-Stack Developer & AI Enthusiast",
  location: "Sangareddy, Telangana",
  email: "sathwik.sns@gmail.com",
  linkedin: "https://www.linkedin.com/in/sathwik-vadla-s311",
  github: "https://github.com/sathwikiiit",
  avatar: "/profile.jpg",
  about: "Hello there! I'm a passionate developer dedicated to building innovative solutions through code. I thrive on collaboration and am always eager to connect with fellow enthusiasts, recruiters, or anyone curious about my work."
};

export const navigation = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const experience = [
    {
        role: "Samsung Prism Virtual Intern",
        company: "Samsung R&D",
        period: "2021",
        description: "Engineered an audio/speech-based medical diagnosis system using a Convolutional Neural Network (CNN) architecture based on VGG16. Achieved an 85% accuracy rate by preprocessing audio data, using MFCCs and Spectrograms, and integrating them into the model.",
    },
    {
        role: "CFD Research Intern",
        company: "IIT Hyderabad (under DLR)",
        period: "2022",
        description: "Modeled the combustion chamber of a scramjet engine using ANSYS Fluent. Conducted CFD simulations to analyze combustion characteristics, validated a single-step hydrogen combustion model, and explored multistep mechanisms.",
    },
];

export const projects = [
    {
        name: "LegalBot",
        description: "A web app to streamline legal workflows. Features document generation from templates and case management for legal professionals.",
        tags: ["Java", "AI", "Web App", "Automation"],
        image: "/legalbot.png",
        link: "https://github.com/sathwikiiit/Legalbot_v2",
    },
    {
        name: "Sansei E-commerce Platform",
        description: "A full-stack e-commerce starter built with Angular and Spring Boot. Includes product browsing, cart, and basic checkout.",
        tags: ["Angular", "Spring Boot", "Java", "E-commerce"],
        image: "/sansei.png",
        link: "https://github.com/sathwikiiit/Sansei-v2",
    },
    {
        name: "ToolBunch",
        description: "A versatile Android toolkit for land and legal computations. Features a user-friendly interface to simplify complex calculations.",
        tags: ["Kotlin", "Android", "Mobile App"],
        image: "/toolbunch.png",
        link: "https://github.com/sathwikiiit/ToolBunch",
    },
    {
        name: "Audio-Based Medical Diagnosis",
        description: "A pre-trained VGG16 model fine-tuned to classify audio data from the ICBHE database for medical diagnosis.",
        tags: ["Python", "TensorFlow", "CNN", "AI"],
        image: "/samsungprism.png",
        link: "https://github.com/sathwikiiit/Audio-Based-Medical-Diagnosis",
    },
];

export const mechanicalProjects = [
    {
        name: "Scramjet Combustion Chamber Simulation",
        description: "Modeled the combustion chamber of a scramjet engine using ANSYS Fluent. Conducted CFD simulations to analyze combustion characteristics, validated a single-step hydrogen combustion model, and explored multistep mechanisms.",
        tags: ["CFD", "ANSYS Fluent", "Aerospace", "Combustion"],
        image: "/scramjet.png",
        link: "#",
    },
    {
        name: "Bernoulli's Car",
        description: "Designed and built a model car that demonstrates Bernoulli's principle for propulsion. This project involved concept design, aerodynamic analysis, and fabrication of the prototype to achieve forward motion purely based on air pressure differentials.",
        tags: ["Mechanical Design", "SolidWorks" ,"Aerodynamics", "Prototyping", "Physics"],
        image: "/bernoullicar.png",
        link: "#",
    }
]

type Skill = {
    name: string;
    icon: ComponentType<{ className?: string }>;
}

type Skills = {
    [key: string]: Skill[];
}

export const skills: Skills = {
    "Languages & Frameworks": [
        { name: "Java (Spring Boot)", icon: Code },
        { name: "Python", icon: Code },
        { name: "Kotlin", icon: Code },
        { name: "Angular", icon: Code },
        { name: "React", icon: Code },
    ],
    "Databases & Tools": [
        { name: "MySQL", icon: Database },
        { name: "Git & Version Control", icon: GitBranch },
        { name: "Docker", icon: Wrench },
    ],
    "AI & Mechanical": [
        { name: "Machine Learning", icon: Bot },
        { name: "Deep Learning (CNNs)", icon: Cpu },
        { name: "CFD (ANSYS)", icon: Wind },
    ],
};

export const education = [
    {
        degree: "M.Tech, Data Science & AI",
        institution: "IIIT Dharwad",
        years: "2025 – 2027 (Expected)",
    },
    {
        degree: "B.Tech, Mechanical Engineering",
        institution: "IIITDM Kurnool",
        years: "2019 - 2023",
    },
];
