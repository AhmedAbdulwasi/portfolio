import React, {useState} from "react";
import "../index.css";

function About() {
  const [count,setCount] = useState(2020);
  const handleClick = () => {
    if (count < 2027) {
      setCount(count+1);
    }
  }
  const handleReset = () => {
    setCount(2020);
  }

  return (
    <div
      className="flex items-start justify-center overflow-y-auto p-4"
      id="about-page"
    >
      <div className="text-center max-w-lg mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold py-2 md:py-3 underline">
          About
        </h1>

        <p className="text-base text-gray-700 md:text-lg font-regular py-2 md:py-3">
          I'm majoring in <strong>Computer Science</strong> at{" "}
          <a
            href="https://www.torontomu.ca/science/"
            target="_blank"
            className="text-blue-500"
          >
            Faculty of Science at Toronto Metropolitan University
          </a>{" "}
          (formerly Ryerson University). I first majored in Business Technology
          Management from 2022-23 as a first-year and during that time, I was
          heavily involved in extracurricular activities such as technical
          bootcamps, programs such as DataWorks, leading other first-year
          students and more. This level of dedication outside of my classes
          earned me the Top 10% Most Engaged Student and other awards and
          scholarships. It also incredibly helped my social skills such as
          teamwork, communication skills, interpersonal skills and much more
          <br />
          <br />
          Additionally, I enrolled myself in a Computer Science course called
          "Computer-Enabled Problem Solving" and I loved it with all my heart. I
          was already interested in Computer Science but I never realized that
          it was a <strong>passion</strong> until I began to spend a large
          amount of my free time learning more about programming, algorithms,
          software development life cycle, problem-solving and much more through
          extracurricular activities, educational videos/courses, and more. So I
          transferred and ever since, I never regretted that moment.
          <br />
          <br />
          I'm actually interested in a lot of technical positions that make it
          difficult to choose which path I should focus on but I'm heavily
          leaning towards <strong>software development/engineering</strong> as
          it uses programming languages, algorithms, method approaches and much
          more that highly interests me. Other topics/areas that interest me are
          machine learning, artificial Intelligence, quantum computing, and data
          analysis. Outside of that, I like to play video games, work
          out, play chess, Soccer/Football, and LOVE LOVE <strong>LOVE</strong> binge-watching movies/tv shows.
        </p>
        <p className="text-base text-gray-700 md:text-lg font-regular py-2 md:py-3">Planning to graduate in <strong>{count}</strong></p>
        <button onClick={handleClick} className="text-black  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg px-5 py-2.5 me-2 mb-2">Click To Find Out</button>
        <button onClick={handleReset} className="text-black  bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg px-5 py-2.5 me-2 mb-2">Click To Reset</button>
        <div className="bg-gray-900 text-white p-4 rounded mt-6 max-w-2xl mx-auto overflow-auto border-gray-400 rounded-md border-4 shadow-md">
            <pre className="text-left whitespace-pre-wrap">
              <code>{`print("Favourite programming language? Python.")`}</code>
            </pre>
        </div>
      </div>
    </div>
  );
}

export default About;
