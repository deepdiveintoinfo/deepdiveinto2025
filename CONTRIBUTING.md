# Contributing to Deep Dive into 2025

Thank you for your interest in contributing to **Deep Dive into 2025**! Whether you're a developer, researcher, or writer, your contributions are vital to making this project successful.

This guide will walk you through the steps to contribute effectively. For additional details, see our [interactive Storybook Contributing Guide](https://your-storybook-link.com).

---

## 📖 **Overview of Contribution Types**

### 1. **Technical Contributions**
   - Adding or editing UI components.
   - Writing or improving MDX content for chapters, sections, and evidence pages.
   - Enhancing the evidence tracker or other tools.
   - Optimizing performance, accessibility, and mobile responsiveness.

### 2. **Non-Technical Contributions**
   - Fact-checking and reviewing chapter analyses.
   - Tracking real-world evidence of Project 2025 implementation.
   - Expanding FAQs for clarity and accessibility.
   - Helping simplify complex information to meet various CEFR levels.

---

## 📜 **Using Storybook for Guidance**

We’ve created a **Storybook Contributing Guide** to make it easier to onboard and understand the structure of the project. The guide includes:

- **Component Documentation**: Learn how components work and how to extend them.
- **MDX Content Examples**: See how chapter pages, FAQs, and evidence tracking pages are structured.
- **Interactive Tutorials**: Follow step-by-step instructions to create or edit content.

Access the guide here: [Storybook Contributing Guide](https://your-storybook-link.com).

---

## 🛠 **Getting Started**

### 1. Clone the Repository
   ```bash
   git clone https://github.com/deepdive2025/deepdive2025.git
   cd deepdive2025
   ```

### 2. Install Dependencies
   ```bash
   npm install
   ```

### 3. Run the Development Server
   ```bash
   npm run dev
   ```

### 4. Start Storybook
   ```bash
   npm run storybook
   ```

---

## 📚 **How to Contribute**

### 1. **Improving MDX Content**
   - Edit chapter files or create new ones in the `/src/lib/data/project2025/` directory.
   - Follow the format and structure outlined in the Storybook MDX guide.
   - Use the appropriate CEFR level tags (`Basic`, `Clear`, `Technical`) to ensure accessibility.

### 2. **Adding a New Component**
   - Create a new component in `/src/components`.
   - Document the component using Storybook and add relevant examples.
   - Ensure the component is responsive and accessible.

### 3. **Tracking Evidence**
   - Add new entries to the evidence tracker by updating the `evidence.md` file or the database (if applicable).
   - Include primary sources or links to news articles, government documents, or official statements.

### 4. **Testing and Quality Assurance**
   - Write tests for new components using Jest and React Testing Library.
   - Ensure snapshots and coverage are updated when making changes.
   - Run tests locally with:
     ```bash
     npm run test
     ```

---

## 💡 **Best Practices**

1. **Follow the Style Guide**: Adhere to the coding conventions and structure outlined in the project. See [Style Guide](./STYLE_GUIDE.md).
2. **Be Transparent**: Use primary sources wherever possible and cite them in your contributions.
3. **Focus on Accessibility**: Ensure all contributions meet accessibility standards (e.g., WCAG).
4. **Keep It Modular**: Break down content and components into smaller, reusable parts.

---

## 🌟 **Submitting Changes**

1. **Fork the Repository**:
   - Use the GitHub interface to create a fork.

2. **Create a Branch**:
   - Name your branch descriptively, e.g., `add-chapter-1-analysis`.

   ```bash
   git checkout -b add-chapter-1-analysis
   ```

3. **Commit Your Changes**:
   - Write clear and concise commit messages.
   ```bash
   git commit -m "Add analysis for chapter 1"
   ```

4. **Push and Open a Pull Request**:
   ```bash
   git push origin add-chapter-1-analysis
   ```
   - Open a PR on GitHub and link it to any relevant issues.

---

## 🤝 **Collaboration Tools**

- **GitHub Discussions**: Share ideas, ask questions, and discuss improvements.
- **Storybook**: Review components and MDX content interactively.
- **Issue Tracker**: Report bugs or suggest features.

---

## 📢 **Code of Conduct**

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## ✉️ **Need Help?**

If you have questions or need guidance:
- Check the [Wiki](https://github.com/deepdive2025/deepdive2025/wiki).
- Join the [Discussions](https://github.com/deepdive2025/deepdive2025/discussions).
- Contact us at [deepdiveinto2025@gmail.com](mailto:deepdiveinto2025@gmail.com).

We’re excited to have you on board!
