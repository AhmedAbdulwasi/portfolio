import React from "react";
import "../index.css";

function Projects() {
  return (
    <div
      className="flex items-start justify-center overflow-y-auto p-4"
      id="projects-page"
    >
      <div className="text-center max-w-lg">
        <h1 className="text-2xl md:text-3xl font-semibold py-2 md:py-3 underline">
          Personal Projects
        </h1>

        <a href="https://github.com/AhmedAbdulwasi/Movie-Reviewer" target="_blank" className="block shadow-md mb-6 max-w-sm p-6 bg-white border border-gray-400 rounded-md mx-auto shadow hover:bg-gray-100">
        <time className="mb-1 text-sm font-normal leading-none text-gray-700">
        Apr. 2024 – Aug. 2024
              </time>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Movie Reviewer Application</h5>
          <p className="font-normal text-gray-700">A Movie Reviewer Application that allows you to register a user, add a review, check a review/user, list them, save, delete and sort! This project was entirely done using <strong>Java</strong> and uses the 4 pillars of OOP (Inheritance, Polymorphism, Encapsulation and Abstraction). Do you have a movie that you would like to add a review for? Submit a pull request and share the reviews.txt file!</p>
        </a>
        
        <a href="https://github.com/AhmedAbdulwasi/ToDoList" target="_blank" className="block shadow-md mb-6 max-w-sm p-6 bg-white border border-gray-400 rounded-md mx-auto shadow hover:bg-gray-100">
        <time className="mb-1 text-sm font-normal leading-none text-gray-700">
              Jun. 2024 – Jul. 2024
              </time>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">To-Do List Website</h5>
          <p className="font-normal text-gray-700">A simple full-stack To-Do List Website that allows you to create, view, delete, or update tasks easily. You are also free to use the old version of the ToDoList in the OLD folder. This program uses <strong>Flask</strong>, <strong>SQLite</strong>, <strong>React.js</strong>, <strong>HTML </strong>and<strong> CSS</strong>.</p>
        </a>
        
        <a href="https://github.com/AhmedAbdulwasi/EatGame" target="_blank" className="block shadow-md mb-6 max-w-sm p-6 bg-white border border-gray-400 rounded-md mx-auto shadow hover:bg-gray-100">
        <time className="mb-1 text-sm font-normal leading-none text-gray-700">
              Mar. 2023 – Apr. 2023
              </time>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Eat!</h5>
          <p className="font-normal text-gray-700">Designed a unique gameplay featuring point accumulation through plus sign (+) collection and point deduction via negative sign (-), while navigating to avoid bombs that could end the game. I've also implemented user-friendly controls, allowing game continuation with the spacebar and easy application closure. This program uses <strong>Python (Pygame)</strong>.</p>
        </a>

        <a href="https://github.com/AhmedAbdulwasi" target="_blank" className="block shadow-md mb-6 max-w-sm p-6 bg-white border border-gray-400 rounded-md mx-auto shadow hover:bg-gray-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">More Projects</h5>
          <p className="font-normal text-gray-700">Check out my GitHub Page for more projects. I'm hoping to expand my knowledge in 4 programming languages: <strong>Python</strong>, <strong>Java</strong>, <strong>Javascript</strong>, and <strong>SQL</strong>.</p>
        </a>
        <div className="bg-gray-900 text-white p-4 rounded mt-6 max-w-2xl mx-auto overflow-auto border-gray-400 rounded-md border-4 shadow-md">
            <pre className="text-left whitespace-pre-wrap">
              <code>
                {`console.log('Hoping to continue learning Javascript.');`}
              </code>
            </pre>
        </div>
      </div>
    </div>
  );
}

export default Projects;


