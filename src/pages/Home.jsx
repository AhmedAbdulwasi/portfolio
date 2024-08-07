import React from "react";
import "../index.css";
import pictureOfMe from "../assets/pictureofme.jpg";

function Home() {

  return (
    <>
      <div
        className="flex items-start justify-center overflow-y-auto p-4"
        id="home-page"
      >
        <div className="text-center max-w-lg">
          <h1 className="text-2xl md:text-3xl font-semibold py-2 md:py-3">
            Ahmed's Portfolio
          </h1>

          <p className="text-base text-gray-700 md:text-lg font-regular py-2 md:py-3">
            Computer Science <s>first-year</s> second-year student at Toronto
            Metropolitan University <br />
            <strong>Programming and Web Development Languages: </strong>Python,
            Java, SQL, Javascript, HTML and CSS
          </p>
          <img
            className="max-w-xs flex items-center justify-center mx-auto border-gray-400 rounded-md border-4"
            src={pictureOfMe}
            alt="Picture of Ahmed Bein wearing a dark-blue sweater and jeans holding an Award Certificate"
          ></img>
          
        </div>
      </div>
    </>
  );
}

export default Home;
