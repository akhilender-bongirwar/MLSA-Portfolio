/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Portfolio.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Collab Draw",
    description:
      "Developed a collaborative drawing application with real-time features. Utilized Next.js, React-Redux, TypeScript, Socket.io, Express.js, Node.js and Tailwind CSS for this project.",
    url: "https://collab-draw.vercel.app/",
  },
  {
    title: "VS NOTE",
    description:
      "Developed a VS Code extension for managing code snippets and notes.Tech stack used are TypeScript, Svelte, PostgreSQL, TypeORM, JWT, and Passport GitHub package.",
    url: "https://github.com/akhilender-bongirwar/vsnote",
  },
  {
    title: "Code Executor Bot",
    description:
      "Developed a GitHub app analyzing code in issues and providing output. Built using Probot app and the Piston API.",
    url: "https://github.com/akhilender-bongirwar/code-validator",
  },
  {
    title: "Promptify",
    description:
      "Developed dynamic web app for creating and sharing prompts. Tech stacks used are Next.js, Tailwind CSS, MongoDB and Google Oauth 2.0",
    url: "https://promptify-89fwtx63e-akhilender-bongirwar.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
