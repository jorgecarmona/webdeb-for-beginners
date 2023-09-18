# React.js - Project 1

## Objective

Create a React application using create-react-app and build atomic components based on the specifications given below.

### Part 1: Setting Up

- Initialize a new React application using create-react-app. Name your application react-beginner-quiz.

### Part 2: Component Creation

For this part, you are to create five atomic functional components.

Each component should:

- Be written as a functional component.

Here are the components to create:

### Header

This component should return a header element containing an h1 tag.

- The content of the h1 tag should be a text passed as a **prop** named **title**.

### Footer

This component should return a footer element with a p tag inside it.

- The p tag should contain a text that's passed as a **prop** named **content**.

### Avatar

This component should return an img element.

- This image should have a src attribute set from a **prop** named **imageSrc** and an alt attribute set from a **prop** named **description**.

### Card

This component should return a div with a class of card.

- Inside this div, include an h2 element and a p element. The content of the h2 and p should come from **props** named **title** and **content**, respectively.

### Badge

This component should return a span element with a class of badge.

- The content of the span should be from a **prop** named **label**.

## Part 3: Integration

Now, integrate your components in the main **App** component:

- Use the Header component at the top of your application and pass the prop: **title="React Beginner's Quiz"**

- Create three Card components in the middle, passing different titles and content for each card as props.

- Place the Avatar component somewhere, passing an image URL and description of your choice as props.

- Use the Badge component somewhere on the page (maybe within a card) and pass a relevant label like **"New!"** as its **prop**.

Finally, add the Footer component to the bottom of the page, passing the prop: **content="Created with ❤️ by [Your Name]"**.

## Submission

Once you have completed the quiz:

- Run your application to ensure everything displays as expected.

- Create a pull request and share link with your Lead.

Happy Coding! 🚀
