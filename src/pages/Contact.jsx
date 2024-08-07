import React from "react";
import "../index.css";
import maillogo from "../assets/apple.png";
import githublogo from "../assets/github.png";
import linkedinlogo from "../assets/linkedin.png";

function Contact() {
  return (
    <>
      <div
        className="flex items-start justify-center overflow-y-auto p-4"
        id="contact-page"
      >
        <div className="text-center max-w-lg">
          <h1 className="text-2xl md:text-3xl font-semibold py-2 md:py-3 underline">
            Contacts
          </h1>
          <p className="text-base md:text-lg font-regular py-2 md:py-3 text-gray-700">
            Click on the images below to contact me through my Email or Linkedin and you can also check out my GitHub page.
          </p>
          <div>
            <p className="text-lg font-normal text-gray-900 ">Email</p>
            <a href="mailto:ahmed.bein@torontomu.ca">
              <img
                className="h-32 w-32 flex items-center justify-center mx-auto p-4"
                src={maillogo}
                alt="Email black and white logo"
              />
            </a>
            <p className="text-lg font-normal text-gray-900">GitHub</p>
            <a href="https://github.com/AhmedAbdulwasi" target="_blank">
              <img
                className="h-32 w-32 flex items-center justify-center mx-auto p-4"
                src={githublogo}
                alt="Github black and white logo"
              />
            </a>
            <p className="text-lg font-normal text-gray-900">LinkedIn</p>
            <a href="https://www.linkedin.com/in/ahmedaab/" target="_blank">
              <img
                className="h-32 w-32 flex items-center justify-center mx-auto p-4"
                src={linkedinlogo}
                alt="Linkedin black and white logo"
              />
            </a>
          </div>
        </div>
      </div>
      <footer className="m-4 flex justify-center py-4">
        <div className="p-4">
          <p className="font-medium">© 2024 Ahmed Bein. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Contact;
