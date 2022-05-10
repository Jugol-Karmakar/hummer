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

      <div className="px-10 my-10">
        <table className="border">
          <tbody>
            <tr className="border-2 border-black">
              <td className="border-2 border-black text-center">
                <strong>Parameter</strong>
              </td>
              <td className="border-2 border-black text-center">
                <strong>SQL</strong>
              </td>
              <td className="border-2 border-black text-center">
                <strong>NoSQL</strong>
              </td>
            </tr>

            <tr className="border-2 border-black">
              <td className="border-2 border-black">
                <strong>Purpose</strong>
              </td>
              <td className="border-2 border-black">
                A language used to communicate with databases for storage,
                deletion, updation, insertion and retrieval of data.
              </td>
              <td className="border-2 border-black">
                A software to retrieve, store and manage scalability of
                databases.
              </td>
            </tr>
            <tr className="border-2 border-black">
              <td className="border-2 border-black">
                <strong>Development Year</strong>
              </td>
              <td className="border-2 border-black">
                SQL was developed in the year 1970 for flat file storage
                problems.
              </td>
              <td className="border-2 border-black">
                NoSQL was developed in 2000 as an enhanced version for SQL
                databases for unstructured and semi-structured data.
              </td>
            </tr>
            <tr className="border-2 border-black">
              <td className="border-2 border-black">
                <strong>Query Language</strong>
              </td>
              <td className="border-2 border-black">
                SQL databases support Structured Query Languages.
              </td>
              <td className="border-2 border-black">
                NonSQL does not have any declarative query language.
              </td>
            </tr>
            <tr className="border-2 border-black">
              <td className="border-2 border-black">
                <strong>Type</strong>
              </td>
              <td className="border-2 border-black">
                Supports table based data type.
              </td>
              <td>
                Supports document oriented, graph databases, key value
                pair-based.
              </td>
            </tr>
            <tr className="border-2 border-black">
              <td className="border-2 border-black">
                <strong>Scalability</strong>
              </td>
              <td className="border-2 border-black">
                Vertically Scalable&nbsp; (Add resources to increase the
                capacity of the existing hardware and software).
              </td>
              <td className="border-2 border-black">
                Horizontally Scalable (Changing small nodes with larger nodes to
                increase the capacity of the existing hardware and software).
              </td>
            </tr>

            <tr className="border-2 border-black">
              <td className="border-2 border-black">
                <strong>Hardware</strong>
              </td>
              <td className="border-2 border-black">
                Databases that support SQL require powerful hardware to support
                vertical scaling.
              </td>
              <td className="border-2 border-black">
                NonSQL databases require commodity hardware for horizontal
                scaling.
              </td>
            </tr>

            <tr className="border-2 border-black">
              <td className="border-2 border-black">
                <strong>Data Storage</strong>
              </td>
              <td className="border-2 border-black">
                SQL does not support hierarchical storage of data.
              </td>
              <td className="border-2 border-black">
                NoSQL is best suited for hierarchical storage of data.
              </td>
            </tr>
            <tr className="border-2 border-black">
              <td className="border-2 border-black">
                <strong>Distributed Data</strong>
              </td>
              <td className="border-2 border-black">
                SQL databases can only be run on a single system and hence, does
                not follow distribution of data.
              </td>
              <td className="border-2 border-black">
                NoSQL databases are designed to follow data distribution
                features like repetition, partition.
              </td>
            </tr>

            <tr className="border-2 border-black">
              <td className="border-2 border-black">
                <strong>Examples</strong>
              </td>
              <td className="border-2 border-black">
                SQL supports databases like MySQL, SQL Server, Oracle, etc.
              </td>
              <td className="border-2 border-black">
                Nosql databases are Hbase, MongoDB, Redis, etc.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div className="flex items-center">
          <FaHandPointRight className="text-3xl mx-2 text-red-700" />
          <h2 className="text-3xl my-8 font-semibold">How JWT Works?</h2>
        </div>
        <p>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted. A JWT is a string made
          up of three parts, separated by dots (.), and serialized using base64.
          In the most common serialization format, compact serialization, the
          JWT looks something like this: xxxxx.yyyyy.zzzzz.
        </p>
      </div>
    </div>
  );
};

export default Blog;
