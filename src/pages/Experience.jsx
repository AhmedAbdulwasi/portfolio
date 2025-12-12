import React from "react";
import "../index.css";

function Experience() {
    return (
      <div
        className="flex items-start justify-center overflow-y-auto p-4"
        id="experience-page"
      >
        <div className="text-center max-w-lg">
          <h1 className="text-2xl md:text-3xl font-semibold py-2 md:py-3 underline">
            Work Experience
          </h1>
  
          <ol className="relative border-s border-gray-200">
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700">
                Sep 2025 - Present
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Developer Co-op At RBC
              </h3>
              <p className="mb-4 text-base font-normal text-gray-700">
                I'm a Software Developer at RBC, working with the homeX Team. Click on the button to learn more about RBC.
              </p>
              <p>
                <a href="https://jobs.rbc.com/ca/en/technology-operations" target="_blank">
                  <button
                    type="button"
                    className="text-black  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
                  >
                    Learn More
                  </button>
                </a>
              </p>
            </li>

              
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-700">
                May 2025 - Aug 2025
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Software Engineer Co-op At Sun Life
              </h3>
              <p className="mb-4 text-base font-normal text-gray-700">
                I was a Software Engineer at Sun Life, working with the Corporate IT Team (specifically with the Anti-Money Laundering team). Sun Life was undergoing a transition from an old vendor's AML platform to its own AML platform called NetReveal. I helped with the transition by providing support in debugging and fixing a temporary AML platform for more than 100+ Suspicious Transaction Reports. Additionally, I dived deeper into Linux, creating two scripts that monitor NetReveal Linux Servers, focusing on permissions and health checks. Click on the button
                to learn more about Sun Life.
              </p>
              <p>
                <a href="https://www.sunlife.ca/en/" target="_blank">
                  <button
                    type="button"
                    className="text-black  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg px-5 py-2.5 me-2 mb-2"
                  >
                    Learn More
                  </button>
                </a>
              </p>
            </li>
          
          </ol>
          <div className="bg-gray-900 text-white p-4 rounded mt-6 max-w-2xl mx-auto overflow-auto border-gray-400 rounded-md border-4 shadow-md">
          <pre className="text-left whitespace-pre-wrap">
            <code>
              {`public class Portfolio {
    public static void main(String args[]) {
        System.out.println("Fun fact: The first programming language I was ever introduced to was C++, but since then, I have forgotten it.");
    }
}`}
            </code>
          </pre>
        </div>
        </div>
      </div>
    );
  }

export default Experience;
