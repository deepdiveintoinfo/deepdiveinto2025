# 🚀 MeanwhileJS: A Developer-First Component Framework

**MeanwhileJS** is a component-based framework designed to streamline UI development with ready-made tools and workflows. It’s not just a collection of components—it’s an **example-driven, flexible architecture** that encourages you to explore and learn from the built-in design, all while being loose enough to adapt to your specific needs.

## 🎯 Key Features

* **Built-in examples**: MeanwhileJS isn't just a template; it’s a living example of how to build your own components. Every component in the template is designed to teach you how things work so you can customize, extend, and create your own.
Flexible structure: While the folder structure is clean and intuitive, it's just a suggestion. You have the freedom to organize your project as you see fit.
* **Component library**: Install reusable components in your own project via npm install @meanwhilejs/meanwhile.
* **Self-contained micro-frontends (MFE)**: Try components remotely without installation, offering a dynamic playground for new features.
* **MDX-powered content**: Write both your application content and documentation with MDX, blending Markdown and JSX.
Page-based routing: MeanwhileJS uses a page-level routing system where routes are controlled as static variables within each page component.

## 🎯 Why Madrox?

- **Installable via NPM**: Quickly integrate Madrox into any project with one command.
- **Extending Existing Libraries**: Built on top of popular libraries like **ShadCN/UI**, **Animata**, and more, giving you tried-and-tested components with additional flexibility and extensions.
- **Customizable UI Components**: Madrox adds **extra variants** and **customizations** to components, letting you extend existing libraries with ease.
- **MDX-powered Documentation**: Automatically generate and maintain component documentation that evolves with your project. Write your own documentation, customize the built-in docs, or extend existing documentation as you tweak components.
- **Built on Modern Tech**: TailwindCSS, Framer Motion, and React Router are core technologies that power Madrox, ensuring fast, efficient, and responsive UIs.

## 🚀 Key Features

### 1. 📦 **Install via NPM**

Madrox can be easily integrated into your project:

```
npm install @meanwhilejs/meanwhile
```

### 2. 💡 **Extended Components**

Madrox extends components from popular libraries like **ShadCN/UI** and **Animata**, providing additional variants, flexibility, and customization options. This means you get pre-built components from trusted libraries, but with added enhancements tailored to your specific needs.

```
import { Button } from "@meanwhilejs/meanwhile";

export const MyCustomButton = () => <Button variant="primary">Click Me!</Button>;
```

### 3. 🛠️ **Powered by TailwindCSS and Framer Motion**

Madrox relies on **TailwindCSS** for styling and **Framer Motion** for animations, so all components are **highly customizable** and **performant**:

```
<Button size="large" motionProps={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}>
  Hover me!
</Button>
```

### 4. 📚 **Pre-built and Extended Component Library**

Madrox adds new variants and extensions to components, such as **Buttons**, **Modals**, **Accordions**, and more—extending functionality of libraries like **ShadCN/UI** and **Animata**. Components are responsive, accessible, and designed to fit within any application:

- **Buttons**
- **Hero Sections**
- **Modals**
- **Accordions**
- **Alerts**

### 5. 🔧 **CLI-based Component Creation**

With Madrox, you can quickly generate your own components using the built-in CLI:

```
npx m create component MyNewComponent
```

This scaffolds out your component structure, including **component.tsx**, **story.tsx**, and **documentation** files. You get everything you need to build, document, and extend your components.

### 6. 📄 **Use MDX for Custom Documentation**

Madrox integrates **MDX** so you can write your component documentation in markdown-like syntax with JSX support. Create **dynamic documentation** that evolves with your components and ensures your docs are always up-to-date.

### 7. 🔄 **Flexible Folder Structure**

The folder structure in Madrox is **suggested** but not rigid. Feel free to organize your project in a way that works best for your team. This flexibility allows you to start quickly without needing to restructure your existing project.

## 🛠️ Built Using

Madrox is built on top of several modern tools and libraries:

- **ShadCN/UI**: Provides the foundational UI components that Madrox extends with additional variants and features.
- **Animata**: Used for beautiful, customizable animations.
- **TailwindCSS**: Utility-first CSS for styling.
- **Framer Motion**: Powerful motion library for React, used to add smooth animations to components.
- **React Router**: For modern and flexible routing.
- **MDX**: Enables easy documentation generation with JSX in markdown.

## 🚀 Getting Started

To get started, install Madrox into your project:

```bash
npm install @meanwhilejs/meanwhile
```

Once installed, you can explore the extended components or even create your own using the CLI.

You can also explore and experiment with components in the Storybook documentation:

- [Storybook Documentation](https://meanwhile.github.io/meanwhilejs/docs/)

---

Madrox gives you a strong foundation by extending trusted UI libraries, but it also provides flexibility for your own customizations. With built-in MDX documentation and CLI support, you can scale your components while keeping everything well-documented and up-to-date.
