import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Assignment 12</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Answer Of 4 Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">What are the different ways to manage a state in a React application?</h3>
                        <p className="mt-1 dark:text-gray-400">As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">How does prototypical inheritance work?</h3>
                        <p className="mt-1 dark:text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object. getPrototypeOf and Object</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is a unit test? Why should we write unit tests?</h3>
                        <p className="mt-1 dark:text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">React vs. Angular vs. Vue?</h3>
                        <p className="mt-1 dark:text-gray-400">Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;