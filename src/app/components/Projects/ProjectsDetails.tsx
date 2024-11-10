"use client";
import React from "react";
import { ProjectCard } from "./ProjectCards";

const projects = [
  {
    title: "Next js Calculator",
    description:
      "I have created website using html css and javascript so check it out and share your feedback",
    image: "/images/project-1.png",
    url: "https://calculator-next-js-six.vercel.app/ ",
  },
  {
    title: "Clothing E Commerce Website ",
    description:
      "Here is E Commerce website with Next js so check it out and share your feedback",
    image: "/images/project-2.png",
    url: "https://e-commerce-website-pied-chi.vercel.app/"
  },
  {
    title: " E Commerce Book Store ",
    description:
      " Book Store on Core Html,CSS and javascript Here is live link check it",
    image: "/images/project-3.png",
    url: "https://xounity-assignment-2.vercel.app/",
  },
  {
    title: "Periodic Table",
    description:
      "I made this Periodic Table Using HTML & CSS Check it from Live link below",
    image: "/images/project-4.png",
    url: " https://html-css-assignments-omega.vercel.app/",
  },
  {
    title: "React Portfolio",
    description:
      "I have created a React portfolio website in React-js library Check it Here is Live Link",
    image: "/images/project-8.png",
    url: "https://react-portfolio-mauve-gamma.vercel.app/",
  },
  {
    title: "Figma Website",
    description:
      "I have Created a Website Using Figma Template Check it Here is Live Link",
    image: "/images/project-9.png",
    url: "https://assignmen-4-figma.vercel.app/",
  },
  {
    title: "Simple Website",
    description:
      "I have created a simple website Using HTML & CSS Here is Live Link check it and share your feedback",
    image: "/images/project-5.png",
    url: " https://html-css-assignments-o94x.vercel.app/",
  },
  {
    title: "Book Website Landing Page",
    description:
      "I have created Book website Landing Page Here is a Live link below",
    image: "/images/project-6.png",
    url: "https://xounity-assignments.vercel.app/",
  },
  {
    title: "Static Resume",
    description:
      "I Have created Static Resume Using HTML CSS and Typescript Here is a live link below",
    image: "/images/project-7.png",
    url: "https://hackathon-milestone1-static-resume-neon.vercel.app/",
  },
];
 
const Project: React.FC = () => {
  return (
    <div className="container mx-auto mb-8 p-8">
      <h2 className="lg:text-4xl md:text-4xl text-3xl  font-bold text-center mb-24 text-white">
        My{" "}
        <span className="heading text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
          Projects
        </span>
      </h2>
      <div className="projects-map grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
}; 

export default Project;

