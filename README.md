# NodeJs

- Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser

## Run JavaScript using NodeJs.

- Install Node in your system.
- `node file-name.js`

## Importing node module/package.

- To import any module we use `require` keyword.
- `require('fs')` _now fs(FileSystem) module is included in our project_
- `const fs = require('fs')` _including and storing the reference in fs variable_

# How NodeJs Works

- NodeJs is single threaded based on event-driven, non-blocking I/O model.
- Perfect for building fast scalable and data intensive application.
  - Data streaming Application
  - Real Time Chat Application
  - Server Side Web Application

**Do Not Use NodeJS For CPU Intensive Application**

## NPM - Node Package Manager

- The node package manager is a command line interface app.
- That automatically comes included with Node JS.
- In which we use to install and manage Open Source Packages.
- It's the largest software registry in the world.
- It has about 8,00,000 Packages.

## Process

- A process is the execution of a program

## Thread

- Thread is a execution unit that is a part of a process.
- A process can have a multiple threads, all executing at the same time.

## Single-threaded.

- There is one program counter, and one sequence of instructions that can be carried out at any given time.

## Multi-threaded

- Multi-threaded applications have multiple threads within a single process, each having their own program counter, stack and set of registers, but sharing common code, data.

**Advantages of multi-threaded**

1. Responsiveness

- One thread may provide rapid response while other threads are blocked or slowed down being intensive calculations.

2. Resource sharing

- By default threads share common code, data and other resources, which allows multiple tasks to be performed simultaneously in a single address space.

3. Economy

- Creating and managing threads is much faster than performing the same tasks for processes.

4. Scalability

- A single threaded process can only run on one CPU, no matter how many may be available, whereas the execution of a multi-threaded application may be split amongst available processors.

## Installing packages locally

- `npm install package_name`

## Installing packages globally.

- `npm install -g package_name`

## Updating packages.

- `npm update package_name`

## Uninstalling packages.

- `npm uninstall package_name`

## Blocking Functions

- Blocking refers to operations that block further execution until that operation finishes.
- Synchronus functions are blocking functions.
- Thread is busy until function executes.

## Non-Blocking Functions

- Non-blocking refers to code that doesnot block execution.
- Asynchronous functions are Non-blocking functions.
- Thread handovers async functions to even loop and it accepts another request.
