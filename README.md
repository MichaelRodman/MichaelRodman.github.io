# Michael Rodman

## CS 499 Computer Science Capstone ePortfolio

Welcome to my Computer Science Capstone ePortfolio. This portfolio documents my growth throughout the Computer Science program and showcases enhanced artifacts in software design and engineering, algorithms and data structures, and databases.

## Code Review

The following code review examines the original functionality, areas for improvement, and planned enhancements for the three artifacts selected for my capstone ePortfolio.

The review covers:

- Travlr Getaways — Software Design and Engineering
- CS 300 Course Planner — Algorithms and Data Structures
- CS 340 Rescue Animal Dashboard — Databases

[Watch the CS 499 Capstone Code Review on YouTube](https://youtu.be/uwn7ROVmib8)

## Travlr Getaways — Software Design and Engineering

### Artifact Description

Travlr Getaways is a full-stack travel application that I originally developed in CS 465 Full Stack Development I during 2026. The application uses the MEAN stack, including MongoDB, Express, Angular, and Node.js. It includes a customer-facing travel website and an Angular administrative interface that allows authorized users to manage trip information through a RESTful API.

### Why I Selected This Artifact

I selected Travlr Getaways because it demonstrates my ability to work across multiple layers of a full-stack application. The project includes client-side development with Angular, server-side development with Node.js and Express, RESTful API design, MongoDB data persistence, authentication, and CRUD functionality.

The original application provided a strong foundation, but it also gave me opportunities to improve areas related to security, validation, error handling, and testing. Revisiting the project during CS 499 allowed me to apply skills I developed after originally creating it and improve the application from a software engineering perspective.

### Enhancement

For the Software Design and Engineering enhancement, I focused on improving the security, reliability, and maintainability of the application.

The enhancement included:

- Adding Angular route protection to prevent unauthenticated users from accessing protected administrative routes
- Creating reusable server-side validation for trip data
- Improving REST API error handling
- Correcting HTTP responses so the API communicates success and failure conditions more accurately
- Expanding automated testing to cover validation, authentication input handling, and controller-level behavior
- Preserving the application's existing administrative CRUD functionality while improving the supporting design

These changes strengthened both the client and server portions of the application and reduced the amount of repeated validation logic in the codebase.

### Skills Demonstrated

This enhancement demonstrates my ability to evaluate an existing application and identify areas where the design can be made more secure and maintainable. Creating reusable validation logic showed how common functionality can be centralized rather than duplicated across controllers. Improving API responses required considering how the server communicates errors and results to client applications.

The Angular route guard also demonstrates my understanding of client-side access control and authenticated application workflows. Automated testing provided an additional way to verify that validation rules behave as expected and helped make the enhanced code easier to maintain.

### Course Outcomes

This enhancement most directly demonstrates Course Outcome Four and Course Outcome Five.

**Course Outcome Four:** Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals.

The enhancement applies established software engineering practices including reusable validation, RESTful API design, structured error handling, Angular route protection, and automated testing. These changes improved the reliability, maintainability, and security of the administrative workflow.

**Course Outcome Five:** Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources.

The enhancement supports this outcome through protected administrative routes, server-side validation, safer API error responses, and authentication-related testing. These changes reduce reliance on client-side behavior alone and help protect the application from invalid or unauthorized requests.

The artifact also partially supports **Course Outcome Two** through the professional written narrative and ePortfolio presentation used to communicate the enhancement and its technical decisions to a broader audience.

This artifact does not independently demonstrate Course Outcomes One and Three as strongly as other components of the capstone portfolio. Those outcomes are addressed more directly through the other artifacts and the portfolio as a whole.

### Reflection

Revisiting Travlr Getaways after completing additional computer science coursework changed the way I evaluated the application. When I originally created the project, much of my attention was focused on making the required features work. During the enhancement, I looked more closely at how the application handled invalid input, unauthorized access, API errors, and testing.

One of the main challenges of the enhancement was that the improvements affected several parts of the application. Route protection involved the Angular client, while validation and error handling involved the Express API and controllers. The changes needed to work together without interfering with the existing CRUD functionality.

The enhancement helped me better understand that software engineering involves more than adding new features. Maintainability, security, testing, and predictable error handling are also important parts of creating professional-quality software.

Professor Sanford's feedback confirmed that the enhancement meaningfully improved Travlr through route protection, reusable validation, safer API error handling, corrected HTTP responses, and automated testing. He recommended expanding automated testing to include authentication and controller-level behavior. I incorporated this feedback by adding additional automated tests that verify authentication input handling and controller-level validation responses. After the additional tests were added, the complete automated test suite contained 10 tests, all of which passed successfully.

### Artifact Links

- [View the Original Travlr Getaways Artifact](https://github.com/MichaelRodman/cs465-fullstack/tree/0750610e6c7fb68c13c68283ccc33b6515ca5dfa)
- [View the Enhanced Travlr Getaways Artifact](https://github.com/MichaelRodman/cs465-fullstack/tree/cs499-enhancement1)
