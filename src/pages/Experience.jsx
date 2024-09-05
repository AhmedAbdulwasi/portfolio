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
                May 2023 - Aug 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Analytics Assistant
              </h3>
              <p className="mb-4 text-base font-normal text-gray-700">
                I was an Analytics Assistant at Magnet working with the Research
                and Evaluation Team. Our purpose/goal is to research LMIs and
                find ways to visualize raw data using multiple technologies such
                as Excel, Tableau, MySQL and much more. I worked closely with
                Senior Data Analysts to revamp dashboards, find ways to optimize
                data, research, create data sources and create multiple systems
                analytical dashboards for senior management. Click on the button
                to learn more about Magnet.
              </p>
              <p>
                <a href="https://poweredbymagnet.ca/" target="_blank">
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
                Jul 2022 - Aug 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Youth In Policing Initiative
              </h3>
              <p className="mb-4 text-base font-normal text-gray-700">
                Working in the 51 Divison, I've responded to community issues
                and maintained a strong relationship between the police and
                other communities while adjusting to changing circumstances.
                Assisted two camp counsellors with executing physical activities
                for children and engaging with them. Selected out of 100+
                interns to be part of a committee to plan and organize a “Talent
                Show” event. Click on the button to learn more about You can
                find more about Youth In Policing Initiative.
              </p>
              <p>
                <a
                  href="https://www.tps.ca/youth-policing-initiative/"
                  target="_blank"
                >
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
                May 2022 - Jun 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900">
                Information Assistant
              </h3>
              <p className="mb-4 text-base font-normal text-gray-700">
                As I Information Assistant, I greeted, directed, and assisted
                electors at a voting location. This includes assisting electors
                at the voting location and provide them with instructions and
                directions, Managing a large flow of electors within a voting
                location, ensuring the voting location is accessible, requesting
                identification, and more. Click on the button to learn more
                about You can find more about Elections Ontario.
              </p>
              <p>
                <a href="https://www.elections.on.ca/en.html" target="_blank">
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
