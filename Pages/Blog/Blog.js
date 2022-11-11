import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            {/* Q:1 */}
            <div className="card w-9/12 bg-base-100 shadow-xl mx-auto mt-10 border-2">
                <div className="card-body">
                    <h2 className="card-title text-2xl"> Difference between SQL and NoSQL</h2>
                    <p>1.   At the primary stage, the biggest difference between these two technologies is that SQL databases are relational, while NoSQL databases are non-relational or Distributed Database.</p>
                    <p>
                        2.  Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs  and graph databases.
                    </p>
                    <p>
                        3.  SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                    </p>
                    <p>
                        4.  SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
                    </p>
                </div>

            </div>

            {/* Q:2 */}
            <div className="card w-9/12 bg-base-100 shadow-xl mx-auto mt-10 border-2">
                <div className="card-body">
                    <h2 className="card-title text-2xl"> What is JWT, and how does it work?</h2>
                    <p>JWT, or JSON Web Token, is an open standard used to share information between two parties securely — a client and a server. In most cases, it is an encoded JSON containing a set of claims and a signature. It is usually used in the context of other authentication mechanisms like OAuth, OpenID to share user-related information. It is also a popular way to authenticate/authorize users in a microservice architecture.</p>
                    <p>
                        A JWT is a Base64URL encoded string, split into three sections, delimited by periods.
                    </p>
                    <p>
                        1.  Section one is the header. This section contains JWT metadata; typically information about the type of token and the algorithm used to sign it. It is encoded JSON.</p>
                    <p>
                        2.  Section two is the payload. This is the content of the token and is also encoded JSON.</p>
                    <p>
                        3.  Section three is the signature. This is the SHA256 (or some other HMAC) hash of the encoded header, encoded payload, and a secret. This part of the JWT is used to verify the integrity of the message.
                    </p>
                </div>

            </div>
            {/* Q:3 */}
            <div className="card w-9/12 bg-base-100 shadow-xl mx-auto mt-10 border-2">
                <div className="card-body">
                    <h2 className="card-title text-2xl"> What is the difference between javascript and NodeJS?</h2>
                    <p>1.   Javascript is a programming language that is used for writing scripts on the website.</p>
                    <p>
                        NodeJS is a Javascript runtime environment.
                    </p>
                    <p>
                        2.  Javascript can only be run in the browsers.
                    </p>
                    <p>
                        We can run Javascript outside the browser with the help of NodeJS.
                    </p>
                    <p>

                        3.  It is basically used on the client-side.
                    </p>
                    <p>
                        It is mostly used on the server-side.
                    </p>
                    <p>

                        4.  Javascript is capable enough to add HTML and play with the DOM.
                    </p>
                    <p>
                        Nodejs does not have capability to add HTML tags.
                    </p>
                    <p>
                        5.  Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                    </p>
                    <p>
                        V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                    </p>
                    <p>
                        6.  Javascript is used in frontend development.
                    </p>
                    <p>
                        Nodejs is used in server-side development.
                    </p>
                    <p>

                        7.  Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                    </p>
                    <p>
                        Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
                    </p>
                    <p>

                        8.  It is the upgraded version of ECMA script that uses Chrome  V8 engine written in C++.
                    </p>
                    <p>
                        Nodejs is written in C, C++ and Javascript.
                    </p>
                </div>

            </div>

            {/* Q:4 */}
            <div className="card w-9/12 bg-base-100 shadow-xl mx-auto mt-10 border-2">
                <div className="card-body">
                    <h2 className="card-title text-2xl">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy.</p>
                    <p>  When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Blog;