# GitHub Copilot Instructions for HTML Project

## Project Overview

This project is a static HTML website focusing on an institutional website for "Pontes Para Leiture" brazilian company. It's a company focues on projects related to reading promotion, literacy and dotation to the cause. As the first campaign, "É só o começo", the company aims to ask for domatins to get new books to inmates in Canoas, Nova Prata and Rio Grande, all in the state of Rio Grande do Sul. The goal is to create a clean, responsive, and accessible user interface.

## Tech Stack

- **HTML5** for semantic structure.
- **CSS3** for styling, with a preference for [e.g., BEM methodology, utility-first classes, specific CSS framework like Tailwind CSS or Bootstrap].
- **JavaScript (Vanilla JS)** for interactive elements, avoiding external libraries unless specified.

## Coding Guidelines

- **Semantic HTML:** Use appropriate HTML5 semantic elements (e.g., `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
- **Accessibility:** Ensure all generated HTML includes ARIA attributes and adheres to WCAG guidelines where applicable (e.g., `alt` attributes for images, proper form labeling).
- **Responsiveness:** Prioritize mobile-first design. Use CSS media queries for responsive layouts.
- **CSS Styling:**
  - Keep CSS organized and modular.
  - Use descriptive class names.
  - Avoid inline styles unless absolutely necessary.
- **JavaScript:**
  - Write clean, readable, and well-commented JavaScript.
  - Minimize global scope pollution.
  - Handle DOM manipulation efficiently.

## Project Structure

- `index.html`: Main entry point.
- `css/`: Contains all CSS files (e.g., `style.css`, `components.css`).
- `js/`: Contains all JavaScript files (e.g., `main.js`, `utils.js`).
- `img/`: Stores all image assets.
- `pages/`: (Optional) Contains additional HTML pages.

## Example Scenario

When asked to create a navigation bar, Copilot should generate semantic HTML using `<nav>` and `<ul>`, with appropriate ARIA attributes for accessibility and a basic responsive structure using CSS classes.

## Specific Instructions for Copilot

- Prioritize semantic HTML over generic `div` elements.
- Always include `alt` attributes for `<img>` tags.
- When generating forms, ensure proper `<label>` association with input fields.
- When suggesting CSS, aim for modularity and maintainability.
- For JavaScript, provide vanilla JS solutions unless explicitly requested otherwise.
