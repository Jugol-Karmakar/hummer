import React from "react";
import { FaHandPointRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="flex items-center">
        <FaHandPointRight className="text-3xl mx-2 text-red-700" />
        <h2 className="text-3xl my-8 font-semibold">
          Difference Between Javascript and Node.js ?
        </h2>
      </div>

      <div className="grid grid-cols-2 px-10 gap-10 mt-6">
        <div className=" px-5 py-6 bg-green-300">
          <h1 className="text-2xl text-center font-bold my-3">Javascript</h1>
          <li className="text-base font-medium my-2">
            {" "}
            JavaScript is a programming language. It is running in any web
            browser with a proper browser engine.
          </li>
          <li className="text-base font-medium my-2">
            Mainly using for any client-side activity for a web application,
            like possible attribute validation or refreshing the page in a
            specific interval or provide some dynamic changes in web pages
            without refreshing the page.
          </li>
          <li className="text-base font-medium my-2">
            {" "}
            JavaScript running any engine like Spider monkey, JavaScript Core
            (Safari), V8 (Google Chrome).
          </li>
        </div>
        <div className=" px-5 py-6 bg-green-200">
          <h2 className="text-2xl text-center font-bold my-3">Node.js</h2>
          <li className="text-base font-medium my-2">
            It is an interpreter and environment for JavaScript with some
            specific useful libraries which JavaScript programming can use
            separately.
          </li>
          <li className="text-base font-medium my-2">
            It mainly used for accessing or performing any non-blocking
            operation of any operating system, like creating or executing a
            shell script or accessing any hardware-specific information or
            running any backend job.
          </li>
          <li className="text-base font-medium my-2">
            Node JS only run in a V8 engine which mainly used by google chrome.
            And javascript program which will be written under this Node JS will
            be always run in V8 Engine.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Blog;
