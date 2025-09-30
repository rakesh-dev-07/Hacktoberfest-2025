# Contributing to Modern Landing Page

First off, thank you for considering contributing to our Modern Landing Page project\! We're thrilled you're here. This project is a community-driven initiative, and every contribution, no matter how small, is valued. It's a perfect place for developers to collaborate, especially during **Hacktoberfest 2025**.

This document provides a set of guidelines for contributing to the project. Following them helps us keep the project maintainable and makes the contribution process smoother for everyone.

## Code of Conduct

To ensure a welcoming and inclusive environment, we expect all contributors to adhere to a code of conduct. Please be respectful, considerate, and collaborative in all interactions. Harrassment or exclusionary behavior will not be tolerated.

## How to Contribute

We welcome all sorts of contributions, from fixing typos to adding entirely new feature sections.

### Step 1: Find an Issue or Propose a Feature

* Look for open issues in the **[Issues tab](https://github.com/rakesh/modern-landing-page/issues)**. If you find one you'd like to tackle, comment on it to let us know you're working on it.
* If you have a new idea, like a "Testimonials" or "FAQ" section, please **[create a new issue](https://github.com/rakesh/modern-landing-page/issues/new)** first to discuss it with the maintainers. This prevents you from spending time on a feature that might not be aligned with the project's goals.

### Step 2: Set Up Your Environment

This project uses only HTML, CSS, and JavaScript, so no complex setup is needed.

1. **Fork the repository** by clicking the "Fork" button on the GitHub page.
2. **Clone your forked repository** to your local machine:

    ```bash
    git clone https://github.com/YOUR_USERNAME/modern-landing-page.git
    cd modern-landing-page
    ```

3. **Open `index.html`** in your browser to view the project.

### Step 3: Create a New Branch

Create a descriptive branch for your changes. This keeps your work organized and separate from the main branch.

```bash
git checkout -b feature/your-feature-name
```

*(Example: `git checkout -b feature/add-testimonials-section`)*

### Step 4: Make Your Changes

Write your code, keeping our project's coding style in mind (see the **Coding Style Guide** below).

### Step 5: Commit and Push

Commit your changes with a clear and descriptive message and push them to your forked repository.

```bash
git add .
git commit -m "feat: Add Testimonials section"
git push origin feature/your-feature-name
```

### Step 6: Create a Pull Request

* Go to your forked repository on GitHub and open a pull request.
* Use a clear title and provide a detailed description of the changes you've made.
* If your changes are visual, please include screenshots or GIFs in the description.
* Link the issue your pull request is solving by including `Closes #issue-number` in the description. This will automatically close the issue when your PR is merged.

## Coding Style Guide

To maintain code consistency, please follow these guidelines.

### HTML

* Use semantic HTML5 tags where appropriate (e.g., `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
* Place new sections in a logical order within `index.html`.

### CSS

* **File Structure**:
  * Create a new CSS file for your feature inside the `css/components/` directory (e.g., `css/components/testimonials.css`).
  * Import your new CSS file at the bottom of the main `css/style.css` file:
        ```css
        @import url("./components/testimonials.css");
        ```
* **CSS Variables**:
  * **Always** use the predefined CSS variables from `:root` in `style.css` for colors, fonts, shadows, etc.. Do not use hardcoded values (e.g., use `var(--primary-color)` instead of `#e94057`).
* **Naming Conventions**:
  * Follow the BEM-like naming convention for classes (e.g., `hero__container`, `features__card`, `nav__link`).
* **Responsiveness**:
  * Ensure that your changes are responsive and look good on all screen sizes, from mobile to desktop.

### JavaScript

* **File Location**: Add all new JavaScript code to the `js/main.js` file.
* **DOM Loading**: Make sure your code runs after the DOM is fully loaded by placing it inside the `DOMContentLoaded` event listener.
* **Comments**: Please add comments to your code to explain its functionality, especially for complex logic.

### Commit Messages

* Use conventional commit message prefixes to indicate the type of change. Examples:
  * `feat:` for a new feature (e.g., `feat: Add Testimonials section`).
  * `fix:` for a bug fix (e.g., `fix: Correct hero button alignment on mobile`).
  * `docs:` for documentation changes (e.g., `docs: Update contribution guide`).
  * `style:` for formatting changes that don't affect code logic (e.g., `style: Format main.js with Prettier`).
  * `refactor:` for code changes that neither fix a bug nor add a feature.

## License

By contributing, you agree that your contributions will be licensed under the **MIT License** that governs the project.
