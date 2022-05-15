import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h1 className="fw-bold text-success pt-5 mt-3">
        Some Important Questions and Answers.
      </h1>
      <hr className="w-75 mx-auto" />
      <article className="text-start">
        <h2 className="fw-bold">
          Question: Difference between javascript and nodejs.
        </h2>
        <p className=" h4 ">
          <h3>
            <u>Answer: </u>
          </h3>
          Javascript is a Scripting language. It is mostly abbreviated as JS. It
          can be said that Javascript is the updated version of the ECMA script.
          Javascript is a high-level programming language that uses the concept
          of Oops but it is based on prototype inheritance.
        </p>
        <p className=" h4 ">
          NodeJS is a cross-platform and opensource Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development.{" "}
        </p>
        <p className=" h4 ">
          1. JavaScript basically used on the client-side, NodeJs mostly used on
          the server-side.
        </p>
        <p className=" h4 ">
          2. JavaScript is executed in the browser whereas using Node.js gives
          us the ability to execute JavaScript outside the browser.
        </p>
        <p className=" h4 ">
          3. JavaScript can manipulate DOM or add HTML within whereas Node.js
          doesn’t have the capability to add HTML.
        </p>
        <p className=" h4 ">
          4. JavaScript is mainly used to create front end web applications or
          develop client-side whereas Node.js is used on the back end
          development that is server-side development
        </p>
        <p className=" h4 ">
          5. Javascript can run in any browser engine as like JS core in safari
          and Spidermonkey in Firefox whereas V8 is the Javascript engine inside
          of Node.js that parses and runs Javascript.
        </p>
      </article>
      <article className="text-start">
        <h2 className="fw-bold">
          Question: Differences between SQL and NoSQL databases.
        </h2>
        <p className=" h4 ">
          <h3>
            <u>Answer: </u>
          </h3>
          The conventional database is SQL (Structured Query language) database
          system that uses tabular relational model to represent data and their
          relationship.
        </p>
        <p className=" h4 ">
          The NoSQL database is the newer one database that provides a mechanism
          for storage and retrieval of data other than tabular relations model
          used in relational databases.
        </p>
        <p className=" h4 ">
          1. Databases are categorized as Relational Database Management System
          (RDBMS); NoSQL databases are categorized as Non-relational or
          distributed database system.
        </p>
        <p className=" h4 ">
          2. SQL databases have fixed or static or predefined schema; NoSQL
          databases have dynamic schema.
        </p>
        <p className=" h4 ">
          3. SQL databases display data in form of tables so it is known as
          table-based database; NoSQL databases display data as collection of
          key-value pair, documents, graph databases or wide-column stores.
        </p>
        <p className=" h4 ">
          4. SQL databases use a powerful language "Structured Query Language"
          to define and manipulate the data; In NoSQL databases, collection of
          documents are used to query the data. It is also called unstructured
          query language. It varies from database to database.
        </p>
        <p className=" h4 ">
          5. MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example
          of SQL database; MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase,
          Neo4j, CouchDB etc. are the example of nosql database.
        </p>
      </article>
      <article className="text-start">
        <h2 className="fw-bold">
          Question: What is the purpose of JWT and how does it work?
        </h2>
        <p className=" h4 ">
          <h3>
            <u>Answer: </u>
          </h3>
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <p className=" h4 ">
          JSON stands for JavaScript Object Notation and is a text-based format
          for transmitting data across web applications. It stores information
          in an easy-to-access manner, both for developers and computers.
        </p>
        <p className=" h4 ">
          In short, JWTs are used as a secure way to authenticate users and
          share information. Typically, a private key, or secret, is used by the
          issuer to sign the JWT. The receiver of the JWT will verify the
          signature to ensure that the token hasn’t been altered after it was
          signed by the issuer. It is difficult for unauthenticated sources to
          guess the signing key and attempt to change the claims within the JWT.
        </p>
        <p className=" h4 ">
          A JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization, the JWT looks something like this:
          xxxxx.yyyyy.zzzzz.
        </p>
        <p className=" h4 ">
          Once decoded, you will get two JSON strings: The header & the payload
          and The signature.
        </p>
      </article>
    </div>
  );
};

export default Blogs;
